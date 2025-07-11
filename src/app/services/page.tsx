export default function HomePage() {
  return (
    <section className="bg-blue-100 h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">Welcome to MySite</h1>
      <p className="text-gray-700 text-lg max-w-xl">
        We help you organize events and make memories last forever.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  )
}
