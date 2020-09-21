const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransactions(amount, type) {
    let transaction = {
      id: this.transactions.lenght + 1,
      type: type,
      amount: amount,
    };
    return transaction;
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW),
      );
    } else {
      alert('Запрещено. Не достаточно средств на счету');
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  getTransactions(type) {
    const summAmount = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        summAmount += transaction.amount;
      }
    }
  },
};
