"use strict";
class SonAccount {
    constructor(balanceInit = 0) {
        this.balanceInit = balanceInit;
    }
    oneDeposit(oneDeposit) {
        this.balanceInit = oneDeposit;
        console.log('hai depositato ' + this.balanceInit + "$");
    }
    oneWithDraw(oneWithDraw) {
        this.balanceInit = oneWithDraw;
        console.log('hai prelevato ' + this.balanceInit + "$");
    }
    showBalance() {
        if (this.balanceInit <= 0)
            console.log('sei povero');
        else
            console.log('hai ' + this.balanceInit + "$");
    }
}
class motherAccount extends SonAccount {
    addInterest() {
        this.balanceInit = this.balanceInit * 1.1;
    }
}
let SonAccount1 = new SonAccount(10);
SonAccount1.showBalance;
