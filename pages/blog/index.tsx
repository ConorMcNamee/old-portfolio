import Link from "next/link";
import Logos from "../../components/Layout/Logos";
import { getSortedPostsData } from "../../lib/posts";

import ListItem from "../../components/Blog/ListItem";


export default function Blog() {
    const posts = getSortedPostsData()
    return (
        <section className="h-screen w-screen flex justify-center text-center items-center">
            {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
        </section>
    );
}
