// database/seed.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'rexalctabotz',
  password: 'yourpassword', // TODO: ganti dengan password PostgreSQL kamu
  port: 5432,
});

const seed = async () => {
  try {
    // Insert user admin
    await pool.query(`
      INSERT INTO users (name, email, password, role)
      VALUES ('Admin', 'admin@mail.com', 'hashedpassword', 'admin')
      ON CONFLICT (email) DO NOTHING;
    `);

    // Insert fitur default
    await pool.query(`
      INSERT INTO features (name, description, enabled)
      VALUES 
        ('Anti-Link', 'Blokir link yang dikirim di grup WhatsApp', false),
        ('Media Downloader', 'Download video dari TikTok, Instagram, YouTube', true),
        ('AI Assistant', 'Jawab pertanyaan otomatis dengan AI', false)
      ON CONFLICT (name) DO NOTHING;
    `);

    // Insert redeem code contoh
    await pool.query(`
      INSERT INTO redeem_codes (code, used)
      VALUES ('ABC123XYZ', false)
      ON CONFLICT (code) DO NOTHING;
    `);

    console.log('✅ Seed data berhasil dimasukkan');
  } catch (err) {
    console.error('❌ Error saat seed data:', err);
  } finally {
    pool.end();
  }
};

seed();