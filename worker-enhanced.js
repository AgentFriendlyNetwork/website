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

    // 3. Fallback when all edge origins are unavailable
    const isApiRequest = url.pathname.startsWith('/api/');
    if (isApiRequest) {
        return new Response(JSON.stringify({
            status: "degraded",
            code: 503,
            gateway: "Cloudflare-AFN-Edge",
            message: "AFN Edge Gateway Fallback: Origin API temporarily unavailable during synchronization.",
            timestamp: new Date().toISOString()
        }), {
            status: 503,
            headers: {
                'Content-Type': 'application/json',
                'Retry-After': '15',
                'X-AFN-Fallback': 'active'
            }
        });
    }

    const fallbackHtml = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agent Friendly Network (AFN) - Edge Gateway Fallback</title>
  <script defer src="https://umami.wangteng.tech/script.js" data-website-id="2b6eb8d4-026b-4a99-9c96-17bc86c9d2b0"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #09090b;
      color: #f4f4f5;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .container {
      max-width: 640px;
      width: 100%;
      background: #18181b;
      border: 1px solid #27272a;
      border-radius: 16px;
      padding: 36px 32px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 4px 10px;
      border-radius: 6px;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34d399;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 12px;
      margin-bottom: 20px;
    }
    .pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .4; } }
    h1 {
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin-bottom: 12px;
      color: #ffffff;
    }
    p.lead {
      color: #a1a1aa;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .card {
      background: #09090b;
      border: 1px solid #27272a;
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 24px;
    }
    .card-title {
      font-size: 13px;
      font-family: ui-monospace, monospace;
      color: #e4e4e7;
      margin-bottom: 8px;
      font-weight: 600;
    }
    .card-desc {
      font-size: 13px;
      color: #71717a;
      line-height: 1.5;
    }
    .links-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }
    .link-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-radius: 8px;
      border: 1px solid #3f3f46;
      background: #27272a;
      color: #f4f4f5;
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      transition: background 0.2s, border-color 0.2s;
    }
    .link-btn:hover {
      background: #3f3f46;
      border-color: #71717a;
      color: #ffffff;
    }
    .link-btn.primary {
      background: #10b981;
      color: #09090b;
      border-color: #10b981;
      font-weight: 600;
    }
    .link-btn.primary:hover {
      background: #34d399;
    }
    .footer-action {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 16px;
      border-top: 1px solid #27272a;
      font-size: 12px;
      color: #71717a;
      font-family: ui-monospace, monospace;
    }
    button.retry-btn {
      background: transparent;
      border: 1px solid #3f3f46;
      color: #d4d4d8;
      padding: 6px 14px;
      border-radius: 6px;
      cursor: pointer;
      font-family: ui-monospace, monospace;
      font-size: 12px;
      transition: background 0.2s;
    }
    button.retry-btn:hover {
      background: #27272a;
      color: #ffffff;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="badge">
      <div class="pulse-dot"></div>
      <span>AFN EDGE GATEWAY // DEGRADED MODE</span>
    </div>
    <h1>Agent Friendly Network (AFN)</h1>
    <p class="lead">
      The distributed multi-cloud origins (Vercel, Netlify, Tencent EdgeOne) are currently synchronizing. The gateway has transitioned to high-availability static fallback mode.
    </p>

    <div class="card">
      <div class="card-title">Ecosystem Navigation Notice</div>
      <div class="card-desc">
        All RFC standards, protocol definitions, and developer tools remain accessible via GitHub and the AgentUniver sovereign marketplace.
      </div>
    </div>

    <div class="links-grid">
      <a href="https://agentuniver.com" class="link-btn primary" target="_blank" rel="noreferrer">
        <span>AgentUniver Marketplace</span>
        <span>&rarr;</span>
      </a>
      <a href="https://github.com/Agent-Friendly-Network" class="link-btn" target="_blank" rel="noreferrer">
        <span>GitHub Organization</span>
        <span>&rarr;</span>
      </a>
      <a href="https://github.com/Agent-Friendly-Network/A2A-Protocols" class="link-btn" target="_blank" rel="noreferrer">
        <span>A2A Protocol RFCs</span>
        <span>&rarr;</span>
      </a>
      <a href="mailto:contact@agentfriendly.network" class="link-btn">
        <span>Consortium Support</span>
        <span>&rarr;</span>
      </a>
    </div>

    <div class="footer-action">
      <span>Auto retry in <strong id="cd">15</strong>s</span>
      <button class="retry-btn" onclick="location.reload()">Retry Now</button>
    </div>
  </div>

  <script>
    let t = 15;
    const cdEl = document.getElementById('cd');
    setInterval(() => {
      t--;
      if (cdEl) cdEl.textContent = t;
      if (t <= 0) location.reload();
    }, 1000);
  </script>
</body>
</html>`;

    return new Response(fallbackHtml, {
        status: 503,
        headers: {
            'Content-Type': 'text/html; charset=UTF-8',
            'Retry-After': '15',
            'X-AFN-Fallback': 'active'
        }
    });
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

