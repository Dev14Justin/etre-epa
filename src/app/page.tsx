import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import TestimonialCard from '@/components/ui/TestimonialCard';
import FAQItem from '@/components/ui/FAQItem';
import { ArrowRight, CheckCircle2, Heart, Lightbulb, Users } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative bg-gradient-to-b from-white to-muted/50 pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Stratégie d'acquisition alignée pour <span className="text-primary italic">professionnels du mieux-être</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Développez une approche d'acquisition de clients qui respecte vos valeurs, renforce votre clarté professionnelle et amplifie l'impact authentique de votre métier.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/diagnostic" size="lg">
                Évaluation Gratuite
              </Button>
              <Button href="#approche" variant="outline" size="lg">
                Découvrir l'approche
              </Button>
            </div>
            
            {/* Newsletter Mini-form */}
            <div className="mt-16 pt-8 border-t border-gray-200 max-w-md mx-auto">
              <p className="text-sm text-gray-500 mb-3 font-medium">Recevez gratuitement des astuces pour plus d’impact</p>
              <form className="flex gap-2" action="#">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                  aria-label="Email pour newsletter"
                />
                <Button type="submit" size="sm" variant="secondary">S'inscrire</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: APPROCHE */}
      <Section id="approche" background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900">
              Une approche qui se fond dans votre univers
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Le marketing traditionnel ne fonctionne pas toujours pour les métiers du cœur. Nous croyons en une méthode différente.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Compréhension profonde de votre mission de vie",
                "Alignement authentique entre qui vous êtes et ce que vous vendez",
                "Accompagnement sur-mesure, loin des recettes toutes faites"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Heart className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/a-propos" variant="outline">
              En savoir plus sur nous
            </Button>
          </div>
          <div className="relative">
             {/* Placeholder for an image - abstract shape or professional photo */}
             <div className="aspect-square rounded-2xl bg-muted overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-primary font-serif italic text-2xl">Authenticité & Impact</span>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3: SERVICES */}
      <Section background="light" id="services">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Services d'accompagnement stratégique</h2>
          <p className="text-gray-600">
            De la clarification de votre offre à l'automatisation de votre acquisition, nous structurons votre croissance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Lightbulb className="w-10 h-10 text-primary mb-4" />,
              title: "Clarté & Alignement",
              desc: "Définissez une identité de marque forte et une offre qui résonne avec votre client d'âme."
            },
            {
              icon: <Users className="w-10 h-10 text-primary mb-4" />,
              title: "Stratégie d'Acquisition",
              desc: "Mettez en place un système prévisible pour attirer des prospects qualifiés sans vous épuiser."
            },
            {
              icon: <CheckCircle2 className="w-10 h-10 text-primary mb-4" />,
              title: "Amplification d'Impact",
              desc: "Scalez votre activité pour toucher plus de vies tout en préservant votre énergie."
            }
          ].map((service, idx) => (
            <Card key={idx} className="h-full">
              <div className="flex flex-col h-full">
                <div>{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/diagnostic" size="lg">
            Réserver un Diagnostic Stratégique <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* SECTION 4: CROISSANCE ALIGNÉE */}
      <Section background="primary" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">
            Une approche consciente pour une croissance alignée
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-white/90">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-white">Valeurs</h3>
              <p>Croissance respectueuse de votre rythme et de votre éthique.</p>
            </div>
            <div className="p-4 border-l border-white/20">
              <h3 className="text-xl font-bold mb-2 text-white">Attraction</h3>
              <p>Ne chassez plus les clients, attirez ceux qui vous cherchent.</p>
            </div>
            <div className="p-4 border-l border-white/20">
              <h3 className="text-xl font-bold mb-2 text-white">Durabilité</h3>
              <p>Construisez un business solide qui sert votre vie, pas l'inverse.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5: TÉMOIGNAGES */}
      <Section id="temoignages">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          Ils ont transformé leur pratique
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard 
            author="Thomas Martin" 
            role="Coach de vie"
            content="Avant l'accompagnement, je m'éparpillais. Aujourd'hui, mon offre est claire et j'ai doublé mon chiffre d'affaires en restant aligné avec qui je suis."
          />
          <TestimonialCard 
            author="Sophie Leroy" 
            role="Praticienne Reiki"
            content="J'avais peur du marketing. Entrepreneurs Épanouis m'a montré qu'on pouvait vendre avec bienveillance. Mon agenda est complet pour les 3 prochains mois."
          />
          <TestimonialCard 
            author="Marie Dubois" 
            role="Naturopathe"
            content="La méthode est structurée et profonde. Ce n'est pas juste du business, c'est un vrai travail sur soi pour assumer sa posture d'experte."
          />
        </div>
      </Section>

      {/* SECTION 6: FAQ */}
      <Section background="light" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Questions Fréquentes
          </h2>
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
            <FAQItem 
              question="Comment fonctionne l'approche ?" 
              answer="Notre approche combine coaching stratégique et implémentation technique. Nous commençons par aligner votre offre sur votre zone de génie, puis nous construisons ensemble le système d'acquisition adapté."
            />
            <FAQItem 
              question="Quelle est la durée de l'accompagnement ?" 
              answer="Nos programmes varient généralement entre 3 et 6 mois, le temps nécessaire pour opérer une transformation profonde et stabiliser vos résultats."
            />
            <FAQItem 
              question="Quels résultats puis-je espérer ?" 
              answer="Nos clients voient généralement une augmentation significative de leur clarté, de leur confiance et de leurs revenus. L'objectif est de bâtir un flux régulier de clients qualifiés."
            />
            <FAQItem 
              question="À quels types de métiers cela s'adresse-t-il ?" 
              answer="Nous sommes spécialisés dans l'accompagnement des métiers du soin, du coaching, de la thérapie et du bien-être (naturopathes, sophrologues, coachs, profs de yoga, etc.)."
            />
            <FAQItem 
              question="Comment savoir si c'est fait pour moi ?" 
              answer="Si vous êtes expert dans votre domaine mais que la partie 'business' vous pèse ou ne décolle pas, le Diagnostic Stratégique nous permettra de valider si nous sommes le bon partenaire pour vous."
            />
          </div>
        </div>
      </Section>

      {/* SECTION 7: MISSION */}
      <Section className="text-center py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Notre Raison d'être</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">
            Ce pour quoi ENTREPRENEURS ÉPANOUIS existe
          </h3>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Aider les coachs, consultants et experts francophones à développer un mindset puissant, à bâtir un business premium rentable et à devenir des leaders d’impact.
          </p>
          <Button href="/diagnostic" size="lg">
            Réserver un Diagnostic Stratégique
          </Button>
        </div>
      </Section>
    </>
  );
}
