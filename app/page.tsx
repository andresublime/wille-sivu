import Hero from '@/components/Hero';
import About from '@/components/About';
import ContactHeltti from '@/components/ContactHeltti';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="my-6 md:my-10 lg:my-12">
        <About />
      </div>
    </main>
  );
}
