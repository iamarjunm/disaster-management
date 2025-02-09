import mysql.connector
from mysql.connector import errorcode
from datetime import datetime

# Establish connection to MySQL
try:
    conn = mysql.connector.connect(
        host='localhost',
        user='arjun',
        password='23042005',
        port=3306,
        database='crisis_compass'  # Ensure this is the correct database name
    )
    cursor = conn.cursor()
    print("Successfully connected to MySQL")

    # Check if table 'disaster_reports' exists, and create if it doesn't
    cursor.execute("SHOW TABLES")
    tables = cursor.fetchall()

    if ('disaster_reports',) not in tables:
        cursor.execute("""
           CREATE TABLE disaster_reports (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    date DATETIME NOT NULL,
    type ENUM('flood', 'earthquake', 'fire', 'hurricane', 'tsunami', 'landslide', 'volcano', 'drought', 'blizzard', 'tornado', 'extreme_heat', 'storm') NOT NULL,
    location VARCHAR(255) NOT NULL,
    severity ENUM('low', 'medium', 'high', 'critical') NOT NULL,
    description TEXT NOT NULL,
    pictures VARCHAR(255) -- Store image filenames or paths as a string
    ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
        """)
        print("Table 'disaster_reports' created successfully")

except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Error: Incorrect user name or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Error: Database does not exist")
    elif err.errno == errorcode.ER_NO_DB_ERROR:
        print("Error: No database selected")
    else:
        print(err)
finally:
    if conn.is_connected():
        cursor.close()
        conn.close()
        print("MySQL connection is closed")
