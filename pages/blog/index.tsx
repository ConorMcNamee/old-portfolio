import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../../lib/api";
import Post from "../../interfaces/post";

type Props = {
    allPosts: Post[]
}

export default function Blog({ allPosts }:Props) {
    return (
        <section className="flex flex-col flex-wrap justify-center">
            <div id="blog-card" className="flex flex-wrap items-center">
                {
                    allPosts.map((post, key) => (
                        <Link className="flex md:w-[50%] p-5 justify-center" key={key} href={"/blog/"+post.slug}>
                            <div className="flex flex-col">
                                <Image
                                className="flex self-center"
                                alt={"Hello"}
                                src={post.coverImage}
                                width={500}
                                height={150}
                                 />

                                <Link href={"/blog/"+post.slug}>
                                    <div className="flex flex-col mt-5">
                                        <h1 className="">{post.title}</h1>
                                        <p className="text-sm">{post.date}</p>
                                        <p>{post.excerpt}</p>
                                    </div>
                                </Link>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    );
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt',
    ])
  
    return {
      props: { allPosts },
    }
  }