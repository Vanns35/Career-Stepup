import SEO from '../../components/SEO'
import Link from 'next/link'

export default function Blog(){
  const posts = [
    {slug:'starting-your-visa', title:'Starting your visa journey', excerpt:'Key steps to prepare a strong application.'},
    {slug:'cv-tips', title:'CV tips that get interviews', excerpt:'Practical CV improvements for international candidates.'}
  ]

  return (
    <div>
      <SEO title="Blog" description="Articles and tips from Career Upsteps" />
      <section className="py-8">
  <h1 className="text-3xl font-bold mb-6 text-current">Blog</h1>
        <div className="space-y-4">
          {posts.map(p=> (
            <article key={p.slug} className="p-4 border rounded bg-gray-800 border-gray-700 card">
              <h3 className="font-semibold"><Link href={`/blog/${p.slug}`} className="text-accent">{p.title}</Link></h3>
              <p className="text-sm muted">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
