import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { CheckCircle2, Lightbulb, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative pt-20 pb-20 lg:pt-22 lg:pb-22 overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-black/50" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Votre expertise mérite d&apos;être reconnue.
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Sortez de l&apos;anonymat et automatisez votre acquisition de
              clients pour transformer votre savoir en empire, sans prospection
              manuelle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/diagnostic" size="lg" variant="secondary">
                Réserver mon Audit de Croissance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LE PARADOXE DE L'EXPERT */}
      <Section id="paradoxe" background="light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900">
              Le Paradoxe de l&apos;Expert
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Vous changez la vie de vos clients, vous maîtrisez votre sujet
                mieux que quiconque, pourtant, votre compte en banque ne reflète
                pas votre niveau de compétence.
              </p>
              <p className="font-medium text-primary">
                Vous vous reconnaissez probablement dans l&apos;un de ces trois
                scénarios :
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "L'Invisible",
                desc: "Vous ne dépendez que du bouche-à-oreille ? Vous ne savez pas où sera votre prochain client ? Votre revenu est une montagne russe émotionnelle ?",
              },
              {
                title: "L'Esclave du temps",
                desc: "Votre agenda est plein, mais vos revenus plafonnent ? Vous échangez votre temps contre de l'argent ? Vous êtes à la limite du burn-out ?",
              },
              {
                title: "Le Sceptique déçu",
                desc: "Vous avez essayé les agences, la pub, les webinaires... Vous avez obtenu des 'J'aime', mais pas de clients. Vous attirez des curieux sans budget.",
              },
            ].map((scenario, idx) => (
              <Card key={idx} className="border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {scenario.title}
                </h3>
                <p className="text-gray-600 line-height-relaxed">
                  {scenario.desc}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
            <p className="text-xl text-gray-800">
              <span className="font-bold text-primary">La vérité ?</span> Ce
              n&apos;est pas votre expertise qui est en cause. C&apos;est votre
              système d&apos;acquisition qui est brisé ou inexistant.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 3: ATTIRER VS CHASSER */}
      <Section id="attraction" background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900">
              Maintenant il faut que vous arrêtiez de chasser. <br />
              <span className="text-secondary">
                Commencez plutôt à attirer.
              </span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Imaginez que vous avez un système qui travaille 24h/24 et 7j/7 ;
              Un système qui :
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Identifie vos clients idéaux dans la masse.",
                "Les éduque sur votre valeur avant même que vous ne leur parliez.",
                "Disqualifie les 'touristes' et ne remplit votre agenda qu'avec des prospects prêts à payer.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2
                    className="text-primary mt-1 mr-3 shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-6">
              <p className="text-gray-600 italic">
                C&apos;est exactement ce que nous construisons. Nous ne faisons
                pas de la &quot;communication&quot;. Nous bâtissons une machine
                de guerre commerciale pour votre expertise.
              </p>
              <Button href="/la-methode" variant="outline" size="lg">
                Voir comment ça marche
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-4/5 rounded-2xl overflow-hidden relative shadow-2xl">
              <img
                src="/attire.png"
                alt="Système d'attraction client"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4: LES 3 PILIERS (Simplified Preview) */}
      <Section background="primary" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">
            L&apos;Écosystème d&apos;acquisition : Expansio
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-white/90">
            <div className="p-6">
              <Lightbulb className="mx-auto mb-4 text-secondary" size={40} />
              <h3 className="text-xl font-bold mb-4 text-white">
                L&apos;Offre Irrésistible
              </h3>
              <p>
                Transformer votre savoir en résultat transformateur (High
                Ticket).
              </p>
            </div>
            <div className="p-6 border-l border-white/20">
              <Users className="mx-auto mb-4 text-secondary" size={40} />
              <h3 className="text-xl font-bold mb-4 text-white">
                L&apos;Acquisition Massive
              </h3>
              <p>
                Une stratégie publicitaire chirurgicale pour attirer le bon
                trafic.
              </p>
            </div>
            <div className="p-6 border-l border-white/20">
              <CheckCircle2 className="mx-auto mb-4 text-secondary" size={40} />
              <h3 className="text-xl font-bold mb-4 text-white">
                La Conversion Automatisée
              </h3>
              <p>
                Un tunnel qui filtre les sceptiques et remplit votre calendrier
                de leads qualifiés.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Button href="/nos-programmes" variant="secondary" size="lg">
              Je veux implémenter ce système
            </Button>
          </div>
        </div>
      </Section>

      {/* SECTION 5: MISSION REAFIRMED */}
      <Section className="text-center py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Notre Raison d&apos;être
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-gray-900">
            Votre vocation mérite un business à sa hauteur.
          </h3>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed italic">
            &quot;Votre mission mérite un système et votre impact mérite une
            stratégie claire.&quot;
          </p>
          <Button href="/diagnostic" size="lg">
            Réserver mon Audit de Croissance
          </Button>
          <div className="mt-8 text-gray-500 text-sm">
            E-mail :{" "}
            <a
              href="mailto:hello@entrepreneurs-epanouis.com"
              className="underline"
            >
              hello@entrepreneurs-epanouis.com
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
