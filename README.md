# build Express.js APP #

## Overview ##
This warehouse **connect-mysql-app** is mainly an application for connecting to a MySQL database. Judging from the file structure and code content, it contains database connection configurations and basic controller logic. It may be a Node.js application for handling operations related to **warehouse_db** in a MySQL database.

### 'database' folder ###
**Function:** Responsible for creating a connection to the MySQL database and exporting the connection instance for use by other modules.

```
import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "warehouse_db"
});

// Connect to the database
db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the warehouse database");
});

export default db;
```
- Use the mysql2 library to create a database connection instance db, configuring the hostname, username, password, and database name of the database.
- Try to connect to the database. If the connection fails, output the error information. If successful, output a prompt indicating successful connection.

### 'controller' folder ###
**Function:** Defines controller functions that handle operations related to the panels table. Here, it mainly retrieves all records in the panels table.

```
import db from "../database/warehouse-db.js";

const getAllPanels = (req, res) => {
    db.query("SELECT * FROM panels", (err, results) => {
        if (err) {
            console.error("Error retrieving users:", err);
            res.status(500).json({ error: "Error retrieving panels" });
            return;
        }
        res.json(results);
    });
};

export { getAllPanels };
```
- Import the database connection instance db from 'warehouse-db.js'.
- Define the getAllPanels function, which executes the SQL query ```SELECT * FROM ``` panels to get all records from the panels table.
- If the query fails, return a **500** status code and error message; if the query succeeds, return the result in **JSON** format.

## Summary ##
The current function of this repository is to establish a connection with the MySQL database and provide a simple controller function for querying the data of the 'panels' table. More database operation functions may be expanded on this basis in the future.