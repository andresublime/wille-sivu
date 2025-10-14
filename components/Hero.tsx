'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row md:h-[750px]">
      {/* Top/Left side - Forest Image */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-full">
        <Image
          src="/images/hero-forest.jpg"
          alt="Forest background"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 70%' }}
          priority
        />
      </div>

      {/* Bottom/Right side - Content */}
      <div className="w-full md:w-1/2 bg-[#f5f1ed] flex items-center justify-center px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-16">
        <div className="max-w-md text-center">
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-gray-900 mb-6 md:mb-10 leading-tight">
            Psykologipalvelu<br />Ville Huuskonen
          </h1>
          <p className="subtitle text-gray-700 mb-6 md:mb-12 leading-relaxed">
            Psykologin etävastaanottoa sovitusti, jätä<br />
            yhteydenottopyyntö
          </p>
          <a
            href="https://with.heltti.fi/terapeutit/ville-huuskonen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#c4b5a0] hover:bg-[#b5a691] text-gray-800 px-8 py-3 text-base md:text-lg transition-colors duration-200 font-semibold"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Vastaanotto
          </a>
        </div>
      </div>
    </section>
  );
}
