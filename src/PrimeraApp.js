import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const object = {
    name: 'phils',
    age: 25
}

// Se debe desestructurar para obtener los properties del componente padre
const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <Fragment>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
            <pre>{JSON.stringify(object, null, 3)}</pre>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Este es mi subtítulo'
}
export default PrimeraApp;