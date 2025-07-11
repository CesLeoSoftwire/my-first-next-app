// app/page/loading.js
import Image from "next/image";
import React from "react";
import styles from "./mars.module.css";

const loadingStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '250px'
}

export default function Loading() {
    return (
        <div style={loadingStyle}>
            {/*<h1>Loading...</h1>*/}
            <div className={styles.titleStyle}>
                Loading...
            </div>
            <div>
                <Image
                    src="/spinning_cat.webp"
                    alt="Loading..."
                    width={500}
                    height={500}
                />
            </div>

        </div>
    );
}
