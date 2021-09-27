// rafcp => shortcut
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    //useState
    const [ counter, setCounter ] = useState(value);
    

    // handleAdd
    const handleAdd = (e) => {
        setCounter(counter + 1);
    }

    //handleSubstract
    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    //handleReset
    const handleReset = () => {
        setCounter(value);
    }

    return ( 
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};
 
export default CounterApp;

