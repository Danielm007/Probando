import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    // con jest
    // test('debe de mostrar el mensaje "Hola soy Daniel"', () => {
    //     const saludo = 'Hola soy Daniel';

    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });
    
    //con enzyme
    test('debe mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola soy Daniel';
        const wrapper = shallow(< PrimeraApp saludo={saludo} />);

        expect( wrapper ).toMatchSnapshot();


    });

    test('debe mostra el subtitulo enviado por props', () => {
        const saludo = 'Hola soy Daniel';
        const subtitulo = 'Hola soy un subtitulo';
        const wrapper = shallow(<PrimeraApp 
            saludo={saludo}
            subtitulo={subtitulo}
        />);

        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subtitulo);

    })
    
    
});
