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
var redditoDiCittadinzaAbs = /** @class */ (function () {
    function redditoDiCittadinzaAbs(cod, redditoannuolordo, tasse, tasseirpef) {
        this.codreddd = cod;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseInps = tasse;
        this.tasseIrpef = tasseirpef;
    }
    return redditoDiCittadinzaAbs;
}());
var redditoDiCittadinza = /** @class */ (function (_super) {
    __extends(redditoDiCittadinza, _super);
    function redditoDiCittadinza(cod, redditoannuolordo, tasse, tasseirpef) {
        return _super.call(this, cod, redditoannuolordo, tasse, tasseirpef) || this;
    }
    redditoDiCittadinza.prototype.getUtiletasse = function () {
        if (this.redditoannuolordo < 15000) {
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.23);
        }
        else if (this.redditoannuolordo > 15001 && this.redditoannuolordo < 28000) {
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.25);
        }
        else if (this.redditoannuolordo > 28001 && this.redditoannuolordo < 50000) {
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.35);
        }
        else {
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.43);
        }
        return this.redditoannuolordo;
    };
    redditoDiCittadinza.prototype.getTasseInps = function () {
        this.tasseInps = this.redditoannuolordo * 0.24;
        return this.tasseInps;
    };
    redditoDiCittadinza.prototype.getTasseirpef = function () {
        if (this.redditoannuolordo < 15000) {
            this.redditoannuolordo = this.redditoannuolordo * 0.23;
        }
        else if (this.redditoannuolordo < 28000 && this.redditoannuolordo > 15001) {
            this.redditoannuolordo = this.redditoannuolordo * 0.25;
        }
        else if (this.redditoannuolordo < 35000 && this.redditoannuolordo > 28001) {
            this.redditoannuolordo = this.redditoannuolordo * 0.35;
        }
        else {
            this.redditoannuolordo = this.redditoannuolordo * 0.43;
        }
        return this.redditoannuolordo;
    };
    redditoDiCittadinza.prototype.getRedditoAnnuoNetto = function () {
        this.redditoannuolordo = this.redditoannuolordo - (this.getTasseInps() + this.getTasseirpef());
        return this.redditoannuolordo;
    };
    return redditoDiCittadinza;
}(redditoDiCittadinzaAbs));
var Franchino = new redditoDiCittadinza(2, 30000);
console.log(Franchino.getUtiletasse());
