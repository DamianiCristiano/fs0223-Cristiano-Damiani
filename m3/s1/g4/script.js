var abbigliamentoNew = [];
fetch("Abbigliamento.json")
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (element) {
        abbigliamentoNew.push(new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivainclusa, element.prezzoivaesclusa, element.disponibile, element.saldo));
    });
    console.log(abbigliamentoNew[0].mostraPrezzo());
    console.log(abbigliamentoNew[1].mostraPrezzo());
    console.log(abbigliamentoNew[2].mostraPrezzo());
    console.log(abbigliamentoNew[3].mostraPrezzo());
    console.log(abbigliamentoNew[4].mostraPrezzo());
})
    .catch(function (err) { return console.log(err); });
console.log(abbigliamentoNew);
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivainclusa, prezzoivaesclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivainclusa = prezzoivainclusa;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.mostraPrezzo = function () { return this.prezzoivainclusa + '$'; };
    return Abbigliamento;
}());
