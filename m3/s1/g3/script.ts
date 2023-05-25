abstract class redditoDiCittadinzaAbs {
    codreddd:number
    redditoannuolordo:number
    tasseInps?:number
    tasseIrpef?:number

    constructor(cod:number, redditoannuolordo:number, tasse?:number, tasseirpef?:number) {
        this.codreddd = cod;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseInps = tasse;
        this.tasseIrpef = tasseirpef
    }
    abstract getUtiletasse():number
    abstract getTasseirpef():number
    abstract getTasseInps():number
    abstract getRedditoAnnuoNetto():number
}

class redditoDiCittadinza extends redditoDiCittadinzaAbs {
    constructor(cod:number, redditoannuolordo:number, tasse?:number, tasseirpef?:number) {
        super(cod, redditoannuolordo, tasse, tasseirpef);
    }
    getUtiletasse():number{
        if (this.redditoannuolordo < 15000){
        this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.23)
        }
        else if(this.redditoannuolordo > 15001 && this.redditoannuolordo < 28000){
        this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.25)
        }
        else if(this.redditoannuolordo > 28001 && this.redditoannuolordo < 50000){
        this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.35)
        }
        else{
        this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.43)
        }
        return this.redditoannuolordo
    }
    
    getTasseInps():number{
        this.tasseInps = this.redditoannuolordo * 0.24
        return this.tasseInps
    }

    getTasseirpef():number {
        if (this.redditoannuolordo < 15000){
            this.redditoannuolordo = this.redditoannuolordo * 0.23
            }
        else if(this.redditoannuolordo < 28000 && this.redditoannuolordo > 15001){
            this.redditoannuolordo = this.redditoannuolordo * 0.25
            }
        else if(this.redditoannuolordo < 35000 && this.redditoannuolordo > 28001){
            this.redditoannuolordo = this.redditoannuolordo * 0.35
            }
        else{
            this.redditoannuolordo = this.redditoannuolordo * 0.43
        }
        return this.redditoannuolordo
    }
    getRedditoAnnuoNetto(): number {
        this.redditoannuolordo = this.redditoannuolordo - (this.getTasseInps() + this.getTasseirpef())
        return this.redditoannuolordo
    }
}

let Franchino = new redditoDiCittadinza(2 , 30000)

console.log(Franchino.getRedditoAnnuoNetto())