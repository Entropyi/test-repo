"use client"

import styles from "./header.module.css";
import Image from "next/image";
import {useRouter} from "@/navigation";
import {useEffect, useState} from 'react';
import {useLocale} from 'next-intl';

export default function Header() {
    const router = useRouter();
    const locale = useLocale();
    const [lang, setLang] = useState<string>("en");

    useEffect(() => {
        if (locale === 'ar') {
            setLang("En");
        } else {
            setLang("ع");
        }
    }, [locale]);    const langSwitch = () => {
        if (locale === "ar") {
            router.replace('/', {locale: 'en'});

        } else {
            router.replace('/', {locale: 'ar'});
        }
    }
    return (
        <div className={styles.headerContainer}>
            <div
                className={styles.headerLanguagesSwitchContainer}
                onClick={langSwitch}>
                <p className={styles.englishLangText}>{lang}</p>
                <Image
                    src={"/lang.svg"}
                    alt={"RCYCI Logo"}
                    width={18.3}
                    height={18}
                    className={styles.langSvg}
                />
            </div>


            <div
                className={styles.headerLogoContainer}
            >
                <Image
                    src={"/navbar_logo.png"}
                    alt={"RCYCI Logo"}
                    width={154.3}
                    height={45}
                    className={styles.logo}
                />
            </div>

        </div>
    )
}