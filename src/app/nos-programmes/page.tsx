import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
  Target,
  Layers,
  Rocket,
  UserCheck,
  TrendingUp,
  Cpu,
  Workflow,
  Users2,
} from "lucide-react";

export default function ProgramsPage() {
  return (
    <>
      {/* HERO PROGRAMMES */}
      <Section background="light" className="pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
            Nos <span className="text-primary italic">Programmes</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Trop de coachs et d&apos;experts restent bloqués à un niveau de
            revenus qui ne reflète pas leur valeur réelle.
            <span className="block mt-4 font-bold text-primary">
              Votre expertise mérite mieux que la survie.
            </span>
          </p>
        </div>
      </Section>

      {/* PROGRAMME D-CLIC */}
      <Section id="d-clic" background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
                Expansion Initiale
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                D-CLIC
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Un système stratégique en 90 jours conçu pour sécuriser vos
                revenus, structurer votre activité et vous redonner la maîtrise
                de votre temps.
              </p>
              <p className="text-lg text-primary font-medium italic mb-10">
                &quot;Nous ne faisons pas de la motivation mais posons plutôt
                les rails de votre expansion.&quot;
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-wider text-gray-900">
                  Notre méthodologie en 5 étapes :
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Target className="text-secondary" />,
                      title: "D - DIAGNOSTIC",
                      desc: "Identifier les fuites d'énergie et d'argent dans votre modèle actuel.",
                    },
                    {
                      icon: <Layers className="text-secondary" />,
                      title: "C - CONSTRUCTION",
                      desc: "Bâtir votre 'Offre Signature' à haute valeur.",
                    },
                    {
                      icon: <Rocket className="text-secondary" />,
                      title: "L - LANCEMENT",
                      desc: "Activer un système d'acquisition simple et digne.",
                    },
                    {
                      icon: <UserCheck className="text-secondary" />,
                      title: "I - IDENTITÉ",
                      desc: "Passer de la posture d'exécutant à celle du stratège respecté.",
                    },
                    {
                      icon: <TrendingUp className="text-secondary" />,
                      title: "C - CROISSANCE",
                      desc: "Organiser votre temps pour pérenniser vos résultats.",
                    },
                  ].map((step, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 items-start p-4 rounded-xl border border-gray-100 hover:border-primary/20 transition-colors"
                    >
                      <div className="mt-1">{step.icon}</div>
                      <div>
                        <h4 className="font-bold text-primary">{step.title}</h4>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky top-32">
              <Card className="bg-primary text-white p-10 border-none shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">
                  Prêt pour le déclic ?
                </h3>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>90 jours d&apos;accompagnement intensif</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Structure d&apos;offre validée</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Système d&apos;acquisition prêt-à-lancer</span>
                  </li>
                </ul>
                <Button
                  href="/diagnostic"
                  variant="secondary"
                  className="w-full py-4 text-lg"
                >
                  Je vérifie mon éligibilité
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* PROGRAMME EXPANSION 360 */}
      <Section id="expansion-360" background="light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
              Scale & Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              EXPANSION 360
            </h2>
            <p className="text-2xl font-serif italic text-gray-700 mb-4">
              &quot;D’entrepreneur surchargé au chef d’orchestre.&quot;
            </p>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
              Le programme conçu pour les experts établis qui veulent briser
              leur plafond de verre. Doublez votre impact tout en réduisant vos
              heures de travaux.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-12 h-12 text-primary mb-6" />,
                title: "Architecture d'acquisition",
                desc: "Votre marketing devient un aimant de clients Premium en continu.",
              },
              {
                icon: <Workflow className="w-12 h-12 text-primary mb-6" />,
                title: "Systèmes & Automatisation",
                desc: "Construisons votre 'Écosystème Invisible'. La machine tourne sans vous.",
              },
              {
                icon: <Users2 className="w-12 h-12 text-primary mb-6" />,
                title: "Mastermind & Alliance",
                desc: "Intégrez un cercle privé d'experts d'élite pour élever vos standards.",
              },
            ].map((levier, idx) => (
              <Card
                key={idx}
                className="bg-white border-t-4 border-secondary p-8 hover:-translate-y-2 transition-transform h-full"
              >
                {levier.icon}
                <h3 className="text-xl font-bold mb-4 text-primary uppercase tracking-tight">
                  {levier.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{levier.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/diagnostic" variant="primary" size="lg">
              Réservez un appel stratégique
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
