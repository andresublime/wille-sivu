import Hero from '@/components/Hero';
import About from '@/components/About';
import HeroVideo from '@/components/HeroVideo';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="my-6 md:my-10 lg:my-12">
        <About />
      </div>
      <HeroVideo
        videoId="-ROSTpb5N6w"
        title="Esittelyvideo"
      />
    </main>
  );
}
