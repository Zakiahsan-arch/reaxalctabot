-- database/schema.sql

-- Tabel Users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'member', -- member | premium | admin
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Features
CREATE TABLE features (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    enabled BOOLEAN DEFAULT FALSE
);

-- Tabel Messages (log pesan WA)
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender VARCHAR(100),
    receiver VARCHAR(100),
    content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Media Downloads
CREATE TABLE media_downloads (
    id SERIAL PRIMARY KEY,
    url TEXT NOT NULL,
    file_url TEXT,
    status VARCHAR(20) DEFAULT 'pending', -- pending | success | failed
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel AI History
CREATE TABLE ai_history (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT REFERENCES users(id) ON DELETE CASCADE
);

-- Tabel Redeem Codes
CREATE TABLE redeem_codes (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    used BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);