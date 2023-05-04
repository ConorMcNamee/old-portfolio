import Link from "next/link";
import { getAllPosts } from "../../lib/api";
import Post from "../../interfaces/post";

type Props = {
    allPosts: Post[]
}

export default function Blog({ allPosts }:Props) {
    return (
        <section className="flex flex-col">
            <div id="blog-card" className="">
                {
                    allPosts.map((post, key) => (
                        <Link key={key} href={post.slug}>
                            <div className="">
                                <h1 className="text-white">{post.title}</h1>
                                <p>{post.excerpt}</p>
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