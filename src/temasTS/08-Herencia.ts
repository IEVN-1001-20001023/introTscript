
class Persona3{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

class Empleado extends Persona3{
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number){
        super(nombre,edad); //Super manda los datos a su padre para inicializarlos en su propia clase
        this.sueldo=sueldo
    }
    imprimir(){
        console.log(`Sueldo ${this.sueldo}`);
    }
    pagarImpuestos(){
        if(this.sueldo>5000)
        console.log(`${this.nombre} debe pagar impuestos`);
    else
    console.log(`${this.nombre} no debe pagar impuestos`);
    }
}
const persona3= new Persona3('Juan', 44);
persona3.imprimir();

const empleado1=new Empleado('Ana', 22, 7000);
empleado1.imprimir();
empleado1.pagarImpuestos();