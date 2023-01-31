import React from "react";
import styles from './Styles.module.scss'
import Image from "next/image";

function ProjectItem({src, link, name}) {
    return <div className={styles.item}>
        <div className={styles.imgBox}>
            <img src={src} />
        </div>
        <div className={styles.infoBox}>
            {name}
        </div>
  </div>;
}

export default ProjectItem;
