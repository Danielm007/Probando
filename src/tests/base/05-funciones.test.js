import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {
        const usuario = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(usuario).toEqual(user);
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const nombre = 'Daniel';
        const user = {
            uid: 'ABC567',
            username: nombre
        }
        const usuario = getUsuarioActivo(nombre);
        expect(user).toEqual(usuario);
    })
    
    
});