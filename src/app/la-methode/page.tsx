import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CheckCircle2, Zap, Target, BarChart3, TrendingUp } from "lucide-react";

export default function MethodPage() {
  return (
    <>
      {/* HERO LA METHODE */}
      <Section background="white" className="pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
            L’Écosystème <span className="text-primary italic">Expansio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed italic">
            &quot;Le marketing traditionnel a perdu sa crédibilité aux yeux de
            tous. <br />
            Pour passer maintenant à l&apos;échelle, vous avez besoin de
            prédictibilité.&quot;
          </p>
        </div>
      </Section>

      {/* LES 3 PILIERS */}
      <Section background="light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-16 uppercase tracking-widest text-primary">
            Les 3 piliers de votre expansion
          </h2>

          <div className="space-y-24">
            {/* Pilier 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">
                  Pilier 1 : L&apos;Offre irrésistible
                </h3>
                <p className="text-primary font-medium mb-6 uppercase text-sm tracking-wide">
                  À très haute valeur de transformation (High Ticket)
                </p>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    <span className="font-bold text-red-600">
                      Le problème :
                    </span>{" "}
                    Vous vendez des heures ou des sessions. Vous êtes plafonné
                    par votre temps.
                  </p>
                  <p>
                    <span className="font-bold text-green-700">
                      La solution :
                    </span>{" "}
                    Nous transformons votre expertise en une
                    <span className="font-bold">
                      {" "}
                      Offre à très haute valeur de transformation
                    </span>
                    . Nous packagons votre savoir pour qu&apos;il résolve une
                    douleur profonde et urgente chez votre client.
                  </p>
                </div>
                <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-secondary italic shadow-sm">
                  &quot;Résultat ? Vous ne vendez plus un coaching, vous vendez
                  un résultat.&quot;
                </div>
              </div>
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Impact</p>
                    <p className="text-xl font-bold text-primary">
                      Autorité Incontestée
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Tarification</p>
                    <p className="text-xl font-bold text-primary">
                      Expansion des Marges
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pilier 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Target size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">
                  Pilier 2 : L&apos;Acquisition Massive
                </h3>
                <p className="text-primary font-medium mb-6 uppercase text-sm tracking-wide">
                  Le Trafic Qualifié
                </p>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    <span className="font-bold text-red-600">
                      Le problème :
                    </span>{" "}
                    Personne ne voit votre offre. Même la meilleure offre du
                    monde ne sert à rien sans visibilité.
                  </p>
                  <p>
                    <span className="font-bold text-green-700">
                      La solution :
                    </span>{" "}
                    Nous ouvrons les vannes. Grâce à une stratégie publicitaire
                    chirurgicale, nous plaçons votre message directement sous
                    les yeux de ceux qui ont besoin de vous{" "}
                    <span className="italic">maintenant</span>.
                  </p>
                </div>
                <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-secondary italic shadow-sm">
                  &quot;Nous achetons de la vitesse et du volume.&quot;
                </div>
              </div>
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 md:order-1 relative overflow-hidden">
                <div className="relative h-64 flex items-center justify-center">
                  {/* Cercles concentriques (Effet Radar) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border border-primary/15 animate-pulse" />
                    <div className="absolute w-32 h-32 rounded-full border border-primary/10" />
                  </div>

                  {/* Cartes Flottantes de Canaux */}
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div
                      className="bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce shadow-primary/5"
                      style={{ animationDuration: "3s" }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-[10px]">
                        FB
                      </div>
                      <div className="h-1.5 w-12 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-3/4" />
                      </div>
                    </div>

                    <div
                      className="bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce shadow-primary/5"
                      style={{
                        animationDuration: "4s",
                        animationDelay: "0.5s",
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-800/10 flex items-center justify-center text-blue-800 font-bold text-[10px]">
                        IN
                      </div>
                      <div className="h-1.5 w-12 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-800 w-1/2" />
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-xl border border-primary/20 col-span-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <TrendingUp className="text-secondary" size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                            Visibilité
                          </p>
                          <p className="text-lg font-bold text-primary leading-none">
                            +450%
                          </p>
                        </div>
                      </div>
                      <BarChart3 className="text-primary/20" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pilier 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">
                  Pilier 3 : La Conversion Automatisée
                </h3>
                <p className="text-primary font-medium mb-6 uppercase text-sm tracking-wide">
                  Le Système (Tunnel de Vente)
                </p>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    <span className="font-bold text-red-600">
                      Le problème :
                    </span>{" "}
                    Vous perdez du temps à convaincre des sceptiques.
                  </p>
                  <p>
                    <span className="font-bold text-green-700">
                      La solution :
                    </span>{" "}
                    Un tunnel de conversion qui filtre pour vous. Avant
                    d'arriver à vous, le prospect traverse un processus éducatif
                    (VSL, Masterclass, Séquence Email).
                  </p>
                </div>
                <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-secondary italic shadow-sm">
                  &quot;Quand il réserve un appel, il est déjà
                  &apos;vendu&apos;. Il ne vous reste plus qu&apos;à valider le
                  &apos;fit&apos; humain.&quot;
                </div>
              </div>
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <div className="space-y-2">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className="bg-white p-3 rounded-lg border border-gray-100 flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">
                        {step}
                      </div>
                      <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-primary ${step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section background="primary" className="text-center text-white">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
          Résultat final : Un calendrier rempli de leads qualifiés.
        </h2>
        <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto">
          Obtenez des revenus prévisibles et la liberté de choisir vos clients.
        </p>
        <Button href="/diagnostic" variant="secondary" size="lg">
          Je veux implémenter ce système
        </Button>
      </Section>
    </>
  );
}
