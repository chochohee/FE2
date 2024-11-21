class BankAccount {
  private balance: number;
  private interestRate: number;
  private interestCeiling: number;
  private id: number;
  private favoriteAccounts: BankAccount[] = [];

  constructor(
    id: number,
    balance: number,
    interestRate: number,
    interestCeiling: number
  ) {
    this.id = id;
    this.balance = balance;
    this.interestRate = interestRate;
    this.interestCeiling = interestCeiling;
  }

  // 입금
  deposit(amount: number): void {
    this.balance += amount;
  }

  //출금
  withDraw(amount: number): void {
    if (this.balance - amount < 0) {
      throw new Error("잔액이 부족합니다.");
    }
    this.balance -= amount;
  }

  // 잔액조회
  getBalance(): number {
    return this.balance;
  }

  //월별 이자율 확인
  getMonthlyInterest(): number {
    if (this.balance >= this.interestCeiling) {
      this.balance = this.interestCeiling;
    }
    const result = (this.balance * this.interestRate) / 12;
    return Number(result.toFixed(1));
  }

  // 송금
  transferMoney(account: BankAccount, amount: number): void {
    if (this.balance - amount < 0) {
      throw new Error("잔액이 부족합니다.");
    }
    this.withDraw(amount), account.deposit(amount);
  }
  // 즐겨찾기 계좌 추가
  addAccountToFavorites(account: BankAccount): void {
    this.favoriteAccounts.push(account);
  }

  // 즐겨찾기 목록 조회
  getFavoriteAccounts(): BankAccount[] {
    return this.favoriteAccounts;
  }

  // 즐겨찾기 계좌 삭제
  removeFavoriteAccountById(id: number): void {
    const originalLength = this.favoriteAccounts.length;

    /*
    //전달한 ID와 값이 다른 계좌만 모아서 새로운 배열로 반환
    this.favoriteAccounts = this.favoriteAccounts.filter((account) => 
      id !== account.id;
    );

    // 삭제할 계좌가 없다
    if(originalLength === this.favoriteAccounts.length){
        throw new Error("즐겨찾기 계좌에서 해당 계좌를 찾을 수 없습니다!")
    }*/

    const indexToRemove = this.favoriteAccounts.findIndex(
      (account: BankAccount) => account.id === id
    );

    if (indexToRemove === -1) {
      throw new Error("즐겨찾기 계좌에서 해당 계좌를 찾을 수 없습니다!");
    }

    this.favoriteAccounts.splice(indexToRemove, 1);
  }
}

const account1 = new BankAccount(1, 1000, 0.1, 10000);
const account2 = new BankAccount(2, 1000, 0.1, 10000);
const account3 = new BankAccount(3, 1000, 0.1, 10000);

account1.addAccountToFavorites(account2);
account1.addAccountToFavorites(account3);

console.log(account1.getFavoriteAccounts());

account1.removeFavoriteAccountById(2);

console.log(account1.getFavoriteAccounts());
