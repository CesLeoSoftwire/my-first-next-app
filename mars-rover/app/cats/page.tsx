import Image from "next/image";

const catImageStyle: React.CSSProperties = {
    borderRadius: '10%',
    border: '3px solid #000000',
    maxHeight: '100%',
    maxWidth: '100%',
    height: '300px',
    width: 'auto',
    margin: '5px',
}

const catCage: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
}

export default async function Page() {
    // const link = process.env.CAT_LINK;
    const baseUrl = process.env.CAT_API_URL;
    const katsLimit = 20;
    const url = `${baseUrl}/v1/images/search?limit=${katsLimit}&api_key=${process.env.CAT_API_KEY}`;
    // const link = process.env.CAT_LINK;
    console.log(url);
    console.log(process.env.CAT_API_KEY);

    const data: Response = await fetch(url);
    console.log("All kats fetched!");

    const posts = await data.json()
    // console.log(posts);

    const filteredPosts = posts.filter((post: any) =>
        post.url.includes("cdn2.thecatapi.com")
    );

    return (
        <div className="cat-container" style={catCage}>
            {filteredPosts.map((post: any) => (
                <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer">
                    {/*{post.breeds.name}*/}
                    <Image
                        src={post.url}
                        alt= ""
                        style={catImageStyle}
                        height={400}
                        width={400}
                        // layout="responsive"
                    /></a>
            ))}
        </div>
    )
}