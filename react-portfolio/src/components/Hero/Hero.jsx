import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Methembe</h1>
                <p className={styles.description}>
                    I am a full stack developer with a love for creating beautiful and functional web applications. I work with React, CSS, JavaScript, and HTML for the frontend, and Django for the backend. I also have experience with PostgreSQL, SQLite, and MySQL databases.
                </p>
                <a href='mailto: methembedvundla583@gmail.com' className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl('hero/heroImage.png')} alt='Hero image of me' className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
