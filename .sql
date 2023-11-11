CREATE database IF NOT EXISTS `crm_db`;
USE `crm_db`;

CREATE TABLE users (
    id binary(16) PRIMARY KEY NOT NULL DEFAULT (UUID_TO_BIN(uuid())),
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    business_entity VARCHAR(10) NOT NULL,
    role VARCHAR(10) NOT NULL,
    password TEXT NOT NULL
);


CREATE TABLE menu (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);


CREATE TABLE options (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    url VARCHAR(100) NOT NULL,
    menu_id INT NOT NULL,
    FOREIGN KEY (menu_id) REFERENCES menu(id)
);

CREATE TABLE access (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id binary(16) NOT NULL,
    option_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (option_id) REFERENCES options(id)
);


INSERT INTO users (username, email, business_entity, role, password) VALUES 
('admin', 'admin@admin.com', 'admin', 'admin', '$2b$15$9gSD0Cz8k6p.DwNmAY92MegqUDb9UGQ8/up2Qp3vkYCopljjM940G');


# admin's password: Admin123