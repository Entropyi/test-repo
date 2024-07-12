"use client"

import styles from "./header.module.css";
import Image from "next/image";
import {useRouter} from "next/router";

export default function Header() {
    const langSwitch = () =>{
        const newLang = "ar" ? "en" : "ar";
        console.log(newLang)
    }

    return (
        <div className={styles.headerContainer}>

            <div
                className={styles.headerLanguagesSwitchContainer}
            >
                <Image
                    src={"/lang.svg"}
                    alt={"RCYCI Logo"}
                    width={18.3}
                    height={18}
                    className={styles.langSvg}
                    onClick={langSwitch}

                />
                <p className={styles.englishLangText}>En</p>
            </div>

            <div
                className={styles.headerLogoContainer}
            >
                <Image
                    src={"/navbar_logo.png"}
                    alt={"RCYCI Logo"}
                    width={154.3}
                    height={45}
                />
            </div>

        </div>
    )
}