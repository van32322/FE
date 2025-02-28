import React from "react";
import "../styles/Navigation.scss"
import { navigation } from '../utils/contant'
import { NavLink } from "react-router-dom";
const Navigation = () => {
    return (
        <div className="navigation_container">
            {navigation.map(el => (
                <NavLink to={el.path} key={el.id} className={({ isActive }) => isActive ? 'navigation_container_items_active' : 'navigation_container_items'}>
                    {el.value}
                </NavLink>
            ))}
        </div>
    )
}
export default Navigation;