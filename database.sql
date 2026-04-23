CREATE DATABASE budget_app;

\c budget_app;

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  type VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);