function createAccount(pin, amount = 0) {
    let balance = amount;
  
    return {
      checkBalance(providedPin) {
        if (providedPin !== pin) {
          return "Invalid PIN.";
        }
        return `$${balance}`;
      },
      deposit(providedPin, amount) {
        if (providedPin !== pin) {
          return "Invalid PIN.";
        }
        balance += amount;
        return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
      },
      withdraw(providedPin, amount) {
        if (providedPin !== pin) {
          return "Invalid PIN.";
        }
        if (amount > balance) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        balance -= amount;
        return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
      },
      changePin(providedPin, newPin) {
        if (providedPin !== pin) {
          return "Invalid PIN.";
        }
        pin = newPin;
        return "PIN successfully changed!";
      }
    }
  }

module.exports = { createAccount };
