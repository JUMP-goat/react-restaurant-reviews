import React from 'react';
import { SubNavItem } from './SubNavItem/SubNavItem';
// timport styles from './SubNavItem.module.css';

export function SubNav() {
    return (
        <div>
            <div>
                <SubNavItem label="Restaurant" icon="fa-utensils"/>
            </div>
            <div>
                <button className="button">
                    <span className="icon"><i className="fas fa-pen"/></span>
                    <span>Write a Review</span>
                </button>
            </div>
        </div>
    );
}

export default SubNav;