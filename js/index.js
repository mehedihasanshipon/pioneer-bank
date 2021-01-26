// Login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = 'block';
})

// Deposit button event handler 
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click',function(){
    // const depositAmount = document.getElementById("deposit-amount").value;
    // const depositNumber = parseFloat(depositAmount);

    const depositNumber = getInputNumber("deposit-amount");

    // const currentDeposit = document.getElementById("current-deposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("current-deposit").innerText = totalDeposit;
    
    updateSpanText("current-deposit",depositNumber);
    updateSpanText("currentBalance",depositNumber);
    
    document.getElementById("deposit-amount").value = "";
})

// Deposit button event handler 
const withdrawButton = document.getElementById("addWithdraw");
withdrawButton.addEventListener('click',function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    updateSpanText("currentWithdraw",withdrawNumber);
    document.getElementById("addWithdraw").value = "";
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}