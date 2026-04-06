import SEO from '../components/SEO'
import Testimonial from '../components/Testimonial'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <SEO title="Home" description="Career Upsteps — immigration and career development consultancy" />

      <section className="py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Clear immigration advice. Career results.</h1>
            <p className="text-gray-700 mb-6">We help professionals navigate immigration pathways and accelerate career growth with personalised strategies and practical support.</p>
            <Link href="/contact" className="px-5 py-3 bg-accent text-white rounded">Get in touch</Link>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-white rounded-lg p-6">
            <h3 className="font-semibold mb-3">How we help</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Immigration eligibility & applications</li>
              <li>CV & interview coaching</li>
              <li>Career pathway planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Client stories</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Testimonial quote="They handled my visa quickly and professionally." author="Aisha K." role="Software Engineer" />
          <Testimonial quote="I landed a role within 3 months after working with their coach." author="Marcus L." role="Product Manager" />
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Our services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">Immigration Applications</div>
          <div className="p-4 border rounded">Career Coaching</div>
          <div className="p-4 border rounded">CV & Interview Prep</div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-xl font-medium">Ready to take the next step?</h2>
  <p className="text-gray-700 mb-4">Schedule a consultation and start your plan.</p>
  <Link href="/contact" className="px-4 py-2 bg-primary text-white rounded">Contact us</Link>
      </section>
    </div>
  )
}
