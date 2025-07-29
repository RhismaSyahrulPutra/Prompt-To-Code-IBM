import { useState, useEffect } from 'react';
import { IbmGranite } from '@carbon/icons-react';
import AnimatedPage from '../components/animation/AnimatedPage';
import PromptForm from '../components/CodeGeneratorPage/PromptForm';
import CodeOutput from '../components/CodeGeneratorPage/CodeOutput';

function CodeGeneratorPage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [message, setMessage] = useState('');
  const [codeOutput, setCodeOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [usageCount, setUsageCount] = useState(0);

  useEffect(() => {
    const savedCount = parseInt(localStorage.getItem('usageCount')) || 0;
    setUsageCount(savedCount);
  }, []);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text.trim());
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    if (usageCount >= 5) {
      setCodeOutput('⚠️ Kamu telah mencapai batas maksimal penggunaan (5x).');
      return;
    }

    setLoading(true);
    setCodeOutput('');

    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: message }),
    })
      .then((res) => res.json())
      .then((data) => {
        const rawOutput = data?.output || '⚠️ Tidak ada output dari model.';
        setCodeOutput(rawOutput);
        const newCount = usageCount + 1;
        setUsageCount(newCount);
        localStorage.setItem('usageCount', newCount.toString());
      })
      .catch(() => {
        setCodeOutput('❌ Gagal mengambil respon dari AI.');
      })
      .finally(() => setLoading(false));

    setMessage('');
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50">
        <div className="w-full max-w-3xl space-y-6">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4 mb-6">
            <IbmGranite size={72} />
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center">
              IBM Granite
            </h1>
          </div>
          <h2 className="text-xl text-center text-gray-600 font-semibold">
            Prompt-to-Code Generator
          </h2>

          <PromptForm
            message={message}
            onChange={(e) => setMessage(e.target.value)}
            onSubmit={handleSubmit}
            disabled={loading || usageCount >= 5}
          />

          {usageCount >= 5 && (
            <p className="text-red-600 text-sm text-center">
              Kamu telah menggunakan generator ini sebanyak 5 kali. Silakan
              refresh besok!
            </p>
          )}

          <CodeOutput
            loading={loading}
            codeOutput={codeOutput}
            onCopy={handleCopy}
            copiedIdx={copiedIdx}
          />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default CodeGeneratorPage;
