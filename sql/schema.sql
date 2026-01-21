CREATE TABLE whatsapp_logs (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP,
  sender TEXT,
  message TEXT,
  route TEXT,
  reply TEXT
);
