import React, { useState, useEffect } from "react";
import { apiGetCategories } from "../apis/app";
import { NavLink } from "react-router-dom";
import {createSlug} from '../utils/helpers';
import "../styles/Sidebar.scss"
import {useSelector} from 'react-redux'
const Sidebar = () => {
    const {categories}=useSelector(state =>state.app)
    return (
        <div className="sidebar_container">
            {categories.length > 0 ? categories.map(el => (
                <NavLink
                    key={createSlug(el.title)}
                    to={createSlug(el.title)}
                    className={({ isActive }) =>
                        isActive ? 'sidebar_container_items_active' : 'sidebar_container_items'
                    }
                >
                    {el.title}
                </NavLink>
            )) : <p>No categories available</p>}
        </div>
    )
}
export default Sidebar;