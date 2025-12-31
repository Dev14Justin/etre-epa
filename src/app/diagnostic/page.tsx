import Section from '@/components/ui/Section';
import { Calendar, CheckCircle, Clock, Video } from 'lucide-react';

export default function Diagnostic() {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Diagnostic Stratégique Offert</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Faisons le point sur votre activité et identifions les leviers pour atteindre vos objectifs.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Context & Expectations */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900">
              Ce que nous allons voir ensemble
            </h2>
            <p className="text-gray-600 mb-8">
              Cet appel n'est pas un appel de vente agressif. C'est un moment d'échange pour comprendre votre situation actuelle et voir si notre méthode peut vous aider.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Durée : 45 minutes</h3>
                  <p className="text-sm text-gray-500">Prévoyez ce temps au calme, sans distraction.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Video className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Format : Visio-conférence</h3>
                  <p className="text-sm text-gray-500">Le lien Zoom vous sera envoyé par email après réservation.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Objectif : Plan d'action</h3>
                  <p className="text-sm text-gray-500">Vous repartirez avec une vision claire des prochaines étapes.</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-xl border border-muted">
              <h4 className="font-bold mb-2 text-sm uppercase tracking-wide text-gray-500">Pour qui est cet appel ?</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Coachs, thérapeutes ou consultants.</li>
                <li>Vous avez déjà une expertise validée.</li>
                <li>Vous êtes prêt à investir en vous et votre business.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Calendly Embed Placeholder */}
          <div className="bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden min-h-[600px] flex items-center justify-center relative">
            
            {/* 
              NOTE: In a real deployment, replace this div with the Calendly iframe or component.
              Example: <InlineWidget url="https://calendly.com/your-link" />
            */}
            <div className="text-center p-8">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Réservez votre créneau</h3>
              <p className="text-gray-500 mb-8">
                Sélectionnez une date et une heure dans le calendrier ci-dessous.
              </p>
              
              {/* Simulation of a calendar interface for the visual */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-w-xs mx-auto text-sm text-gray-400">
                [Intégration Calendly ou Formulaire ici]
                <br />
                <br />
                Veuillez contacter l'administrateur pour configurer le lien de prise de rendez-vous.
              </div>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
}
