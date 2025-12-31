export default function PolitiqueConfidentialite() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-serif font-bold mb-8">Politique de Confidentialité</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-4">
          La protection de vos données personnelles est au cœur de nos préoccupations. Cette politique de confidentialité détaille la manière dont Entrepreneurs Épanouis collecte et traite vos données.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">Collecte des données</h2>
        <p className="text-gray-600 mb-4">
          Nous collectons les informations que vous nous fournissez directement lorsque vous utilisez notre Site, notamment lorsque vous remplissez un formulaire de contact, vous inscrivez à notre newsletter ou réservez un diagnostic.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">Utilisation des données</h2>
        <p className="text-gray-600 mb-4">
          Vos données sont utilisées pour :
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Répondre à vos demandes de contact.</li>
          <li>Gérer la relation client.</li>
          <li>Vous envoyer des informations sur nos services (avec votre consentement).</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">Vos droits</h2>
        <p className="text-gray-600 mb-4">
          Vous disposez d'un droit d'accès, de rectification et d'effacement de vos données. Pour exercer ces droits, veuillez nous contacter à contact@entrepreneurs-epanouis.com.
        </p>
      </div>
    </div>
  );
}
