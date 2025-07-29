import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CopyableCodeBlock({ lang, content, onCopy, isCopied }) {
  return (
    <div className="relative mb-6 bg-[#282c34] rounded-lg overflow-hidden">
      <button
        onClick={onCopy}
        className="absolute right-2 top-2 z-10 text-xs bg-gray-800 text-white hover:bg-gray-600 px-2 py-1 rounded"
      >
        {isCopied ? '✅ Copied' : '📋 Copy'}
      </button>
      <SyntaxHighlighter
        language={lang}
        style={oneDark}
        customStyle={{
          margin: 0,
          paddingTop: '2.5rem',
          paddingBottom: '1rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          fontSize: '0.85rem',
        }}
        wrapLines
        wrapLongLines
        showLineNumbers
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}

export default CopyableCodeBlock;
