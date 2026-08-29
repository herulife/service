export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const data = await request.json();
    const name = (data.name || "").toString().trim();
    const wa = (data.wa || "").toString().trim();
    const merk = (data.merk || "").toString().trim();
    const kerusakan = (data.kerusakan || "").toString().trim();
    const kecamatan = (data.kecamatan || "").toString().trim();

    if (!name || !wa || !kerusakan) {
      return Response.json(
        { ok: false, error: "Nama, WhatsApp, dan keluhan wajib diisi." },
        { status: 400 }
      );
    }

    const info = await env.DB.prepare(
      `INSERT INTO bookings (name, wa, merk, kerusakan, kecamatan)
       VALUES (?, ?, ?, ?, ?)`
    )
      .bind(name, wa, merk, kerusakan, kecamatan)
      .run();

    const id = info.meta?.lastRowId ?? null;

    // Format pesan WhatsApp ke admin
    const waMsg =
      `Halo Benua Komputer, saya mau service laptop.%0A` +
      `Nama: ${name}%0A` +
      `WA: ${wa}%0A` +
      `Merk: ${merk || "-" }%0A` +
      `Keluhan: ${kerusakan}%0A` +
      `Lokasi: ${kecamatan || "-" }`;
    const waLink = `https://api.whatsapp.com/send?phone=6282114752228&text=${waMsg}`;

    return Response.json({ ok: true, id, waLink });
  } catch (err) {
    return Response.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
