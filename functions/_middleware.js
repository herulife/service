// Injects Google Analytics 4 into every HTML response.
// Ganti G-XXXXXXXXXX dengan Measurement ID GA4 Anda.
const GA_ID = "G-XXXXXXXXXX";

const SNIPPET = `<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_ID}');
</script>`;

export async function onRequest(context) {
  const response = await context.next();
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return response;

  const html = await response.text();
  const headers = new Headers(response.headers);
  headers.delete("content-length");

  return new Response(html.replace("</head>", `${SNIPPET}\n</head>`), {
    status: response.status,
    headers,
  });
}
