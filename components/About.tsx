'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white">
      {/* Mobile layout: header, image, text stacked vertically */}
      <div className="md:hidden">
        {/* Header section with dark background */}
        <div className="bg-[#5a6a72] text-white px-6 py-6 text-left">
          <h2 className="text-3xl font-serif !mb-0 !pb-0 leading-tight">
            Tutustu Willeen
          </h2>
          <p className="subtitle !mb-0">Psykologi</p>
        </div>

        {/* Portrait image */}
        <div className="relative h-[600px] w-full">
          <Image
            src="/images/Ville_updated.png"
            alt="Ville Huuskonen - Psykologi"
            fill
            className="object-cover"
            style={{ objectPosition: 'center top' }}
          />
        </div>

        {/* Body text section with light background */}
        <div className="bg-[#e8e4df] text-gray-700 px-6 py-8 text-left">
          <div className="space-y-6 leading-relaxed text-xl">
            <p>
              Olen psykologi Ville Huuskonen ja tarjoan psykologin
              vastaanottoa Espoon Tapiolassa ja etävastaanottona. Ensimmäiseltä
              ammatiltani olen teologian maisteri ja pappi.
            </p>
            <p>
              Sydäntäni lähellä ovat elämänvaihekriisit, työelämän
              kriisit, neuroepätyypillisyys, henkiseen kasvuun
              liittyvät pohdinnat ja hengelliset murrokset sekä
              meditaatio. Vastaanotolla voimme keskustella
              luottamuksellisesti kaikenlaisista, myös arkaluontoisista asioista, kuten päihteiden käytöstä.
            </p>
            <p>
              Löydät vastaanottoni tiedot{' '}
              <a
                href="https://with.heltti.fi/terapeutit/ville-huuskonen"
                className="underline text-[#5a4a3a] hover:text-[#3a2a1a] transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                täältä
              </a>
              .
            </p>
            <p>
              Voit tutustua myös ohjattuihin meditaatioihini{' '}
              <a
                href="https://www.youtube.com/@willehuuskonen"
                className="underline text-[#5a4a3a] hover:text-[#3a2a1a] transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube-kanavallani
              </a>
              .
            </p>
            <a
              href="https://with.heltti.fi/terapeutit/ville-huuskonen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c4b5a0] hover:bg-[#b5a691] text-gray-800 px-8 py-3 mt-4 text-base md:text-lg transition-colors duration-200 font-semibold"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Vastaanotto
            </a>
          </div>
        </div>
      </div>

      {/* Desktop layout: text left, image right side by side */}
      <div className="hidden md:grid md:grid-cols-2 gap-0">
        {/* Left column - Text content */}
        <div className="flex flex-col">
          {/* Header section with dark background */}
          <div className="bg-[#5a6a72] text-white px-10 py-12 lg:px-12 lg:py-16 text-left">
            <h2 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight">
              Tutustu Willeen
            </h2>
            <p className="subtitle">Psykologi</p>
          </div>

          {/* Body text section with light background */}
          <div className="bg-[#e8e4df] text-gray-700 px-10 py-12 lg:px-12 lg:py-16 flex-grow text-left">
            <div className="space-y-8 leading-relaxed text-xl">
              <p>
                Olen psykologi Ville Huuskonen ja tarjoan psykologin
                vastaanottoa Espoon Tapiolassa ja etävastaanottona. Ensimmäiseltä
                ammatiltani olen teologian maisteri ja pappi.
              </p>
              <p>
                Sydäntäni lähellä ovat elämänvaihekriisit, työelämän
                kriisit, neuroepätyypillisyys, henkiseen kasvuun
                liittyvät pohdinnat ja hengelliset murrokset sekä
                meditaatio. Vastaanotolla voimme keskustella
                luottamuksellisesti kaikenlaisista, myös arkaluontoisista asioista, kuten päihteiden käytöstä.
              </p>
              <p>
                Löydät vastaanottoni tiedot{' '}
                <a
                  href="https://with.heltti.fi/terapeutit/ville-huuskonen"
                  className="underline text-[#5a4a3a] hover:text-[#3a2a1a] transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  täältä
                </a>
                .
              </p>
              <p>
                Voit tutustua myös ohjattuihin meditaatioihini{' '}
                <a
                  href="https://www.youtube.com/@willehuuskonen"
                  className="underline text-[#5a4a3a] hover:text-[#3a2a1a] transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube-kanavallani
                </a>
                .
              </p>
              <a
                href="https://with.heltti.fi/terapeutit/ville-huuskonen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c4b5a0] hover:bg-[#b5a691] text-gray-800 px-8 py-3 mt-6 text-base md:text-lg transition-colors duration-200 font-semibold"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Vastaanotto
              </a>
            </div>
          </div>
        </div>

        {/* Right column - Image */}
        <div className="relative h-full min-h-[800px] flex items-center justify-center p-8" style={{ backgroundColor: 'rgb(232, 228, 223)' }}>
          <div className="relative w-full h-full">
            <Image
              src="/images/Ville_updated.png"
              alt="Ville Huuskonen - Psykologi"
              fill
              className="object-contain"
              style={{ objectPosition: 'center center' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
