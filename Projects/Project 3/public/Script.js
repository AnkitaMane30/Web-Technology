let expenses = [];
let sales = [];

const expenseForm = document.getElementById("expenseForm");
const saleForm = document.getElementById("saleForm");
const historyTable = document.getElementById("historyTable");

// Load data from backend
async function loadData() {
    const res = await fetch("/api/data");
    const data = await res.json();

    expenses = data.expenses;
    sales = data.sales;

    renderHistory();
    updateDashboard();
}

// Dashboard update
function updateDashboard() {
    const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
    const totalSales = sales.reduce((sum, s) => sum + s.total, 0);
    const profit = totalSales - totalExpense;

    const expenseEl = document.getElementById("totalExpense");
    const salesEl = document.getElementById("totalSales");
    const profitEl = document.getElementById("profit");

    if (expenseEl) expenseEl.textContent = totalExpense;
    if (salesEl) salesEl.textContent = totalSales;
    if (profitEl) profitEl.textContent = profit;
}

// Render table
function renderHistory() {
    if (!historyTable) return;

    historyTable.innerHTML = "";

    expenses.forEach((e, index) => {
        historyTable.innerHTML += `
        <tr>
            <td>Expense</td>
            <td>${e.name}</td>
            <td>${e.crop}</td>
            <td>₹${e.amount}</td>
            <td>
                <button onclick="editExpense(${index})">Edit</button>
                <button onclick="deleteExpense(${index})">Delete</button>
            </td>
        </tr>`;
    });

    sales.forEach((s, index) => {
        historyTable.innerHTML += `
        <tr>
            <td>Sale</td>
            <td>${s.crop}</td>
            <td>${s.crop}</td>
            <td>₹${s.total}</td>
            <td>
                <button onclick="editSale(${index})">Edit</button>
                <button onclick="deleteSale(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

// Edit Expense
async function editExpense(index) {
    const newAmount = prompt("Enter new amount:");

    if (newAmount !== null) {
        await fetch(`/api/expense/${index}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: newAmount })
        });

        alert("Expense updated successfully");
        loadData();
    }
}

// Edit Sale
async function editSale(index) {
    const newTotal = prompt("Enter new total:");

    if (newTotal !== null) {
        await fetch(`/api/sale/${index}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ total: newTotal })
        });

        alert("Sale updated successfully");
        loadData();
    }
}

// Delete functions
async function deleteExpense(index) {
    await fetch(`/api/expense/${index}`, { method: "DELETE" });
    loadData();
}

async function deleteSale(index) {
    await fetch(`/api/sale/${index}`, { method: "DELETE" });
    loadData();
}

// Clear all
async function clearHistory() {
    if (confirm("Are you sure you want to delete all history?")) {
        await fetch("/api/clear", { method: "DELETE" });
        loadData();
    }
}

// Add expense
if (expenseForm) {
    expenseForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("expenseName").value;
        const crop = document.getElementById("cropName").value;
        const amount = document.getElementById("expenseAmount").value;

        await fetch("/api/expense", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, crop, amount })
        });

        alert("Expense added successfully");
        expenseForm.reset();
        loadData();
    });
}

// Add sale
if (saleForm) {
    saleForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const crop = document.getElementById("saleCrop").value;
        const quantity = document.getElementById("quantity").value;
        const price = document.getElementById("price").value;

        await fetch("/api/sale", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ crop, quantity, price })
        });

        alert("Sales added successfully");
        saleForm.reset();
        loadData();
    });
}

// Initialize
loadData();