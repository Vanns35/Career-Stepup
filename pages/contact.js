import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'
import SocialLinks from '../components/SocialLinks'

export default function Contact(){
  return (
    <div>
      <SEO title="Contact" description="Get in touch with Career Upsteps" />

      <section className="py-8 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact</h1>
          <p className="text-gray-700 mb-4">Reach out via email, WhatsApp or the enquiry form below. We aim to respond within 48 hours.</p>

          <div className="mb-4">
            <h4 className="font-medium">Email</h4>
            <a href="mailto:hello@careerupsteps.example" className="text-accent">hello@careerupsteps.example</a>
          </div>

          <div className="mb-4">
            <h4 className="font-medium">WhatsApp</h4>
            <a href="https://wa.me/15550000000" className="text-accent">+1 555 000 0000</a>
          </div>

          <div className="mb-4">
            <h4 className="font-medium">Follow us</h4>
            <SocialLinks />
          </div>

          <h4 className="font-medium mb-2">Our location</h4>
          <MapEmbed />
        </div>

        <div>
          <h3 className="font-semibold mb-3">Send an enquiry</h3>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
