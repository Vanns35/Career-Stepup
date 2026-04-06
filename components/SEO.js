import Head from 'next/head'

export default function SEO({ title, description }) {
  const site = 'Career Upsteps'
  return (
    <Head>
      <title>{title ? `${title} — ${site}` : site}</title>
      <meta name="description" content={description || 'Immigration and career consultancy services.'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}
