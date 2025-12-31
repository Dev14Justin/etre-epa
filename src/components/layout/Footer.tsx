import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="font-serif text-xl font-bold text-white mb-4 block">
              ENTREPRENEURS ÉPANOUIS
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Aider les coachs et experts du mieux-être à bâtir un business premium aligné avec leurs valeurs.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-base text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-base text-gray-300 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/diagnostic" className="text-base text-gray-300 hover:text-white transition-colors">
                  Diagnostic Stratégique
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social (Placeholder) */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">
              contact@entrepreneurs-epanouis.com
            </p>
            {/* Social icons can be added here later */}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 m-auto items-center text-sm text-gray-500">
          <p className='text-center'>&copy; {currentYear} Entrepreneurs Épanouis. Tous droits réservés.</p>
          
        </div>
      </div>
    </footer>
  );
}


{/* <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-gray-300">Mentions Légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-gray-300">Confidentialité</Link>
            <Link href="/cgv" className="hover:text-gray-300">CGV</Link>
          </div> */}
