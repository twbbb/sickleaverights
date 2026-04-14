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
      <div className="border-2 border-dashed border-ink/10 rounded-2xl p-10 text-center bg-cream-dark/50 min-h-[400px] flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-ink/5 rounded-2xl flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="font-display text-lg text-ink mb-2">Your letter will appear here</h3>
        <p className="text-slate text-sm max-w-xs leading-relaxed">
          Fill in your details and click &ldquo;Generate My Resignation Letter&rdquo; to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-ink/10 rounded-2xl overflow-hidden shadow-card animate-scale-in">
      {/* Header */}
      <div className="bg-cream-dark border-b border-ink/5 px-5 py-3 flex items-center justify-between">
        <span className="text-sm font-medium text-slate">
          {templateName} — Resignation Letter
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              copied
                ? 'bg-sage/10 text-sage-dark border border-sage/20'
                : 'bg-paper border border-ink/10 text-ink hover:border-ink/20 hover:bg-paper'
            }`}
          >
            {copied ? (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium bg-paper border border-ink/10 text-ink hover:border-ink/20 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Download
          </button>
        </div>
      </div>

      {/* Letter Content */}
      <div className="p-8 bg-paper">
        <pre className="font-body text-ink text-sm leading-relaxed whitespace-pre-wrap break-words">
          {letter}
        </pre>
      </div>

      {/* Footer hint */}
      <div className="bg-gold/5 border-t border-gold/10 px-5 py-3">
        <p className="text-xs text-gold-muted text-center">
          <strong>Tip:</strong> Review and personalize before sending. This template is a
          starting point — make it your own!
        </p>
      </div>
    </div>
  );
}
