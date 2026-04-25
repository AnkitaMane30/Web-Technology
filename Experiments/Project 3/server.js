const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

let expenses = [];
let sales = [];


// Get all data
app.get("/api/data", (req, res) => {
    res.json({ expenses, sales });
});

// Add expense
app.post("/api/expense", (req, res) => {
    const { name, crop, amount } = req.body;
    const expense = { name, crop, amount: Number(amount) };
    expenses.push(expense);
    res.json({ message: "Expense added successfully" });
});

// Add sale
app.post("/api/sale", (req, res) => {
    const { crop, quantity, price } = req.body;
    const total = quantity * price;
    const sale = { crop, quantity, price, total };
    sales.push(sale);
    res.json({ message: "Sale added successfully" });
});

// Update expense
app.put("/api/expense/:index", (req, res) => {
    const { amount } = req.body;

    if (expenses[req.params.index]) {
        expenses[req.params.index].amount = Number(amount);
        res.json({ message: "Expense updated successfully" });
    } else {
        res.status(404).json({ message: "Expense not found" });
    }
});

// Update sale
app.put("/api/sale/:index", (req, res) => {
    const { total } = req.body;

    if (sales[req.params.index]) {
        sales[req.params.index].total = Number(total);
        res.json({ message: "Sale updated successfully" });
    } else {
        res.status(404).json({ message: "Sale not found" });
    }
});

// Delete expense
app.delete("/api/expense/:index", (req, res) => {
    expenses.splice(req.params.index, 1);
    res.json({ message: "Expense deleted" });
});

// Delete sale
app.delete("/api/sale/:index", (req, res) => {
    sales.splice(req.params.index, 1);
    res.json({ message: "Sale deleted" });
});

// Clear all
app.delete("/api/clear", (req, res) => {
    expenses = [];
    sales = [];
    res.json({ message: "All data cleared" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});