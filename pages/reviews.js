import SEO from '../components/SEO'
import Testimonial from '../components/Testimonial'

const DATA = [
  {quote:'Excellent guidance through the visa process.', author:'Sara M.', role:'Marketing Manager'},
  {quote:'Professional and very responsive.', author:'Omar R.', role:'Engineer'},
  {quote:'Helped me secure interviews and improved my CV.', author:'Priya S.', role:'Data Scientist'}
]

export default function Reviews(){
  return (
    <div>
      <SEO title="Reviews" description="Client reviews and testimonials" />
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-6">Reviews</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {DATA.map((t,i)=>(
            <Testimonial key={i} quote={t.quote} author={t.author} role={t.role} />
          ))}
        </div>
      </section>
    </div>
  )
}
