import marsJson1 from "../api/nasaData1Soil.json";
import marsJson2 from "../api/nasaData2Stars.json";
import marsJson3 from "../api/nasaData3Mix.json";
import nasaPhoto from "../api/marsPhoto.json";
import styles from "./mars.module.css";

const jsonFiles = [
    {
        id:1,
        filename: marsJson1,
        title: "Soil pictures"
    },
    {
        id:2,
        filename: marsJson2,
        title: "Stars pictures"
    },
    {
        id:3,
        filename: marsJson3,
        title: "Mixed pictures"
    }];

export default async function Page() {
    // console.log(marsJson);
    // const posts = marsJson;
    // console.log(posts);
    return (
        <div className={styles.bg}>
            <div>
                <div className={styles.titleStyle}>
                    <p>- Photo of the day -</p>
                    {nasaPhoto.title}
                </div>
                <a href={nasaPhoto.hdurl} className={styles.container}>
                    <img className={styles.mainImageStyle} src={nasaPhoto.hdurl} alt={nasaPhoto.explanation}/>
                </a>
            </div>

            <div>
                {jsonFiles.map(file => (
                    <div key={file.id} className={styles.bigContainer}>
                        <div className={styles.subTitleStyle}>
                            <p>{file.title}</p>
                        </div>
                        <div className={styles.container}>

                            {file.filename.photos.map((post: any) => (
                                <a key={post.id} href={post.img_src}>
                                    <p className={styles.pictureTitle}>{post.camera.full_name}</p>
                                    <img
                                        src={post.img_src}
                                        alt=""
                                        width={500}
                                        height={500}
                                        className={styles.imageStyle}
                                    />
                                    <p></p>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}