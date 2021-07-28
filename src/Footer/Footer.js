import React from 'react';
import styles from './Footer.module.css';

export function Footer(props) {
    const sizeClass = props.small ? '' : 'is-medium';
    return (
        <div>
        <footer>
        <div className="content has-text-centered">
            <p>
                <strong>Belb</strong> by <a href="https://github.com/JUMP-goat">Team 1</a>. The source code is open.
                The website content is also open. Austin, Raymond, Nikita, Sabeet
            </p>
        </div>
        </footer>
        </div>
    );
}

export default Footer;