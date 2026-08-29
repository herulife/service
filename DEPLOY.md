# Deploy - Benua Komputer (Cloudflare Pages + D1)

Project ini sudah lengkap: situs SEO static + sistem booking (form customer &
dashboard admin) dengan database D1 (SQLite Cloudflare). Tinggal deploy.

## Yang sudah disiapkan (otomatis)
- Database D1 `benua_db` sudah dibuat (uuid `eed67082-1273-495d-8436-5d644bb013a6`)
  dan schema `bookings` sudah di-apply.
- `wrangler.toml` sudah berisi binding D1.

## Yang perlu Anda jalankan (di komputer sendiri)
> wrangler tidak bisa di-install di sandbox, jadi deploy dilakukan di lokal Anda.

```bash
# 1. Install wrangler (global)
npm install -g wrangler

# 2. Login / set token Cloudflare
wrangler login            # atau export CF_API_TOKEN=token_anda

# 3. Deploy (membuat project 'benuatech' otomatis)
wrangler pages deploy public --project-name benuatech

# 4. Set admin token (untuk akses /admin.html)
wrangler pages secret put ADMIN_TOKEN --project-name benuatech
# masukkan token apa saja, mis: Benua2026!Admin  -> simpan baik-baik

# 5. Hubungkan domain (otomatis buat DNS record di Cloudflare)
wrangler pages domain add benuatech.my.id --project-name benuatech
```

Setelah selesai:
- Situs: https://benuatech.my.id
- Booking customer: https://benuatech.my.id/booking.html
- Admin: https://benuatech.my.id/admin.html  (minta token dari langkah 4)

## Catatan
- Domain `benuatech.my.id` sudah di Cloudflare → penambahan domain di atas
  otomatis membuat CNAME (orange cloud) ke Pages. Tidak perlu ubah DNS manual.
- Situs lama di `service-tasik.vercel.app` masih jalan; bisa diarahkan ke domain
  baru atau dibiarkan (disarankan redirect ke benuatech.my.id di Vercel).
- Ganti `ADMIN_TOKEN` secara berkala. Jangan bagikan token Cloudflare/R2 di chat.
