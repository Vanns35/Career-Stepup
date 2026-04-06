export default function MapEmbed({ lat = 51.5074, lng = -0.1278 }) {
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`
  return (
    <div className="w-full h-60 border rounded overflow-hidden">
      <iframe className="w-full h-full" src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
