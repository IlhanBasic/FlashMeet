import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function EventsPage() {
  // Sample data for demonstration
  const eventsInfo = {
    totalEvents: 42,
    upcomingEvents: 28,
    popularCategories: ["Sport", "Gaming", "Coworking", "Nightlife"],
    cities: ["Belgrade", "Novi Sad", "Niš", "Kragujevac"],
    averageDuration: "3.5 hours",
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-[url('https://images.unsplash.com/photo-1453090927415-5f45085b65c0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat py-12 px-4 text-white h-96 flex flex-col justify-center items-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">FlashMeet</h1>
            <p className="text-xl opacity-90">
              Brzo organizujte događaje i okupljanja u vašem gradu
            </p>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-4xl mx-auto py-8 px-4">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-dark mb-6">
              O FlashMeet platformi
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                FlashMeet je platforma gde korisnici mogu brzo organizovati
                događaje i okupljanja u svom gradu – bilo da se radi o druženju,
                sportskim aktivnostima, gejming sesijama, coworking-u ili
                izlascima.
              </p>
              <p className="text-gray-700 font-medium">
                Ključna stvar – događaji se automatski brišu nakon što završe,
                čime se izbegava gomilanje neaktivnih objava.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-dark mb-6">
              Statistika događaja
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Trenutno stanje
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Ukupno događaja:</span>
                    <span className="font-medium">
                      {eventsInfo.totalEvents}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Predstojeći događaji:</span>
                    <span className="font-medium">
                      {eventsInfo.upcomingEvents}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Prosečno trajanje:</span>
                    <span className="font-medium">
                      {eventsInfo.averageDuration}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Popularne kategorije
                </h3>
                <div className="flex flex-wrap gap-2">
                  {eventsInfo.popularCategories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-primary mt-6 mb-4">
                  Aktivni gradovi
                </h3>
                <div className="flex flex-wrap gap-2">
                  {eventsInfo.cities.map((city, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-secondary px-3 py-1 rounded-full text-sm"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-dark mb-6">
              Kako funkcioniše
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Kreirajte događaj</h3>
                    <p className="text-gray-600">
                      Brzo i jednostavno kreirajte događaj sa osnovnim
                      informacijama
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Povežite se sa učesnicima
                    </h3>
                    <p className="text-gray-600">
                      Ljudi u vašoj blizini mogu videti vaš događaj i prijaviti
                      se
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Uživajte u događaju
                    </h3>
                    <p className="text-gray-600">
                      Okupite se i uživajte u druženju
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Automatsko brisanje
                    </h3>
                    <p className="text-gray-600">
                      Nakon završetka, događaj se automatski briše iz sistema
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-2">
              © 2025 FlashMeet - Brza organizacija događaja
            </p>
            <p className="text-gray-400 text-sm">
              Povežite se sa ljudima u vašem gradu kroz spontane događaje
            </p>
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
}
