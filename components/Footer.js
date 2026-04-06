import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-10 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold">Career Upsteps</h3>
          <p className="mt-2 text-sm text-gray-600 max-w-md">Immigration and career support — tailored advice, clear steps, measurable outcomes.</p>
        </div>

        <div>
          <h4 className="font-medium">Contact</h4>
          <p className="text-sm text-gray-700">Email: hello@careerupsteps.example</p>
          <p className="text-sm text-gray-700">WhatsApp: +1 555 000 0000</p>
        </div>

        <div>
          <h4 className="font-medium">Follow</h4>
          <SocialLinks />
        </div>
      </div>

      <div className="border-t">
        <div className="container py-4 text-sm text-gray-500">© {new Date().getFullYear()} Career Upsteps — All rights reserved.</div>
      </div>
    </footer>
  )
}
