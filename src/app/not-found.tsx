import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#00222B] text-[#DEDAD6]">
      <h1 className="text-6xl md:text-8xl font-bold mb-8 text-accent">404</h1>
      <h2 className="text-2xl md:text-3xl mb-6">Oops! Page Not Found</h2>
      <p className="text-lg md:text-xl mb-12 text-center">
        Sorry, the page you are looking for doesn’t exist. You can go back to
        the homepage.
      </p>
      <Link href="/">
        <div className="px-8 py-4 bg-accent text-[#1BFFFF] rounded-lg text-lg md:text-xl font-semibold hover:shadow-lg transition duration-300">
          Go to Homepage
        </div>
      </Link>
    </div>
  )
}

export default NotFoundPage
