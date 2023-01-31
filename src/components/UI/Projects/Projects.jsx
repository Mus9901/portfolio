
import React, {useState} from "react";
import styles from './Projects.module.scss'
import { projects } from "../mock/project";
import ProjectItem from "./components/ProjectItem";
import { Grid } from "@mui/material";
import Image from "next/image";

function Projects() {
  
  
  return <div className={styles.root}>
     <Grid container spacing={8}>
      {projects.map((el, index) => 
      <Grid item md={3} sm={6}>
        <div className={styles.projectBox}>
        <div className={`${styles.projectImage} ${styles[el.bg]}`}>
          <Image src={el.src}
          layout="fill" alt="prject
          image" objectFit="contain"
          width={270}
          height={164}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.title}>{el.name}</div>
          <a href={el.link} target='_blank'>Show more</a>
        </div>
             </div>
      </Grid>)
     }
     </Grid>
  </div>;
}

export default Projects;
