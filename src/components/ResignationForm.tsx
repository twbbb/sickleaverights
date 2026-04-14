'use client';

import { useState } from 'react';
import templates from '@/data/resignation-templates.json';
import { generateLetter, type FormData } from '@/lib/generate-letter';
import LetterPreview from './LetterPreview';

const toneColors: Record<string, string> = {
  professional: 'bg-ink/5 border-ink/10 text-ink',
  formal: 'bg-sage/10 border-sage/20 text-sage-dark',
  friendly: 'bg-gold/10 border-gold/20 text-gold-muted',
  firm: 'bg-coral/10 border-coral/20 text-coral',
  positive: 'bg-sage/10 border-sage-light text-sage-dark',
};

const toneIcons: Record<string, string> = {
  professional: 'PRO',
  formal: 'FML',
  friendly: 'FRD',
  firm: 'FRM',
  positive: 'POS',
};

export default function ResignationForm() {
  const [formData, setFormData] = useState<FormData>({
    yourName: '',
    managerName: '',
    companyName: '',
    lastWorkingDay: '',
    reason: '',
    templateId: 'two-week-notice',
  });

  const [generatedLetter, setGeneratedLetter] = useState<string>('');
  const [hasGenerated, setHasGenerated] = useState(false);

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const selectedTemplate = templates.find((t) => t.id === formData.templateId) || templates[0];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error on change
    if (errors[e.target.name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  }

  function handleTemplateSelect(id: string) {
    setFormData((prev) => ({ ...prev, templateId: id }));
    setHasGenerated(false);
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.yourName.trim()) newErrors.yourName = 'Your name is required';
    if (!formData.managerName.trim()) newErrors.managerName = "Manager's name is required";
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.lastWorkingDay) newErrors.lastWorkingDay = 'Last working day is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleGenerate() {
    if (!validate()) return;
    const template = templates.find((t) => t.id === formData.templateId) || templates[0];
    const letter = generateLetter(formData, template);
    setGeneratedLetter(letter);
    setHasGenerated(true);

    // Scroll to preview on mobile
    setTimeout(() => {
      document.getElementById('letter-preview')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Panel */}
      <div>
        {/* Template Selector */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center text-gold font-display text-sm">1</span>
            <h2 className="font-display text-lg text-ink">Choose Your Tone</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTemplateSelect(t.id)}
                className={`text-left p-4 rounded-xl border-2 transition-all ${
                  formData.templateId === t.id
                    ? 'border-gold bg-gold/5 shadow-sm'
                    : 'border-ink/5 hover:border-ink/15 bg-paper'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                    formData.templateId === t.id ? 'bg-gold/20 text-gold-muted' : 'bg-ink/5 text-slate'
                  }`}>
                    {toneIcons[t.tone] || 'DOC'}
                  </span>
                  <span className="font-semibold text-sm text-ink">{t.name}</span>
                </div>
                <p className="text-xs text-slate leading-relaxed">{t.description}</p>
                <span
                  className={`inline-block mt-2 text-xs px-2 py-0.5 rounded border ${toneColors[t.tone] || 'bg-ink/5 border-ink/10 text-slate'}`}
                >
                  {t.tone}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Details Form */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center text-gold font-display text-sm">2</span>
            <h2 className="font-display text-lg text-ink">Fill In Your Details</h2>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">
                  Your Name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className={`w-full border rounded-xl px-4 py-3 text-sm bg-paper focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all ${
                    errors.yourName ? 'border-coral bg-coral/5' : 'border-ink/10'
                  }`}
                />
                {errors.yourName && <p className="text-coral text-xs mt-1">{errors.yourName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">
                  Manager&apos;s Name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  name="managerName"
                  value={formData.managerName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full border rounded-xl px-4 py-3 text-sm bg-paper focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all ${
                    errors.managerName ? 'border-coral bg-coral/5' : 'border-ink/10'
                  }`}
                />
                {errors.managerName && <p className="text-coral text-xs mt-1">{errors.managerName}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">
                  Company Name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className={`w-full border rounded-xl px-4 py-3 text-sm bg-paper focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all ${
                    errors.companyName ? 'border-coral bg-coral/5' : 'border-ink/10'
                  }`}
                />
                {errors.companyName && <p className="text-coral text-xs mt-1">{errors.companyName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">
                  Last Working Day <span className="text-coral">*</span>
                </label>
                <input
                  type="date"
                  name="lastWorkingDay"
                  value={formData.lastWorkingDay}
                  onChange={handleChange}
                  className={`w-full border rounded-xl px-4 py-3 text-sm bg-paper focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all ${
                    errors.lastWorkingDay ? 'border-coral bg-coral/5' : 'border-ink/10'
                  }`}
                />
                {errors.lastWorkingDay && <p className="text-coral text-xs mt-1">{errors.lastWorkingDay}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">
                Reason
                <span className="text-slate font-normal ml-1">
                  (optional — used in relevant templates)
                </span>
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={2}
                placeholder="e.g., pursuing a new career opportunity, personal reasons..."
                className="w-full border border-ink/10 rounded-xl px-4 py-3 text-sm bg-paper focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none transition-all"
              />
            </div>

            <button
              onClick={handleGenerate}
              className="group w-full bg-ink text-cream py-4 px-6 rounded-xl font-bold text-base hover:bg-ink-soft transition-all shadow-card flex items-center justify-center gap-2"
            >
              Generate My Resignation Letter
              <svg className="w-5 h-5 text-gold transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Preview Panel */}
      <div id="letter-preview">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center text-gold font-display text-sm">3</span>
          <h2 className="font-display text-lg text-ink">Your Letter</h2>
        </div>
        <LetterPreview
          letter={generatedLetter}
          hasGenerated={hasGenerated}
          templateName={selectedTemplate.name}
          companyName={formData.companyName}
        />
      </div>
    </div>
  );
}
