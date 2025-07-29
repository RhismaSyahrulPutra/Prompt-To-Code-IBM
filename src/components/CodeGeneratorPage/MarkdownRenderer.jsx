import CopyableCodeBlock from './CopyableCodeBlock';

function MarkdownRenderer({ text, onCopy, copiedIdx }) {
  const regex = /```(\w+)?\n([\s\S]*?)```/g;
  const blocks = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [, lang = 'javascript', code] = match;
    const indexBefore = match.index;
    const textBefore = text.slice(lastIndex, indexBefore);
    if (textBefore) blocks.push({ type: 'text', content: textBefore });
    blocks.push({ type: 'code', lang, content: code });
    lastIndex = regex.lastIndex;
  }

  const remainingText = text.slice(lastIndex);
  if (remainingText) blocks.push({ type: 'text', content: remainingText });

  return blocks.map((block, idx) => {
    if (block.type === 'code') {
      return (
        <CopyableCodeBlock
          key={idx}
          lang={block.lang}
          content={block.content}
          isCopied={copiedIdx === idx}
          onCopy={() => onCopy(block.content, idx)}
        />
      );
    }

    return block.content.split('\n\n').map((paragraph, pIdx) => (
      <p
        key={`${idx}-text-${pIdx}`}
        className="text-gray-800 text-sm leading-relaxed whitespace-pre-line mb-4"
      >
        {paragraph.trim()}
      </p>
    ));
  });
}

export default MarkdownRenderer;
