// app/page/loading.js
import Image from "next/image";
import React from "react";

const loadingStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', flexDirection: 'column'
}

export default function Loading() {
    return (
        <div style={loadingStyle}>
            {/*<h1>Loading...</h1>*/}
            <div>
                Loading
            </div>
            <div>
                <Image
                    src="/spinning_cat.webp"
                    alt="Loading..."
                    width={400}
                    height={400}
                />
            </div>

        </div>
    );
}
