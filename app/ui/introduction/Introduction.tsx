import styles from "@/app/ui/introduction/introduction.module.css";
import Image from "next/image";


export default function Introduction() {
    return (
        <div className={styles.introductionRoot}>
            <div className={styles.introductionRootContainer}>
                <div className={styles.detailsTitleContainer}>
                    <p className={styles.detailsTitleText}>تفاصيل المسابقة</p>
                    <div className={styles.detailsSvgContainer}>
                        <Image
                            src={"/align-right-svgrepo-com.svg"}
                            alt={"details"}
                            width={20}
                            height={20}
                            className={styles.detailsTitleSvg}
                            draggable={false}

                        />
                    </div>
                </div>
                <div className={styles.introTitleContainer}>
                    <p className={styles.detailsTitleText}>مقدمة</p>
                    <div className={styles.detailsSvgContainer}>
                        <Image
                            src={"/shield-exclamation-svgrepo-com.svg"}
                            alt={"details"}
                            width={20}
                            height={20}
                            className={styles.detailsTitleSvg}
                            draggable={false}

                        />
                    </div>
                </div>
                <p className={styles.introductionText}>
                    تهدف المسابقة إلى رفع درجة الوعي لدى جميع شرائح المجتمع تجاه البيئة التي نعيش فيها بغرض المحافظة
                    عليها والاهتمام بها وتنشئة جيل قادم يؤمن بهاذا المفهوم ويكون جزء من تصرفاته اليومية. </p>
                <div className={styles.introTitleContainer}>
                    <p className={styles.detailsTitleText}>محاور المسابقة</p>
                    <div className={styles.detailsSvgContainer}>
                        <Image
                            src={"/white-board-svgrepo-com.svg"}
                            alt={"details"}
                            width={20}
                            height={20}
                            className={styles.detailsTitleSvg}
                            draggable={false}
                        />
                    </div>
                </div>
                <p className={styles.introductionText}>
                    المحور الأساسي هو الطبيعة والبيئة والمناظر وعلى المتسابقين تقديم أفضل الصور والمناظر الطبيعية بصفتها
                    الأصلية والحقيقة.
                    وتهدف المسابقة إلى وضع علامة ايجابية للبيئة والطبيعة في كوكبنا بحيث نجعل كوكب الأرض فريد من نوعه
                    وتشمل الصور:
                </p>
                <br/>
                <p className={styles.introductionText}>
                    - صور المناظر الطبيعية المذهلة في الأضواء المختلفة. </p>
                <p className={styles.introductionText}>
                    - حالات الطقس المتغيرة</p>
                <p className={styles.introductionText}>
                    - عالم مياه البحار والبحيرات المتكونة من الأمطار.
                </p>
                <p className={styles.introductionText}>
                    - التنوع الحيوي من الكائنات الحية والنباتات
                </p>

                <div className={styles.spacing}>
                    <div className={styles.introTitleContainer}>
                        <p className={styles.detailsTitleText}>الضوابط والشروط</p>
                        <div className={styles.detailsSvgContainer}>
                            <Image
                                src={"/contract-coverage-svgrepo-com.svg"}
                                alt={"details"}
                                width={20}
                                height={20}
                                className={styles.detailsTitleSvg}
                                draggable={false}
                            />
                        </div>
                    </div>
                    <p className={styles.introductionText}>
                        1- آخر موعد لتلقي المشاركات سيكون يوم 1 محرم 1446هـ الموافق 29 يوليو 2024م.
                    </p>
                    <p className={styles.introductionText}>
                        2- تقدم جميع المشاركات في صيغة ملفات الكترونية رقمية (JPEG).
                    </p>
                    <p className={styles.introductionText}>
                        3- يسمح المشاركة بعدد 4 صور كحد أعلى لكل مشترك بحيث لا تزيد حجم الصورة عن GB 1 .
                    </p>
                    <p className={styles.introductionText}>
                        4- لا يمكن إدخال أي مؤثرات على الصور المشاركة ويسمح بإجراء تعديلات على الألوان.
                    </p>
                    <p className={styles.introductionText}>
                        5- يجب أن تكون الصور من بيئة مدينة ينبع وأن لم يسبق المشاركة بها في مسابقات.
                    </p>
                    <p className={styles.introductionText}>
                        6- المشاركة تعني أقرار بملكيته للصورة أو الصور المشترك بها ويقر بالسماح للجنة المسابقة.
                    </p>
                    <p className={styles.introductionText}>
                        7- يحق للمشارك وضع عنوان للصورة وذكر الهدف أو تعليق مختصر لها.
                    </p>
                    <p className={styles.introductionText}>
                        8- يجب كتابة أسم المشارك بالإضافة رقم الهاتف والبريد الالكتروني.
                    </p>
                    <p className={styles.introductionText}>
                        9- لجنة الجائزة الحق في إعادة طباعة ونسخ الصور مجاناً لأي إغراض إعلامية في الصحف أو المجلات أو
                        المعرض أو التقاويم السنوية وكذلك لجميع أنواع النشر للشركاء، وتعتبر المشاركة في المسابقة قبول
                        بذلك
                    </p>
                    <p className={styles.introductionText}>
                        10- سيتم إشعار الفائزين بالمسابقة عبر أرقام الهواتف و البريد الالكتروني </p>
                </div>

                <div className={styles.introTitleContainer}>
                    <p className={styles.detailsTitleText}>طريقة المشاركة</p>
                    <div className={styles.detailsSvgContainer}>
                        <Image
                            src={"/click-svgrepo-com.svg"}
                            alt={"details"}
                            width={20}
                            height={20}
                            className={styles.detailsTitleSvg}
                            draggable={false}
                        />
                    </div>
                </div>
                <p className={styles.introductionText}>
                    للمشاركة يرجى الضغط <a href={"https://forms.gle/Z4tjt7tWedmVy72o8"}>هنا</a>
                </p>

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
                        <p>جميع الحقوق محفوظة للهيئة الملكية للجبيل وينبع 2024</p>
                    </div>
                </div>

            </div>
        </div>
    )
}