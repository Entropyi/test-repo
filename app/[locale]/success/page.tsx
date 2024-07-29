import styles from "./success.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function Footer() {
    const homeTranslation = useTranslations("HomePage");

    return (
        <>
            <div className={styles.successContainer}>
                <div className={styles.successSubContainer}>
                    <div className={styles.successImageContainer}>
                        <Image
                            src={"/success.svg"}
                            alt={"Success Logo"}
                            width={120}
                            height={120}
                            className={styles.langSvg}
                        />
                    </div>
                    <div className={styles.successTextContainer}>
                        <h3 className={styles.formTitleText}>Thank you for participating</h3>
                        <p className={styles.formSuccessLabel}>you will be contacted soon</p>
                    </div>
                </div>
            </div>


            <div className={styles.footer}>
                <div className={styles.innerfooter}>
                    <Image
                        src={"/footer_RCJY_logo.png"}
                        alt={"footer_RCJY_logo"}
                        width={160.14}
                        height={89.7}
                    ></Image>
                    <Image
                        src={"/footer_vision_logo.png"}
                        alt={"footer_vision_logo"}
                        width={65}
                        height={43.33}
                    ></Image>
                </div>
                <div className={styles.outerfooter}>
                    <p>{homeTranslation('rights')}</p>
                </div>
            </div>
        </>
    )
}
