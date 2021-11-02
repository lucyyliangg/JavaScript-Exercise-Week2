const bankAccount = {
  name: "Alex",
  balance: 0,
  
  credit(amount){
    bankAccount.balance += amount;
  },
  
  describe(){
    return `owner: ${bankAccount.name}, balance ${bankAccount.balance}`;
  }
};

console.log(bankAccount.describe());
bankAccount.credit(250);
bankAccount.credit(-80);
console.log(bankAccount.describe());
