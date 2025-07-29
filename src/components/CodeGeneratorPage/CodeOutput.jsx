import MarkdownRenderer from './MarkdownRenderer';
import { Hourglass } from '@carbon/icons-react';

function CodeOutput({ loading, codeOutput, onCopy, copiedIdx }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-8 border border-gray-200 min-h-[100px] space-y-4">
      {loading ? (
        <div className="flex items-center justify-center gap-2 py-4">
          <Hourglass size={16} className="animate pulse" />
          <p className="text-gray-600 text-sm animate-pulse">
            Sedang berusaha menjawab...
          </p>
        </div>
      ) : codeOutput ? (
        <MarkdownRenderer
          text={codeOutput}
          onCopy={onCopy}
          copiedIdx={copiedIdx}
        />
      ) : (
        <p className="text-gray-400 text-center">Belum ada output kode.</p>
      )}
    </div>
  );
}

export default CodeOutput;
