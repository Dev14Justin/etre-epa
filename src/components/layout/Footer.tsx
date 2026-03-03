import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="mb-6 block">
              <img
                src="/LOGO.png"
                alt="Entrepreneurs Épanouis"
                className="h-12 w-auto invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs italic">
              &quot;Votre vocation mérite un business à sa hauteur.&quot;
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "La Méthode", href: "/la-methode" },
                { name: "Nos Programmes", href: "/nos-programmes" },
                { name: "À Propos", href: "/a-propos" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
              Contact
            </h3>
            <p className="text-gray-300 text-base mb-6">
              hello@entrepreneurs-epanouis.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} Entrepreneurs Épanouis. Tous droits réservés.
          </p>
          <p className="mt-4 md:mt-0 italic">
            Propulsé par{" "}
            <a
              href="https://p5sog.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              P5SOG
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
