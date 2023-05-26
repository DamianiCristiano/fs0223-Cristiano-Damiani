var registroChiamate = /** @class */ (function () {
    function registroChiamate(id, durata, dataOra) {
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
    }
    return registroChiamate;
}());
var SmartPhone = /** @class */ (function () {
    function SmartPhone(carica, numeroChiamate, costoMinuto) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = [];
    }
    SmartPhone.prototype.ricarica = function ($) { this.carica = $ + this.carica; };
    SmartPhone.prototype.numero404 = function () { return "il tuo credito e' ".concat(this.carica); };
    SmartPhone.prototype.getNumeroChiamate = function () { return this.numeroChiamate; };
    SmartPhone.prototype.chiamata = function (min) {
        var _this = this;
        this.carica = this.carica - min * this.costoMinuto, this.registroChiamate.push(new registroChiamate(1, min, new Date()));
        this.registroChiamate.forEach(function (i) {
            _this.registroChiamate[i.id] = _this.registroChiamate[i.id++];
        });
    };
    SmartPhone.prototype.azzeraChiamate = function () { this.chiamata(0); };
    SmartPhone.prototype.mostraRegistroChiamate = function () { };
    SmartPhone.prototype.filtraChiamatePerDataOra = function () { };
    return SmartPhone;
}());
var MioTelefono1 = new SmartPhone(5, 0, 0.20);
var MioTelefono2 = new SmartPhone(5, 0, 0.30);
var MioTelefono3 = new SmartPhone(5, 0, 0.40);
console.log(MioTelefono1.ricarica(5));
console.log(MioTelefono1.numero404());
console.log(MioTelefono1.chiamata(6));
console.log(MioTelefono1.numero404());
console.log(MioTelefono1.mostraRegistroChiamate());
console.log(MioTelefono2.ricarica(7));
console.log(MioTelefono2.numero404());
console.log(MioTelefono2.chiamata(8));
console.log(MioTelefono2.numero404());
console.log(MioTelefono2.mostraRegistroChiamate());
console.log(MioTelefono3.ricarica(9));
console.log(MioTelefono3.numero404());
console.log(MioTelefono3.chiamata(10));
console.log(MioTelefono3.numero404());
console.log(MioTelefono3.mostraRegistroChiamate());
