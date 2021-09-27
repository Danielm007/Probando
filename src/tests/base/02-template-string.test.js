import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('prueba en el método getSaludo', () => {
        const nombre = 'Daniel';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);

    });

    test('getSaludo debe retornar Hola Carlos', ()=>{
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    });
    
});