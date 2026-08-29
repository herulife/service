CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  wa TEXT NOT NULL,
  merk TEXT,
  kerusakan TEXT NOT NULL,
  kecamatan TEXT,
  status TEXT NOT NULL DEFAULT 'baru',
  created_at TEXT NOT NULL DEFAULT (datetime('now','+7 hours'))
);

CREATE INDEX IF NOT EXISTS idx_bookings_created ON bookings(created_at DESC);
