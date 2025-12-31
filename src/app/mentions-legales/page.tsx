export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-serif font-bold mb-8">Mentions Légales</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-4">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Entrepreneurs Épanouis l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">Édition du site</h2>
        <p className="text-gray-600 mb-4">
          Le présent site, accessible à l’URL www.entrepreneurs-epanouis.com (le « Site »), est édité par :
          <br /><br />
          [Nom de la Société / Entrepreneur], résidant au [Adresse], de nationalité Française (France), inscrit au R.C.S. de [Ville] sous le numéro [Numéro RCS].
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Hébergement</h2>
        <p className="text-gray-600 mb-4">
          Le Site est hébergé par la société [Nom de l'hébergeur], situé [Adresse de l'hébergeur], (contact téléphonique ou email : [Contact]).
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Directeur de publication</h2>
        <p className="text-gray-600 mb-4">
          Le Directeur de la publication du Site est [Nom du directeur].
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Nous contacter</h2>
        <p className="text-gray-600 mb-4">
          Par téléphone : [Numéro]<br />
          Par email : contact@entrepreneurs-epanouis.com<br />
          Par courrier : [Adresse]
        </p>
      </div>
    </div>
  );
}
