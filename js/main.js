//Sistema de ventas

//Modulo de registro

class Persona {
    constructor(id, nombre, apellido, dni){
        this.id = id;
        this.nombre = nombre; 
        this.apellido = apellido;
        this.dni = dni;
    }
}

class Empleados extends Persona{
    constructor (id, nombre, apellido, dni, salario, puesto){
        super(id, nombre, apellido, dni);
        this.salario =  parseFloat(salario);
        this.puesto = puesto;
    }
}

class Clientes extends Persona {
    constructor (id, nombre, apellido, dni){
        super(id, nombre, apellido, dni);
    }
}

class Proveedores extends Persona {
    constructor(id, nombre, apellido, dni, rubro){
        super(id, nombre, apellido, dni);
        this.rubro = rubro;
    }
}

//Defino el arreglo para los empleados
let empleados = [];
let clientes = [];
let proveedores = [];

const cajero = new Empleados (1, 'Nicolas', 'Carrizo', 36540156, 75000, 'Cajero');
const repositor = new Empleados (11, 'Carlos', 'Cisterna', 41546865, 80000, 'Repositor')
const clienteJose = new Clientes (2, 'Jose', 'Carrizo', 35456129);
const proveedorElectronica = new Proveedores (3, 'Gustavo', 'Cardales', 1254554, 'Electronica');

const agregarEmpleado = (valor) => {
    empleados.push(valor)
}

const agregarClientes = (valor) => {
    clientes.push(valor);
}

const agregarProveedor = (valor) => {
    proveedores.push(valor);
}

agregarEmpleado(cajero);
agregarEmpleado(repositor);
agregarClientes(clienteJose);
agregarProveedor(proveedorElectronica);

const mostrarEmpleados = () => {
    let listadoEmpleados = empleados.map(x => [x])
    console.log('Listado de empleados: ', listadoEmpleados);
}

const mostrarProveedor = () => {
    let listadoProveedor = proveedores.map(x => [x])
    console.log('Listado de proveedores: ', listadoProveedor);
}

const mostrarClientes = () => {
    let listadoClientes = clientes.map(x => [x])
    console.log(listadoClientes);
}

//Empleados con el sueldo mas alto
const mostrarSueldoMasAlto = () => {
    let sueldoMasAlto = empleados.map(x => x.salario)
    sueldoMasAlto.sort((a,b) => {
        if(a < b){
            return +1
        }
        if(a > b){
            return -1
        }
        if(a = b){
            return 0
        }
    });
    console.log(sueldoMasAlto)
}

let resp;

    resp = parseInt(prompt(`Bienvenidos al sistema
    Seleccione una opcion:
        1 - Ver clientes
        2 - Ver proveedores
        3 - Ver empleados
        4 - Ver salario mas alto
        0 - Salir
`))
    switch(resp){
        case 1:
            mostrarEmpleados();
        break;
        case 2:
            mostrarProveedor();
        break;
        case 3:
            mostrarEmpleados();
        break;
        case 4:
            mostrarSueldoMasAlto();
        break;
        default:
            console.log(
                'Saliendo del sistema...'
            )
        break;
    }

    