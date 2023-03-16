/**
 * @author @Jslquintero
 * @name Bar tipo function
 * @date 04 Enero del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editorJose @Jslquintero
 * @dateUpdate 06 Enero del 2023
 * @descripcionUpdate 
 * @version 1.0.1
 * @params {links, id, styleClass, children, ref}
 */
import React from "react";
import {Link} from "react-router-dom";

export default function Item(props) {
    const itemsLinks = props.items.map((item, index) => <Link key={
            item.id || index
        }
        to={
            item.route
        }
        className={
            item.styleClass
    }>
        {
        item.children
    }
        {
        item.ref
    } </Link>);
    return (
        <li className='nav-item'>
            {itemsLinks} </li>
    );
}
