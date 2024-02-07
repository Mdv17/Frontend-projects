import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage}/>
            </div>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h2>Frontend Developer</h2>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                    </div>
                </li >
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h2>Backend Developer</h2>
                        <p>I have experience in developing fast and optimized back-end systems and APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h2>UI Designer</h2>
                        <p>I have designed multiple landing pages and have created designed systems as well </p>
                    </div>
                </li>
            </ul>
        </section>
    );
};