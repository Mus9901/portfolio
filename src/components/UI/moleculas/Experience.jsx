import { Divider, Typography } from "@mui/material";
import React from "react";
import styles from './Moleculas.module.scss'

export default function Experience() {
    return (
        <div className={styles.tabContainer}>
            <div className="flex flex-col space-y-4">
                <div>
                    <div className="flex justify-between py-2 font-display items-center">
                        <p className="text-white">Internship at Ulster University | QA Higher Education London   </p>
                        <p className="text-white text-sm italic">Sep 2021 - May</p>
                    </div>
                    <Divider />
                    <div className="py-2">
                        <ul className="text-text-color font-display text-sm list-disc">
                            <li>Successfully trained by Software Engineers who have an exceptional experience</li>
                            <li>Memorised knowledge about designing and developing websites in detail</li>
                            <li>Worked independently without direct supervision in a fast-paced environment</li>
                            <li>Took responsibility for maintaining, expanding, and scaling different site projects</li>
                            <li>Achieved basic knowledge about HTML, PHP, CSS, and JavaScript coding</li>
                            <li>Maintained high attendance standards, showed up with a positive attitude, and ready to work</li>
                            <li>Participated in the entire application life cycle, with a focus on coding and debugging</li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
  )
}
