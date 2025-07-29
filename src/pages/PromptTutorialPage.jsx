import AnimatedPage from '../components/animation/AnimatedPage';
import StepsPrompt from '../components/Tutorial/StepsPrompt';
import ExamplePrompt from '../components/Tutorial/ExamplePrompt';

function PromptTutorialPage() {
  return (
    <AnimatedPage>
      <section className="min-h-screen px-6 py-24 flex flex-col items-center bg-gray-50">
        {/* Header */}
        <header className="max-w-2xl text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Tutorial Membuat Prompt yang Efektif
          </h1>
          <p className="text-gray-600 text-md">
            Ikuti langkah-langkah berikut untuk membuat prompt AI yang jelas,
            spesifik, dan menghasilkan respons terbaik.
          </p>
        </header>

        {/* Langkah-langkah */}
        <StepsPrompt />

        {/* Contoh Prompt */}
        <ExamplePrompt />
      </section>
    </AnimatedPage>
  );
}

export default PromptTutorialPage;
