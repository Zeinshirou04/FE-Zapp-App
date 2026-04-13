export default function Footer() {
  return (
    <footer className="bg-zapp-ink text-white/50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-white text-lg">
          Zapp<span className="text-volt-light">.</span>
        </span>
        <p className="font-sans text-sm text-center">
          © {new Date().getFullYear()} Zapp Freelance. All rights reserved.
        </p>
        <p className="font-sans text-sm">
          Built with Laravel & Next.js
        </p>
      </div>
    </footer>
  )
}