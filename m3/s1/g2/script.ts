class SonAccount{
    balanceInit: number
    constructor(balanceInit: number = 0){
        this.balanceInit = balanceInit
    }
    oneDeposit(oneDeposit:number):void{
        this.balanceInit = oneDeposit
        console.log('hai depositato ' + this.balanceInit + "$")
    }
    oneWithDraw(oneWithDraw:number):void{
        this.balanceInit = oneWithDraw
        console.log('hai prelevato ' + this.balanceInit + "$")
    }
    showBalance():void{
        if(this.balanceInit <= 0)
        console.log('sei povero')
        else
        console.log('hai ' + this.balanceInit + "$")
    }

}




class motherAccount extends SonAccount {
    addInterest(){
        this.balanceInit = this.balanceInit * 1.1
    }
}



let SonAccount1 = new SonAccount()
SonAccount1.showBalance()
