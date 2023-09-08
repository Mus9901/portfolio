import React from "react";
import styles from './Moleculas.module.scss'
import { Divider } from "@mui/material";

function Education() {
    return (
       <div className={styles.tabContainer}>
            <div className="max-h-[500px] overflow-y-auto">
                <div>
                    <div className="flex justify-between py-2 font-display items-center">
                        <p className="text-white">Ulster University (QA Higher education)  <span className="text-sm text-text-color">| London, United Kingdom</span></p>
                        <p className="text-white text-sm italic">Sep 2019 - May 2023</p>
                    </div>
                    <Divider />
                    <div className="py-2">
                        <ul className="text-text-color font-display text-sm list-disc">
                            <li>BSc Hons Computer Science</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between py-2 font-display items-center">
                        <p className="text-white">Academic Lyceum under the name of Navai  <span className="text-sm text-text-color">| Tashkent, Uzbekistan</span></p>
                        <p className="text-white text-sm italic">Sep 2016 - May 2019</p>
                    </div>
                    <Divider />
                    <div className="py-2">
                        <ul className="text-text-color font-display text-sm list-disc">
                            <li>Business Studies</li>
                            <li>English, Mathematics</li>
                            <li>CLAIT</li>
                            <li>Economics</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between py-2 font-display items-center">
                        <p className="text-white">International English Language System (IELTS)  <span className="text-sm text-text-color">| Tashkent, Uzbekistan</span></p>
                        <p className="text-white text-sm italic">2019</p>
                    </div>
                    <Divider />
                    <div className="py-2">
                        <ul className="text-text-color font-display text-sm list-disc">
                            <li>Achieved Overall Score of 6.0 and Speaking score of 6.0</li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
  );
}

export default Education;
