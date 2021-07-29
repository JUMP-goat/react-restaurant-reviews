import React from 'react';
import styles from './Footer.module.css';

export function Footer(props) {
    const sizeClass = props.small ? '' : 'is-medium';
    return (
        <div>
        <footer>
        <div className="content has-text-centered">
            <p>
                <strong>Belb</strong> by <a href="https://github.com/JUMP-goat">Team 1</a>
                <strong>: Austin, Raymond, Nikita, Sabeet</strong>
            </p>
            <p>
                <strong> Backend Repo: </strong><a href="https://github.com/JUMP-goat/JUMP-Final-Project">Backend Repository</a> ||
                <strong> Frontend Repo: </strong><a href="https://github.com/JUMP-goat/react-restaurant-reviews">Frontend Repository</a> ||
                <strong> Technologies: </strong>Java, JavaScript, SQL, Spring, React, AWS, Bluma
            </p>
        </div>
        </footer>
        </div>
    );
}

export default Footer;