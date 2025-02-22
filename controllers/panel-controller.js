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