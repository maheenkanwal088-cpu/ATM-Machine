let balance = 1000; // Starting balance

function checkPin() {
    let userPin = document.getElementById("pin").value;

    if (userPin === "1234") {
        document.getElementById("pinScreen").style.display = "none";
        document.getElementById("menuScreen").style.display = "block";
        document.getElementById("error").innerText = ""; // Clear error
    } else {
        document.getElementById("error").innerText = "❌ Invalid PIN. Try 1234";
    }
}

function withdraw() {
    let amount = prompt("Enter amount to withdraw:");
    amount = Number(amount);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
    } else if (amount > balance) {
        alert("Insufficient Balance! Your current balance is: " + balance);
    } else {
        balance -= amount;
        alert("✅ Withdrawal Successful!\nRemaining Balance: " + balance);
    }
}

function deposit() {
    let amount = prompt("Enter amount to deposit:");
    amount = Number(amount);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
    } else {
        balance += amount;
        alert("✅ Deposit Successful!\nNew Balance: " + balance);
    }
}

function checkBalance() {
    alert("📊 Your current balance is: " + balance);
}

function exitATM() {
    document.getElementById("pin").value = ""; // Clear input
    document.getElementById("menuScreen").style.display = "none";
    document.getElementById("pinScreen").style.display = "block";
}