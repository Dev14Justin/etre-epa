import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';

export default function About() {
  const methodSteps = [
    { letter: 'E', title: 'Élever l’identité', desc: 'Travail sur le mindset et la posture de leader.' },
    { letter: 'P', title: 'Poser le message clair', desc: 'Communication magnétique qui parle à l’âme de votre client.' },
    { letter: 'A', title: 'Architecturer l’offre premium', desc: 'Construction d’une offre transformationnelle à haute valeur.' },
    { letter: 'N', title: 'Normaliser l’autorité', desc: 'Devenir la référence incontournable dans votre niche.' },
    { letter: 'O', title: 'Optimiser l’acquisition', desc: 'Mise en place de systèmes fluides pour attirer les prospects.' },
    { letter: 'U', title: 'Unifier énergie & stratégie', desc: 'Équilibrer le faire et l’être pour durer.' },
    { letter: 'I', title: 'Inspirer et convertir', desc: 'Vente éthique et alignée, sans forcing.' },
    { letter: 'S', title: 'Stabiliser le business', desc: 'Processus et délégations pour une croissance sereine.' },
  ];

  return (
    <>
      {/* HEADER PAGE */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">À Propos</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez l'essence d'Entrepreneurs Épanouis et notre méthode unique pour les professionnels du bien-être.
          </p>
        </div>
      </section>

      {/* ESSENCE */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">L’Essence d’ENTREPRENEURS ÉPANOUIS</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Nous croyons que les professionnels du mieux-être ont un don précieux, mais que ce don reste souvent inexploité faute de structure business adéquate. 
            Notre mission est de vous aider à vivre pleinement de votre vocation — avec <span className="font-bold text-primary">clarté</span>, <span className="font-bold text-primary">autorité</span>, <span className="font-bold text-primary">structure</span> et <span className="font-bold text-primary">abondance</span>.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
      </Section>

      {/* STORY PLACEHOLDER */}
      <Section background="light">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/5] bg-gray-200 rounded-xl w-full max-w-md mx-auto relative overflow-hidden">
               {/* Placeholder for Founder Image */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                 [Photo Fondateur]
               </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif font-bold mb-6">Mon Histoire</h2>
            <p className="text-gray-600 mb-4">
              [Espace réservé pour l'histoire du fondateur. Racontez ici votre parcours, vos déclics et pourquoi vous avez créé cette structure.]
            </p>
            <p className="text-gray-600">
              C'est de cette expérience personnelle qu'est née la volonté d'accompagner les autres thérapeutes à ne plus choisir entre leur passion et leur sécurité financière.
            </p>
          </div>
        </div>
      </Section>

      {/* METHODE EPANOUIS */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">La Méthode EPANOUIS™</h2>
          <p className="text-gray-600">8 piliers pour une transformation durable</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodSteps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 group-hover:bg-secondary transition-colors">
                {step.letter}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section background="dark" className="text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Pourquoi travailler avec nous ?</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-secondary/20 p-2 rounded-full mr-4 mt-1">
                <Check className="text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Double Expertise</h3>
                <p className="text-gray-300">Nous comprenons à la fois la sensibilité du monde du bien-être et la rigueur des stratégies business.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-secondary/20 p-2 rounded-full mr-4 mt-1">
                <Check className="text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Résultats Concrets</h3>
                <p className="text-gray-300">Nous ne vendons pas du rêve, mais des processus éprouvés pour dépasser vos blocages financiers.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-secondary/20 p-2 rounded-full mr-4 mt-1">
                <Check className="text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Vision Long Terme</h3>
                <p className="text-gray-300">Notre but n'est pas un "coup" marketing, mais la construction d'une carrière pérenne.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="text-center py-20 bg-muted/30">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
          Votre vocation mérite un business à sa hauteur.
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Votre mission mérite un système. Et votre impact mérite une stratégie claire.
        </p>
        <Button href="/diagnostic" size="lg">
          Réserver un Diagnostic Stratégique
        </Button>
      </Section>
    </>
  );
}
