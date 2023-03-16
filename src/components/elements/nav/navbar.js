/**
 * @author @Jslquintero
 * @name Bar tipo function
 * @date 04 Enero del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editorJose @Jslquintero
 * @dateUpdate 06 Enero del 2023
 * @descripcionUpdate Refactor del componente Item para su reutilizacion en el componente Navbar
 * @version 1.0.1
 * @params {links y distribucion}
 */

import React, {useState} from 'react';
import Item from './item';
import Bar from './bar';
import './_style.scss';
// import image from '../../../assets/images/';

export default function Navbar(props) {
    const [header, setHeader] = useState('links');
    return (

        <Bar>
            <div className="navbar-logo">

                <Item items={
                    [{
                            route: "/",
                            styleClass: 'logo-bar',
                            ref: '',
                            key: 'logo',
                            children: <span className='logo'>
                                <img width={42}
                                    height={46}
                                    alt="logo"
                                    className="logo-bar"/>
                            </span>
                        }]
                }/>

            </div>
            <div className="hb-bar"
                onClick={
                    () => (header !== 'links') ? setHeader('links') : setHeader('links-show')
            }>
                <svg viewBox="0 0 100 80" width="40" height="40" className="hamburger-bar">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>
            <div className={header}>
                <Item items={
                    [
                        {
                            route: "/",
                            styleClass: 'links-text',
                            ref: 'Link 1'
                        }, {
                            route: "/",
                            styleClass: 'links-text',
                            ref: 'Link 2'
                        }, {
                            route: "/",
                            styleClass: 'links-text',
                            ref: 'Link 3'
                        }, {
                            route: "/",
                            styleClass: 'links-text',
                            ref: 'Link 4'
                        }

                    ]
                }/>
            </div>
        </Bar>

    );
}
