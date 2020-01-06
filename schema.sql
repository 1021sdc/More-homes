CREATE DATABASE fairtest;

CREATE TABLE fairtest.homes (
    id                SERIAL PRIMARY KEY,
    image             TEXT,
    house_type        VARCHAR(25),
    location          VARCHAR(100),
    description       VARCHAR(100),
    cost_per_night    INT NOT NULL,
    rating            DECIMAL(5,2),
    votes             INT NOT NULL
);
