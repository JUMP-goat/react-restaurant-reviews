import React from 'react';
import { SubNavItem } from './SubNavItem/SubNavItem';
import styles from './SubNav.module.css';

export function SubNav() {
    return (
        <div className={styles.container}>
            <div className={styles['sub-nav']}>
                <div>
                    <SubNavItem label="Restaurant" icon="fa-utensils"/>
                </div>
                <div>
                    <button className={`button ${styles['subnav-button']} ${styles['omit-right-border']}`}>
                        <span className="icon"><i className="fas fa-pen"/></span>
                        <span>Write a Review</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubNav;