import React from "react"
import { Link } from "gatsby"

const Post = ({ post, title }) => (
  <li key={post.fields.slug}>
    <article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h2>
          <Link to={post.fields.slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        <small>{post.frontmatter.date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </section>
    </article>
  </li>
)

export const PostList = ({ posts }) => (
  <ol style={{ listStyle: `none` }}>
    {posts.map(post => {
      const title = post.frontmatter.title || post.fields.slug

      return <Post key={post.fields.slug} post={post} title={title} />
    })}
  </ol>
)
