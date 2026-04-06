import SEO from '../components/SEO'

export default function Services(){
  const services = [
    {title:'Immigration Guidance', desc:'Eligibility checks, application support and documentation review.'},
    {title:'Career Coaching', desc:'1:1 coaching, career plans and interview preparation.'},
    {title:'CV & LinkedIn', desc:'CV rewrite, LinkedIn optimisation and job search strategies.'},
    {title:'Employer Liaison', desc:'Support communicating with employers and sponsors.'}
  ]

  return (
    <div>
      <SEO title="Services" description="Services offered by Career Upsteps" />
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-6">Services</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map(s=> (
            <div key={s.title} className="p-6 border rounded bg-white">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
