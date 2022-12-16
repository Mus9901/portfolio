import { Divider, Typography } from "@mui/material";
import React from "react";
import styles from './Moleculas.module.scss'

export default function Experience() {
    return (
        <div className={styles.tabContainer}>
            <div className="flex flex-col space-y-4">
                <div>
                    <div className="flex justify-between py-2 font-display items-center">
                        <p className="text-white">Udevs | Frontend Developer</p>
                        <p className="text-white text-sm italic">Nov 2021 - Current</p>
                    </div>
                    <Divider />
                    <div className="py-2">
                        <ul className="text-text-color font-display text-sm list-disc">
                            <li>Redesigns and adds new features to the existing sites</li>
                            <li>Joins and successfully operates parallel programming for code optimization</li>
                            <li>Actively participates in hackathons organized by the company and improves problem-solving as well as critical thinking skills</li>
                            <li>Constantly follows code review, clean coding, and unit testing principles and acquires design documentation habits</li>
                            <li>Adds multi-language (Localization) support, debug panel, and dark-mode support to the site</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between py-2 font-display items-center">
                        <p className="text-white">Jafton | PM Assistant</p>
                        <p className="text-white text-sm italic">Jan 2021 - October 2021</p>
                    </div>
                    <Divider />
                    <div className="py-2">
                        <ul className="text-text-color font-display text-sm list-disc">
                            <li>Held sprint meetings and assigned tasks for members. Specify priority, blockers of tasks</li>
                            <li>Planning an algorithm for the project, writing down all task details to each member</li>
                            <li>Organizing meetings, and interviews with candidates, and entrepreneurs.</li>
                            <li>Building a help center help.missed.com</li>
                            <li>Follow the Agile/Scrum development process</li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
  )
}
