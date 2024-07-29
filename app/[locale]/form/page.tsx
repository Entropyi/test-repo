"use client"
import styles from "./form.module.css";
import {useTranslations} from 'next-intl';
import {useForm, SubmitHandler} from "react-hook-form"
import Image from "next/image";

export default function Page() {
    const formTranslations = useTranslations("FormPage");
    const homeTranslation = useTranslations("HomePage");
    const errorTranslation = useTranslations("formErrorMessages");

    type Inputs = {
        fullName: string,
        email: string,
        age: number,
        phoneNumber: number,
        image: File,
        photoTitle: string,
        comments: string,
        photoLocation: string,
        photoPurpose: string,
        termsAgreement: boolean
    }

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const form = new FormData();
        const imageArray: File[] = data.image as unknown as File[];

        form.append('fullName', data.fullName)
        form.append('email', data.email)
        form.append('age', data.age.toString())
        form.append('phoneNumber', data.phoneNumber.toString())

        form.append('file', imageArray[0]);

        form.append('photoTitle', data.photoTitle)
        form.append('comments', data.comments)
        form.append('photoLocation', data.photoLocation)
        form.append('photoPurpose', data.photoPurpose)

        try {

            const response = await fetch('../api/upload', {
                method: 'POST',
                body: form,
            })

            if (!response.ok) {
                throw new Error(await response.text())
            } else {

            }
        } catch (e) {
            console.log(e)
        }
    }

    let input = styles.formInput;

    if (errors.fullName) {
        input = styles.inputWhileError;
    }


    return (
        <>
            <div className={styles.formSuperContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.formElementsContainer}>
                        <form className={styles.formElements} onSubmit={handleSubmit(onSubmit)} method={"POST"}>

                            <div className={styles.formTitleContainer}>
                                <div className={styles.formTitleText}>{formTranslations("title")}</div>
                            </div>

                            <div className={styles.formSubElements}>
                                <label className={styles.formLabel} htmlFor="">{formTranslations("FullName")} </label>
                                <input className={input} type="text"
                                       id="full-name" {...register("fullName",
                                    {
                                        required: `${errorTranslation("fullNameRequired")}`
                                    })}
                                       aria-invalid={errors.fullName ? "true" : "false"}
                                />
                                {errors.fullName && <p role="alert"
                                                       className={styles.formInlineErrorText}>{errors.fullName.message}</p>}


                                <div className={styles.formGroupOne}>

                                    <div className={styles.emailConatiner}>
                                        <label className={styles.formLabel}
                                               htmlFor="">{formTranslations("Email")} </label>
                                        <input className={input} type="text"
                                               id="email" {...register("email",
                                            {
                                                required: `${errorTranslation("emailRequired")}`,
                                                pattern: {
                                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                    message: `${errorTranslation("emailInvalid")}`,
                                                }
                                            })}/>
                                        {errors.email && <p role="alert"
                                                            className={styles.formInlineErrorText}>{errors.email.message}</p>}
                                    </div>

                                    <div className={styles.ageConatiner}>
                                        <label className={styles.formLabel} htmlFor="">{formTranslations("Age")}</label>
                                        <input className={styles.formInput} type="text" id="age" {...register("age", {
                                            required: `${errorTranslation("ageRequired")}`,
                                            min: {
                                                value: 5,
                                                message: `${errorTranslation("ageLessThanMin")}`,
                                            },

                                            max: {
                                                value: 100,
                                                message: `${errorTranslation("ageLargerThanMax")}`,
                                            }
                                        })}/>
                                        {errors.age && <p role="alert"
                                                          className={styles.formInlineErrorText}>{errors.age.message}</p>}
                                    </div>

                                </div>

                                <div className={styles.formGroups}>
                                    <label className={styles.formLabel}
                                           htmlFor="">{formTranslations("PhoneNumber")}</label>
                                    <input className={styles.formInput} type="text"
                                           id="phone-number" {...register("phoneNumber", {
                                        required: `${errorTranslation("phoneNumberRequired")}`,
                                        minLength: {
                                            value: 9,
                                            message: `${errorTranslation("phoneNumberLessThanMin")}`,
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: `${errorTranslation("phoneNumberLargerThanMax")}`,
                                        }
                                    })}/>
                                    {errors.phoneNumber && <p role="alert"
                                                              className={styles.formInlineErrorText}>{errors.phoneNumber.message}</p>}
                                </div>

                                <div className={styles.formGroups}>
                                    <label className={styles.formLabel} htmlFor="">{formTranslations("Image")}</label>
                                    <label className={styles.formSubLabel} htmlFor="">{formTranslations("ImageRequirements")}</label>

                                    <input className={styles.formUpload} type="file" id="image"
                                           accept={".jpg, .jpeg, .png"}
                                           {...register("image", {
                                               required: `${errorTranslation("imageRequired")}`,
                                               validate: (value) =>{
                                                   const acceptedFormats=["png","jpg","jpeg"];
                                                   // @ts-ignore
                                                   const fileExtension = value[0]?.name.split(".").pop();
                                                   if (!acceptedFormats.includes(fileExtension)) {
                                                       console.log(fileExtension)
                                                       return 'Invalid file format. Only jpg,jpeg,png files are allowed.';
                                                   }
                                                   return true;
                                               }
                                           })}
                                    />
                                    {errors.image && <p role="alert"
                                                        className={styles.formInlineErrorText}>{errors.image.message}</p>}
                                </div>

                                <div className={styles.formGroups}>
                                    <label className={styles.formLabel}
                                           htmlFor="">{formTranslations("PhotoTitle")}</label>
                                    <input className={styles.formInput} type="text"
                                           id="photo-title" {...register("photoTitle")}/>
                                </div>

                                <div className={styles.formGroups}>
                                    <label className={styles.formLabel}
                                           htmlFor="">{formTranslations("Comments")}</label>
                                    <textarea className={styles.formInput} id="comments" {...register("comments")}/>
                                </div>

                                <div className={styles.formGroups}>
                                    <label className={styles.formLabel}
                                           htmlFor="">{formTranslations("PhotoLocation")}</label>
                                    <label className={styles.formSubLabel}
                                           htmlFor="">{formTranslations("PhotoLocationRequirements")}</label>

                                    <input className={styles.formInput} type="text"
                                           id="photo-location" {...register("photoLocation", {
                                        required: `${errorTranslation("imageRequired")}`
                                    })}/>
                                    {errors.photoLocation && <p role="alert"
                                                                className={styles.formInlineErrorText}>{errors.photoLocation.message}</p>}
                                </div>

                                <div className={styles.formGroups}>
                                    <label className={styles.formLabel}
                                           htmlFor="">{formTranslations("Photo Purpose")}</label>
                                    <input className={styles.formInput} type="text" id="photo-purpose"
                                           {...register("photoPurpose")}/>
                                </div>


                                <div className={styles.formTermsAgreement}>
                                    <input type="checkbox" className={styles.formCheckBox}
                                           {...register("termsAgreement", {
                                               required: `${errorTranslation("termsAgreementRequired")}`
                                           })}/>
                                    <label className={styles.formLabel}>{formTranslations("TermsAgreement")} </label>
                                </div>
                                {errors.termsAgreement && <p role="alert"
                                                             className={styles.formInlineErrorText}>{errors.termsAgreement.message}</p>}

                                <div className={styles.buttonContainer}>
                                    <input type="submit" className={styles.formButton}
                                           value={formTranslations("Submit")}/>
                                </div>
                            </div>
                        </form>
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