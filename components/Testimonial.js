export default function Testimonial({ quote, author, role }) {
  return (
    <blockquote className="p-6 bg-white border rounded-lg shadow-sm">
      <p className="text-gray-800">“{quote}”</p>
      <footer className="mt-4 text-sm text-gray-600">— {author}{role ? `, ${role}` : ''}</footer>
    </blockquote>
  )
}
