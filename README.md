# 🌍 Disaster Management Website  

A **Disaster Management Web App** built using **Node.js, Express, EJS, HTML, CSS, Python, and MySQL**. This platform helps users access crucial information about disasters, their impact, prevention measures, and emergency response plans.  

---

## 🔥 Features  

✅ **Disaster Catalog** – Browse various disaster types with images, descriptions, and details.  
✅ **Detailed Disaster Information** – View severity, previous cases, emergency response, and prevention methods.  
✅ **Search & Filter** – Easily find specific disasters using search and filter options.  
✅ **Admin Panel** – Manage disaster entries through a user-friendly interface.  
✅ **Database Integration** – MySQL stores disaster data efficiently.  
✅ **Python Scripts** – Automate data processing and analysis.  
✅ **Responsive Design** – Fully optimized for different devices.  

---

## 🛠️ Tech Stack  

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS, HTML, CSS  
- **Database:** MySQL  
- **Additional:** Python (for data processing and automation)  

---

## 🚀 Installation & Setup  

1️⃣ Clone the repository:  
```sh
git clone https://github.com/your-username/disaster-management.git
cd disaster-management
```

2️⃣ Install dependencies:  
```sh
npm install
```

3️⃣ Set up MySQL database:  
- Create a MySQL database  
- Import `database.sql` (if provided)  

4️⃣ Configure `.env` file with your database credentials:  
```sh
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=disaster_db
```

5️⃣ Run the application:  
```sh
npm start
```
or  
```sh
node server.js
```

6️⃣ Open in browser:  
```
http://localhost:3000
```

---

## 📌 Folder Structure  

```
/disaster-management
│── /public           # Static files (CSS, images, etc.)
│── /views            # EJS templates
│── /routes           # Express routes
│── /data             # Disaster data in JSON/JS
│── /python-scripts   # Python scripts for automation
│── /config           # Database config
│── server.js         # Main Express server file
│── package.json      # Dependencies and scripts
│── README.md         # Project documentation
```

---

## 🛡️ Security & Best Practices  

- Secure API routes  
- Use `.env` for sensitive information  
- Sanitize inputs to prevent SQL injection  
- Optimize performance for database queries  

---

## 🤝 Contributing  

Contributions are welcome! Feel free to fork the repo, create issues, and submit pull requests.  

---

## 📜 License  

This project is open-source and available under the **MIT License**.  

---
