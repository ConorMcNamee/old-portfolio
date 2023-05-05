import Head from "next/head"
import PostType from "../../interfaces/post"
import PostBody from "../../components/Blog/PostBody"
import markdownToHtml from "../../lib/markdownToHtml"
import { getPostBySlug } from "../../lib/api"
import { getAllPosts } from "../../lib/api"

type Props = {
  post: PostType
}

export default function Post({ post }: Props) {
  
  const title = `${post?.title}`
  
  return (
    <article>
      <Head >
        <title>{title}</title>
      </Head>

      <PostBody content={post?.content} />
    </article>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}