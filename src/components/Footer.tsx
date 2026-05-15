export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 px-6 py-14 text-zinc-500 text-sm">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <p className="text-white font-black text-xl mb-3">
            Zea<span className="text-orange-400">.lify</span>
          </p>
          <p className="leading-relaxed">
            Where creativity meets craftsmanship. Premium custom apparel
            designed to help you wear your story with pride.
          </p>
        </div>
        <div>
          <p className="text-white font-bold mb-3">Quick Links</p>
          <div className="space-y-2">
            {["Home", "Tees", "Hoodies", "Caps", "Sets"].map((l) => (
              <a
                key={l}
                href="#catalogue"
                className="block hover:text-orange-400 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-white font-bold mb-3">Get in Touch</p>
          <p className="mb-1">hello@zealify.com</p>
          <p className="mb-4">+234 806 589 3230</p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/2348065893230"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/zea.lify/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-zinc-800 text-center">
        © 2026 Zea.lify. All rights reserved.
      </div>
    </footer>
  );
}
