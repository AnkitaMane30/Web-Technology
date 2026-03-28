let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let sales = JSON.parse(localStorage.getItem("sales")) || [];

const expenseForm = document.getElementById("expenseForm");
const saleForm = document.getElementById("saleForm");
const historyTable = document.getElementById("historyTable");

function saveData(){
localStorage.setItem("expenses", JSON.stringify(expenses));
localStorage.setItem("sales", JSON.stringify(sales));
}

function updateDashboard(){

const totalExpense = expenses.reduce((sum,e)=>sum+e.amount,0);

const totalSales = sales.reduce((sum,s)=>sum+s.total,0);

const profit = totalSales - totalExpense;

const expenseEl = document.getElementById("totalExpense");
const salesEl = document.getElementById("totalSales");
const profitEl = document.getElementById("profit");

if(expenseEl) expenseEl.textContent = totalExpense;
if(salesEl) salesEl.textContent = totalSales;
if(profitEl) profitEl.textContent = profit;

}

function renderHistory(){

    if(!historyTable) return;

    historyTable.innerHTML="";

    expenses.forEach((e,index)=>{
    let row = `
        <tr>
            <td>Expense</td>
            <td>${e.name}</td>
            <td>${e.crop}</td>
            <td>₹${e.amount}</td>
            <td>
            <button onclick="editExpense(${index})">Edit</button>
            <button onclick="deleteExpense(${index})">Delete</button>
            </td>
        </tr>
        `;

    historyTable.innerHTML += row;
    });

    sales.forEach((s,index)=>{
    let row = `
        <tr>
            <td>Sale</td>
            <td>${s.crop}</td>
            <td>${s.crop}</td>
            <td>₹${s.total}</td>
            <td>
            <button onclick="editSale(${index})">Edit</button>
            <button onclick="deleteSale(${index})">Delete</button>
            </td>
        </tr>
        `;

    historyTable.innerHTML += row;
    });

}

function deleteExpense(index){

    expenses.splice(index,1);

    saveData();
    renderHistory();
    updateDashboard();
}

function deleteSale(index){

    sales.splice(index,1);

    saveData();
    renderHistory();
    updateDashboard();

}

function editExpense(index){
    let newAmount = prompt("Enter new amount:", expenses[index].amount);

    if(newAmount !== null){

        expenses[index].amount = Number(newAmount);
        saveData();
        renderHistory();
        updateDashboard();
    }
}

function editSale(index){
    let newTotal = prompt("Enter new total:", sales[index].total);
    if(newTotal !== null){

        sales[index].total = Number(newTotal);
        saveData();
        renderHistory();
        updateDashboard();
    }
}

function clearHistory(){

    if(confirm("Are you sure you want to delete all history?")){

        expenses = [];
        sales = [];

        saveData();
        renderHistory();
        updateDashboard();

    }

}

if(expenseForm){
    console.log(expenseForm);
    expenseForm.addEventListener("submit",function(e){

    e.preventDefault();

    const name = document.getElementById("expenseName").value;
    const crop = document.getElementById("cropName").value;
    const amount = Number(document.getElementById("expenseAmount").value);

    const expense = {name,crop,amount};

    expenses.push(expense);

    saveData();
    renderHistory();
    updateDashboard();

    expenseForm.reset();

    });

}

if(saleForm){
    saleForm.addEventListener("submit",function(e){

    e.preventDefault();

    const crop = document.getElementById("saleCrop").value;
    const quantity = Number(document.getElementById("quantity").value);
    const price = Number(document.getElementById("price").value);

    const total = quantity * price;

    const sale = {crop,quantity,price,total};

    sales.push(sale);

    saveData();
    renderHistory();
    updateDashboard();

    saleForm.reset();

    });

}

renderHistory();
updateDashboard();