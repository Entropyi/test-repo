import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
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