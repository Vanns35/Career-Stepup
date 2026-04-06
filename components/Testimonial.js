export default function Testimonial({ quote, author, role }) {
  return (
    <blockquote className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-sm card">
  <p className="text-current">“{quote}”</p>
  <footer className="mt-4 text-sm muted">— {author}{role ? `, ${role}` : ''}</footer>
    </blockquote>
  )
}
