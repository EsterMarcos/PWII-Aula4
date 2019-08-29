export class viagem{
   
    constructor( public tpgasto:number
                ,public vlmedia:number
                , public rdveiculo:number) {} 
    

    distancia():number{
        return this.tpgasto * this.vlmedia 
    }
    consumo():number{
        return this.distancia() / this.rdveiculo
    }

}
