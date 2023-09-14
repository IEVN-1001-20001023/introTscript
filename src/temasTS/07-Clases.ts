//Constructor es el metodo que inicializa los objetos y es 
//invocado para la construccion del objeto, se le asignan a las propiedades de la clase
class Persona{
    nombre:string;
    edad:number
    constructor(nombre:string,edad:number){ 
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
    console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`)
    }
}
//Mostrar a traves del conostructor
let persona:Persona;
persona=new Persona('juan', 54);

persona.imprimir();

//Establecer las opciones de accesibilidad a las clases, para privado y publico, sino se establecen 
//por defecto es publico

class Dado{
    private valor:number=0;

    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`)
    }
}
let dado1=new Dado();
dado1.tirar();
dado1.imprimir();

//TScript tiene una caracteristica, se pueden definir propiedades a traves del constructor, 
//se crean y se generan las inicializaciones

/************************************** */
class Persona2{
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`)
    }
}
let persona2:Persona2;
persona2=new Persona2('Mario', 23);
persona2.imprimir();