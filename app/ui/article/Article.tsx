import styles from "@/app/ui/article/article.module.css";
import Image from "next/image";

export default function Article() {
    return (
        <>
            <div
                className={styles.headerArticleSuperConatiner}>
                <div className={styles.headerArticle}>
                    <div className={styles.headerArticleContainer}>
                        <div className={styles.articleTitleConatiner}>
                            <h3 className={styles.title}>مسابقة التصوير البيئي لعام 2024</h3>
                        </div>

                        <div className={styles.card}>
                            <h4 className={styles.day}>11</h4>
                            <h4 className={styles.month}>محرم</h4>
                        </div>

                    </div>

                    <Image
                        src={"/20220109-025.jpg"}
                        alt={"location"}
                        width={500}
                        height={275}
                        className={styles.headerArticleImage}
                    />

                    <div className={styles.dateContainer}>

                        <div className={styles.dateTextContainer}>
                            <div className={styles.dateFrom}>
                                <p dir="rtl" lang="ar"> 11 محرم 1446 </p>
                                <p dir="rtl" lang="ar" className={styles.from}>من</p>
                            </div>
                            <div className={styles.dateTo}>
                                <p dir="rtl" lang="ar"> 11 محرم 1446 </p>
                                <p dir="rtl" lang="ar" className={styles.to}>الى</p>

                            </div>
                        </div>

                        <div className={styles.dateSvgContainer}>
                            <Image
                                src={"/calendar-days-svgrepo-com.svg"}
                                alt={"date"}
                                width={50}
                                height={50}
                                className={styles.dateSvg}
                            />
                        </div>
                    </div>

                    <div className={styles.location}>
                        <div className={styles.cityInfoContainer}>
                            <div>
                                <p className={styles.cityTitleText}>في المدن التالية</p>
                            </div>
                            <div className={styles.citySvgConatiner}>
                                <Image
                                    src={"/city-svgrepo-com.svg"}
                                    alt={"location"}
                                    width={20}
                                    height={20}
                                    className={styles.citySvg}
                                />
                            </div>
                        </div>
                        <div>
                            <p className={styles.cityNameText}>ينبُع</p>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}