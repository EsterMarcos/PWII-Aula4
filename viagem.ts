class viagem{
   
    constructor( public tpgasto:number, public vlmedia:number, public rdveiculo:number) {} 
   
    distancia(){
        return(this.tpgasto*this.vlmedia)
    }
    consumo(){
        return((this.distancia())/this.rdveiculo)
    }

}
