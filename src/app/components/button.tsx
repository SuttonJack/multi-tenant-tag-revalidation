'use client'

export default function Button() {
  return (
    <button
      onClick={() => {
        window.open(window.location.origin + '/api/revalidate', '_blank')
      }}
    >
      Click me to revalidate
    </button>
  )
}
