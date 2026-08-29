function auth(context) {
  const url = new URL(context.request.url);
  const token =
    url.searchParams.get("token") ||
    context.request.headers.get("x-admin-token") ||
    "";
  return token === context.env.ADMIN_TOKEN;
}

export async function onRequestGet(context) {
  if (!auth(context)) {
    return new Response("Unauthorized", { status: 401 });
  }
  const { results } = await context.env.DB.prepare(
    "SELECT * FROM bookings ORDER BY created_at DESC LIMIT 200"
  ).all();
  return Response.json(results);
}

export async function onRequestPatch(context) {
  if (!auth(context)) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const { id, status } = await context.request.json();
    if (!id || !status) {
      return Response.json({ ok: false, error: "id & status wajib" }, { status: 400 });
    }
    await context.env.DB.prepare(
      "UPDATE bookings SET status = ? WHERE id = ?"
    )
      .bind(status, id)
      .run();
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
