import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

    test('debe de retornar un heroe por id', () => {
        const id = 2;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual(heroeData);

    });

    test('debe de retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe(undefined);

    });

    test('Debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const arreglo = getHeroesByOwner(owner);
        const arr = heroes.filter(heroe => heroe.owner === owner);
        
        expect(arreglo).toEqual(arr);
    });

    test('Debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const arr = getHeroesByOwner(owner).length;
        
        expect(arr).toBe(2);
    });

});