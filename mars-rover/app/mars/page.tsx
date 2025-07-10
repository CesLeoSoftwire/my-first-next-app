import marsJson from "../api/nasaData3Mix.json";
import Image from "next/image";

export default async function Page() {
    // console.log(marsJson);
    const posts = marsJson;
    console.log(posts);
    return (
        <div>
            {posts.photos.map((post: any) => (
                <div key={post.id}>
                    {post.camera.full_name}
                    <Image
                        src={post.img_src}
                        alt=""
                        width={500}
                        height={500}
                    />
                </div>
            ))}
        </div>
    )
}