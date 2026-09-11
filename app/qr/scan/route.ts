import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
  const GA_API_SECRET = process.env.GA_API_SECRET;

  const baseUrl = req.nextUrl.origin;
  const destinationUrl = new URL("/", baseUrl);

  const userAgent = req.headers.get("user-agent") || "Desconocido";
  const clientIp =
    req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

  if (GA_MEASUREMENT_ID && GA_API_SECRET) {
    const gaUrl = `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`;
    const clientId = `qr_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    try {
      await fetch(gaUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          events: [
            {
              name: "qr_code_scan",
              params: {
                source: "qr_fisico",
                campaign: "dieselsoft_promo",
                user_agent: userAgent,
                ip_override: clientIp,
              },
            },
          ],
        }),
      });
    } catch (error) {
      console.error("Error enviando evento a GA4:", error);
    }
  }

  // Redirigir al usuario inmediatamente a la página principal
  return NextResponse.redirect(destinationUrl);
}
