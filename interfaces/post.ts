
type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  categories: string[]
  ogImage: {
    url: string
  }
  content: string
}

export default PostType