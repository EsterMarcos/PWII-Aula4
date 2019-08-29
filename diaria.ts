export class diaria{
   
    constructor( public qtdhoras:number
                ,public vlrhora:number
                , public hradicional:number) {} 
                distancia():number{
                    return this.vlrhora + this.hradicional * (this.qtdhoras - 1)}
                  }