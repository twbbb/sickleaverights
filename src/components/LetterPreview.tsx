'use client';

import { useState } from 'react';

interface LetterPreviewProps {
  letter: string;
  hasGenerated: boolean;
  templateName: string;
  companyName?: string;
}

export default function LetterPreview({ letter, hasGenerated, templateName, companyName }: LetterPreviewProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!letter) return;
    try {
      await navigator.clipboard.writeText(letter);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = letter;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  function handleDownload() {
    if (!letter) return;
    const blob = new Blob([letter], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const year = new Date().getFullYear();
    const company = companyName ? companyName.toLowerCase().replace(/\s+/g, '-') : 'company';
    a.download = `resignation-letter-${company}-${year}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!hasGenerated) {
    return (
      <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center bg-gray-50 min-h-[400px] flex flex-col items-center justify-center">
        <span className="text-5xl mb-4">📄</span>
        <h3 className="text-gray-500 font-semibold text-lg mb-2">Your letter will appear here</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Fill in your details and click &ldquo;Generate My Resignation Letter&rdquo; to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">
          📝 {templateName} — Resignation Letter
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              copied
                ? 'bg-green-100 text-green-700 border border-green-300'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {copied ? '✅ Copied!' : '📋 Copy'}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            📄 Download
          </button>
        </div>
      </div>

      {/* Letter Content */}
      <div className="p-6 bg-white">
        <pre className="font-sans text-gray-800 text-sm leading-relaxed whitespace-pre-wrap break-words">
          {letter}
        </pre>
      </div>

      {/* Footer hint */}
      <div className="bg-blue-50 border-t border-blue-100 px-4 py-3">
        <p className="text-xs text-blue-700 text-center">
          💡 <strong>Tip:</strong> Review and personalize before sending. This template is a
          starting point — make it your own!
        </p>
      </div>
    </div>
  );
}
