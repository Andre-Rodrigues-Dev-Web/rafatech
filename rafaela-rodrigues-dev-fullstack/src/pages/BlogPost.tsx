import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
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

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Simula delay de carregamento
        await new Promise(resolve => setTimeout(resolve, 300))
        const foundPost = (blogData as unknown as BlogPost[]).find((p: BlogPost) => p.id === parseInt(id || '0'))
        setPost(foundPost || null)
      } catch (error) {
        console.error('Erro ao carregar post:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [id])

  if (loading) {
    return (
      <>
        <Header />
        <main className="blog-post-page" role="main">
          <div className="container">
            <div className="loading" aria-live="polite">
              <p>Carregando artigo...</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!post) {
    return (
      <>
        <Header />
        <main className="blog-post-page" role="main">
          <div className="container">
            <div className="post-not-found">
              <h1>Artigo não encontrado</h1>
              <p>O artigo que você está procurando não existe ou foi removido.</p>
              <Link to="/blog" className="back-to-blog">
                ← Voltar para o Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))
  }

  return (
    <>
      <Header />
      <main className="blog-post-page" role="main">
        <div className="container">
          <nav className="breadcrumb" aria-label="Navegação estrutural">
            <Link to="/blog" aria-label="Voltar para lista de artigos">Blog</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{post.title}</span>
          </nav>

          <article className="blog-post">
            <header className="post-header">
              <h1>{post.title}</h1>
              <div className="post-meta">
                <div className="meta-item">
                  <span className="meta-label">Por:</span>
                  <span className="meta-value">{post.author}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Data:</span>
                  <time dateTime={post.date} className="meta-value">
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Leitura:</span>
                  <span className="meta-value" aria-label={`Tempo de leitura: ${post.readTime}`}>
                    {post.readTime}
                  </span>
                </div>
              </div>
              <div className="post-tags" role="list" aria-label="Tags do artigo">
                {post.tags.map(tag => (
                  <span key={tag} className="tag" role="listitem">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="post-image">
              <img 
                src={post.imageUrl} 
                alt={`Imagem do artigo: ${post.title}`}
                loading="lazy"
              />
            </div>

            <div className="post-content">
              {formatContent(post.content)}
            </div>

            <footer className="post-footer">
              <div className="post-navigation">
                <Link 
                  to="/blog" 
                  className="back-to-blog"
                  aria-label="Voltar para lista de artigos do blog"
                >
                  ← Voltar para o Blog
                </Link>
              </div>
              
              <div className="post-share">
                <h3>Compartilhar</h3>
                <div className="share-buttons">
                  <button 
                    onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                    className="share-btn"
                    aria-label={`Compartilhar artigo: ${post.title}`}
                  >
                    Compartilhar
                  </button>
                  <button 
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="share-btn"
                    aria-label="Copiar link do artigo"
                  >
                    Copiar Link
                  </button>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default BlogPost