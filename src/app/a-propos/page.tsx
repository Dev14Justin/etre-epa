import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <>
      {/* HEADER PAGE */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            À Propos
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto italic">
            &quot;Plus qu&apos;un stratège, un partenaire de croissance.&quot;
          </p>
        </div>
      </section>

      {/* L&apos;HISTOIRE */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/ma_photo.JPG"
                alt="Elie - Stratège en Expansion"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-8 rounded-2xl hidden md:block">
              <p className="text-2xl font-serif font-bold italic">
                VALEUR - ALIGNEMENT - CLARTE - IMPACT
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold mb-8 text-primary">
              L&apos;Histoire
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Bonjour, je suis <span className="font-bold">Elie</span>.
              </p>
              <p>
                Pendant des années, j&apos;ai observé des experts brillants
                échouer. Non pas par manque de talent, mais par manque de
                visibilité. J&apos;ai vu des coachs incroyables retourner au
                salariat parce qu&apos;ils ne savaient pas comment générer au
                moins 3 clients par mois de façon régulière.
              </p>
              <p>
                J&apos;ai aussi vu le marché être inondé par des
                &quot;gourous&quot; du marketing promettant monts et merveilles
                avec des techniques qui ne fonctionnent plus depuis 2015.
              </p>
              <p className="font-medium text-primary">
                C&apos;est pour cela qu&apos;ENTREPRENEURS ÉPANOUIS a été créé :
                pour devenir le pont le plus court entre votre expertise et les
                clients qui en ont désespérément besoin.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SA PHILOSOPHIE */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
              Sa Philosophie
            </h2>
            <div className="space-y-8 text-lg text-gray-700">
              <p>
                <span className="font-bold text-primary">
                  ENTREPRENEURS ÉPANOUIS
                </span>{" "}
                n&apos;est pas une agence créative. Cette entreprise n&apos;est
                pas là pour que votre site soit simplement &quot;joli&quot; ou
                pour que vous ayez plus de followers sur Instagram.
              </p>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 italic text-red-900">
                &quot;Ces métriques flattent l&apos;ego, mais elles ne paient
                pas les factures.&quot;
              </div>
              <p>
                Mon obsession, c&apos;est votre{" "}
                <span className="font-bold text-primary text-xl">
                  ROI (Retour sur Investissement)
                </span>
                .
              </p>
              <p>
                Je travaille avec une poignée de clients par trimestre pour
                garantir une implémentation parfaite. Si vous cherchez un
                partenaire qui va challenger votre business model pour le faire
                exploser, nous sommes prêts à discuter.
              </p>
            </div>
            <div className="mt-12 text-center">
              <Button href="/contact" size="lg">
                Discutons de votre vision
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* MISSION REAFIRMED */}
      <Section className="text-center py-20">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 italic text-gray-400">
          &quot;Votre vocation mérite un business à sa hauteur.&quot;
        </h2>
        <div className="flex justify-center gap-4 mt-8">
          <img
            src="/LOGO.png"
            alt="Logo"
            className="h-10 opacity-50 grayscale"
          />
        </div>
      </Section>
    </>
  );
}
