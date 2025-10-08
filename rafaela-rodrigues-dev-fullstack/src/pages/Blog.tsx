import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import blogData from '../data/blog.json'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  tags: string[]
  imageUrl: string
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simula carregamento de dados
    const loadPosts = async () => {
      try {
        // Simula delay de carregamento
        await new Promise(resolve => setTimeout(resolve, 500))
        setPosts(blogData as unknown as BlogPost[])
      } catch (error) {
        console.error('Erro ao carregar posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <main className="blog-page" role="main">
          <div className="container">
            <div className="loading" aria-live="polite">
              <p>Carregando posts...</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="blog-page" role="main">
        <div className="container">
          <section className="blog-content">
            <h1>Blog</h1>
            <p className="subtitle">
              Compartilhando conhecimentos sobre desenvolvimento, tecnologia e inovação
            </p>
            
            <div className="blog-grid" role="list" aria-label="Lista de artigos do blog">
              {posts.map(post => (
                <article key={post.id} className="blog-card" role="listitem">
                  <div className="blog-card-image">
                    <img 
                      src={post.imageUrl} 
                      alt={`Imagem do artigo: ${post.title}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-meta">
                      <span>Por {post.author}</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('pt-BR', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="blog-card-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="blog-tag" role="listitem">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="blog-card-link"
                      aria-label={`Ler artigo completo: ${post.title}`}
                    >
                      Ler mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
           </section>
         </div>
       </main>
      <Footer />
    </>
  )
}

export default Blog