// =================================================================
// AFN Official Website Multi-Origin Failover Gateway (Cloudflare Worker)
// =================================================================

const BACKENDS = [
    {
        name: "vercel",
        url: "https://vercel.agentfriendly.network",
        weight: 5,
        region: "GLOBAL"
    },
    {
        name: "netlify",
        url: "https://netlify.agentfriendly.network",
        weight: 3,
        region: "AMER/EMEA"
    },
    {
        name: "qcloud",
        url: "https://qcloud.agentfriendly.network",
        weight: 4,
        region: "APAC"
    }
];

const TIMEOUT_MS = 3500;
const USE_GEO_ROUTING = true;

const GEO_ROUTING = {
    'CN': 'vercel',
    'JP': 'qcloud',
    'KR': 'qcloud',
    'SG': 'qcloud',
    'HK': 'qcloud',
    'TW': 'qcloud',
    'US': 'vercel',
    'CA': 'vercel',
    'GB': 'netlify',
    'DE': 'netlify',
    'FR': 'netlify'
};

async function handleRequest(request) {
    const url = new URL(request.url);
    const country = request.cf ? request.cf.country : 'US';

    // 1. Determine Preferred Backend by Geo
    let preferred = BACKENDS[0];
    if (USE_GEO_ROUTING && GEO_ROUTING[country]) {
        const match = BACKENDS.find(b => b.name === GEO_ROUTING[country]);
        if (match) preferred = match;
    }

    const tryList = [preferred, ...BACKENDS.filter(b => b.name !== preferred.name)];

    // 2. Fetch with Automatic Failover
    for (const backend of tryList) {
        try {
            const targetUrl = new URL(url.pathname + url.search, backend.url);
            const backendRequest = new Request(targetUrl, {
                method: request.method,
                headers: request.headers,
                body: request.body,
                redirect: 'follow'
            });

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

            const response = await fetch(backendRequest, {
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (response.ok || response.status < 500) {
                const newHeaders = new Headers(response.headers);
                newHeaders.set('X-AFN-Origin', backend.name);
                return new Response(response.body, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: newHeaders
                });
            }
        } catch (err) {
            // Failover to next backend
        }
    }

    return new Response("AFN Gateway: All edge origins temporarily unavailable.", { status: 502 });
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});
