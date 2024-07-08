import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div
                className={styles.header}
            >
                <Image
                    src={"/navbar_logo.png"}
                    alt={"RCYCI Logo"}
                    width={154.3}
                    height={45}
                />
            </div>
        </>
    )
}