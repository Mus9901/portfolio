import React from "react";
import styles from './Moleculas.module.scss'
import { Divider } from "@mui/material";

function Education() {
    return (
       <div className={styles.tabContainer}>
            <div className="max-h-[500px] overflow-y-auto">
                <div>
                    <div className="flex justify-between py-2 font-display items-center">
                        <p className="text-white">INHA University  <span className="text-sm text-text-color">| Uzbekistan</span></p>
                        <p className="text-white text-sm italic">Sep 2015 - Oct 2020</p>
                    </div>
                    <Divider />
                    <div className="py-2">
                        <ul className="text-text-color font-display text-sm list-disc">
                            <li>School of Computer and Information Engineering</li>
                            <li>Major: Information and Communication Engineering</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between py-2 font-display items-center">
                        <p className="text-white">Nagaoka University of Technology  <span className="text-sm text-text-color">| Japan</span></p>
                        <p className="text-white text-sm italic">Aug 2019</p>
                    </div>
                    <Divider />
                    <div className="py-2">
                        <ul className="text-text-color font-display text-sm list-disc">
                            <li>Research Program:Machine Learning, Artificial Intelligence 
</li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
  );
}

export default Education;
