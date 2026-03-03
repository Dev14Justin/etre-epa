import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Mail, Calendar, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* HERO CONTACT */}
      <Section background="white" className="pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
            Contactez <span className="text-primary italic">L'Équipe</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Vous avez une vision, nous avons le système pour la concrétiser.
            Discutons ensemble de votre projet d'expansion.
          </p>
        </div>
      </Section>

      {/* CONTACT OPTIONS */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* GOOGLE AGENDA / CALENDAR */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <Calendar size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Appel Stratégique</h2>
              <p className="text-gray-600 mb-8">
                Réservez un créneau de 30 minutes dans mon agenda pour évaluer
                votre éligibilité à nos programmes.
              </p>

              {/* INTEGRATION PLACEHOLDER */}
              <div className="w-full aspect-video bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center mb-8">
                <p className="text-gray-400 italic px-8">
                  Intégration Google Agenda à venir... <br />
                  (En attente du lien d'intégration exact)
                </p>
              </div>

              <Button
                href="#form"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Réserver mon créneau
              </Button>
            </div>

            {/* MESSAGE / EMAIL */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
                <Mail size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Par Email</h2>
              <p className="text-gray-600 mb-8">
                Vous préférez nous écrire ? Envoyez-nous un message et nous vous
                répondrons sous 24h.
              </p>

              <div className="w-full space-y-4 mb-8 text-left">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Mail className="text-primary" size={20} />
                  <span className="font-medium">
                    hello@entrepreneurs-epanouis.com
                  </span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <MessageSquare className="text-primary" size={20} />
                  <span className="font-medium">Support Client</span>
                </div>
              </div>

              <Button
                href="mailto:hello@entrepreneurs-epanouis.com"
                variant="outline"
                size="lg"
                className="w-full"
              >
                Envoyer un email
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* MISSION REAFIRMED */}
      <Section className="text-center py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif font-bold mb-8 text-gray-900">
            Votre vocation mérite un business à sa hauteur.
          </h3>
          <p className="text-xl text-gray-600 italic">
            N'attendez pas d'être prêt. Soyez stratégique.
          </p>
        </div>
      </Section>
    </>
  );
}
