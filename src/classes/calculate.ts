
export class CalculateTime{
    constructor(){}
  
  calculate(d:string){
  
    const currentDate= new Date().getTime()
  
    const dayAdded= new Date(d).getTime()
  
    const results=(currentDate-dayAdded)
    return Math.floor((results)/(1000*3600*24))
  
  }
  
  }
  