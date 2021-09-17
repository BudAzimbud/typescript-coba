CREATE DATABASE typescriptdatabase;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email TEXT
);


INSERT INTO users(name,email) VALUES
('azim','azim@gmail.com'),
('regi','regi@gmail.com');
    
