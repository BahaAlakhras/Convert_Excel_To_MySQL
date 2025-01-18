-- create DB with name bahabd
 -- CREATE DATABASE bahabd;


-- Create a table called **users** in the database
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(255),
  address VARCHAR(255)
);
