interface ISmarthPhone {
    carica:number
    numeroChiamate:number
    costoMinuto:number

    ricarica($:number):void
    numero404():string
    getNumeroChiamate():number
    chiamata(min:number):void
    azzeraChiamate():void

}

class registroChiamate{
    id:number
    durata:number
    dataOra:Date

constructor(id:number, durata:number, dataOra:Date){
    this.id = id
    this.durata = durata
    this.dataOra = dataOra
}}
    


class SmartPhone implements ISmarthPhone{
    
    carica:number
    numeroChiamate:number
    costoMinuto:number
    registroChiamate:registroChiamate[]
    
    ricarica($:number):void{this.carica = $ + this.carica}
    numero404():string{return `il tuo credito e' ${this.carica}`}
    getNumeroChiamate():number{return this.numeroChiamate}
    chiamata(min:number):void{this.carica = this.carica - min * this.costoMinuto, this.registroChiamate.push(new registroChiamate(1,min,new Date()))
    this.registroChiamate.forEach(i => {
        this.registroChiamate[i.id] = this.registroChiamate[i.id++]
    });
    }
    azzeraChiamate():void{this.chiamata(0)}
    mostraRegistroChiamate():any{}
    filtraChiamatePerDataOra():void{}

    constructor(carica:number, numeroChiamate:number, costoMinuto:number){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = [];
}}

let MioTelefono1 = new SmartPhone(5, 0, 0.20);
let MioTelefono2 = new SmartPhone(5, 0, 0.30);
let MioTelefono3 = new SmartPhone(5, 0, 0.40);


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
