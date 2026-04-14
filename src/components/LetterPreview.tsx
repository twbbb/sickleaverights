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
        <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
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
          {templateName} — Resignation Letter
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
            {copied ? (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Copied!
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                Copy
              </span>
            )}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Download
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
          <strong>Tip:</strong> Review and personalize before sending. This template is a
          starting point — make it your own!
        </p>
      </div>
    </div>
  );
}
