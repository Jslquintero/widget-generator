/**
 * @author Jose Salvador lopez
 * @name Bar tipo function
 * @date 04 Enero del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editorJose Salvador lopez
 * @dateUpdate 
 * @descripcionUpdate 
 * @version 1.0.0
 * @params {links y distribucion}
 */

import React from 'react';

export default function Bar(props) {
    return (
        <nav className="navbar sticky" id="navbar">
            <ul className='items'>
                {
                props.children
            }</ul>
        </nav>
    );
}