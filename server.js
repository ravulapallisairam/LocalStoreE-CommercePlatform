const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Hardcoded products
const products = [
  { id: 1, name: "Pen", price: 20, description: "Blue ballpoint pen" },
  { id: 2, name: "Notebook", price: 50, description: "A4 ruled notebook" },
  { id: 3, name: "Pencil", price: 10, description: "HB pencil" },
];

// Routes
app.get("/", (req, res) => res.send("Backend Running ✅"));
app.get("/api/products", (req, res) => res.json(products));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
