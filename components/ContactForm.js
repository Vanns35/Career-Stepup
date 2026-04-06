import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    // Try a local API endpoint if available; otherwise fallback to mailto
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })

      if (res.ok) {
        setStatus('sent')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        throw new Error('server')
      }
    } catch (err) {
      // Fallback to mailto for quick testing
      const subject = encodeURIComponent('Enquiry from website')
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
      window.location.href = `mailto:hello@careerupsteps.example?subject=${subject}&body=${body}`
      setStatus('sent')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 max-w-lg">
      <input className="border rounded p-2" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required />
      <input type="email" className="border rounded p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
      <textarea className="border rounded p-2 h-32" placeholder="How can we help?" value={message} onChange={e=>setMessage(e.target.value)} required />
      <div>
        <button className="px-4 py-2 bg-accent text-white rounded" type="submit">Send Enquiry</button>
        {status === 'sending' && <span className="ml-3 text-sm">Sending…</span>}
        {status === 'sent' && <span className="ml-3 text-sm text-green-600">Message sent</span>}
      </div>
    </form>
  )
}
