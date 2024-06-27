-- Prepares mysql server for medbooker

CREATE DATABASE IF NOT EXISTS medbooker_dev_db;
CREATE USER IF NOT EXISTS 'medbooker_dev'@'localhost' IDENTIFIED BY 'medbooker_dev_pwd';
GRANT ALL PRIVILEGES ON medbooker_dev_db.* TO 'medbooker_dev'@'localhost';
FLUSH PRIVILEGES;
