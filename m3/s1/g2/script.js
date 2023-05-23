var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        if (balanceInit === void 0) { balanceInit = 0; }
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function (oneDeposit) {
        this.balanceInit = oneDeposit;
        console.log('hai depositato ' + this.balanceInit + "$");
    };
    SonAccount.prototype.oneWithDraw = function (oneWithDraw) {
        this.balanceInit = oneWithDraw;
        console.log('hai prelevato ' + this.balanceInit + "$");
    };
    SonAccount.prototype.showBalance = function () {
        if (this.balanceInit <= 0)
            console.log('sei povero');
        else
            console.log('hai ' + this.balanceInit + "$");
    };
    return SonAccount;
}());
var motherAccount = /** @class */ (function (_super) {
    __extends(motherAccount, _super);
    function motherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    motherAccount.prototype.addInterest = function () {
        this.balanceInit = this.balanceInit * 1.1;
    };
    return motherAccount;
}(SonAccount));
var SonAccount1 = new SonAccount();
SonAccount1.showBalance();
