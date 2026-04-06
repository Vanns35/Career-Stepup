export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, message } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // In production: forward to email service, store in DB, or enqueue for processing.
    // For this starter, we'll log to server console so you can see submissions in Vercel/Dev logs.
    console.log('Enquiry received:', { name, email, message })

    return res.status(200).json({ ok: true, message: 'Enquiry received' })
  } catch (err) {
    console.error('Enquiry handler error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
