import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gray-900">
      <div className="container py-10 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold text-current">Career Upsteps</h3>
          <p className="mt-2 text-sm muted max-w-md">Immigration and career support — tailored advice, clear steps, measurable outcomes.</p>
        </div>

        <div>
          <h4 className="font-medium text-current">Contact</h4>
          <p className="text-sm muted">Email: hello@careerupsteps.example</p>
          <p className="text-sm muted">WhatsApp: +1 555 000 0000</p>
        </div>

        <div>
          <h4 className="font-medium text-current">Follow</h4>
          <SocialLinks />
        </div>
      </div>

      <div className="border-t border-gray-800">
  <div className="container py-4 text-sm muted">© {new Date().getFullYear()} Career Upsteps — All rights reserved.</div>
      </div>
    </footer>
  )
}
