'use client';

import { useState } from 'react';
import templates from '@/data/resignation-templates.json';
import { generateLetter, type FormData } from '@/lib/generate-letter';
import LetterPreview from './LetterPreview';

const toneColors: Record<string, string> = {
  professional: 'bg-blue-50 border-blue-200 text-blue-800',
  formal: 'bg-purple-50 border-purple-200 text-purple-800',
  friendly: 'bg-green-50 border-green-200 text-green-800',
  firm: 'bg-red-50 border-red-200 text-red-800',
  positive: 'bg-yellow-50 border-yellow-200 text-yellow-800',
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
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Choose Your Tone</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTemplateSelect(t.id)}
                className={`text-left p-3 rounded-xl border-2 transition-all ${
                  formData.templateId === t.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">{toneIcons[t.tone] || 'DOC'}</span>
                  <span className="font-semibold text-sm text-gray-900">{t.name}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{t.description}</p>
                <span
                  className={`inline-block mt-2 text-xs px-2 py-0.5 rounded border ${toneColors[t.tone] || 'bg-gray-50 border-gray-200 text-gray-600'}`}
                >
                  {t.tone}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Details Form */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Fill In Your Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.yourName ? 'border-red-400 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.yourName && <p className="text-red-500 text-xs mt-1">{errors.yourName}</p>}
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                  Manager&apos;s Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="managerName"
                  value={formData.managerName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.managerName ? 'border-red-400 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.managerName && <p className="text-red-500 text-xs mt-1">{errors.managerName}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.companyName ? 'border-red-400 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Working Day <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="lastWorkingDay"
                  value={formData.lastWorkingDay}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.lastWorkingDay ? 'border-red-400 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.lastWorkingDay && <p className="text-red-500 text-xs mt-1">{errors.lastWorkingDay}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reason (optional)
                <span className="text-gray-400 font-normal ml-1">
                  — used in relevant templates
                </span>
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={2}
                placeholder="e.g., pursuing a new career opportunity, personal reasons..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <button
              onClick={handleGenerate}
              className="w-full bg-blue-700 text-white py-3.5 px-6 rounded-xl font-bold text-base hover:bg-blue-800 transition-colors shadow-sm"
            >
              Generate My Resignation Letter
            </button>
          </div>
        </div>
      </div>

      {/* Preview Panel */}
      <div id="letter-preview">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Your Letter</h2>
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
