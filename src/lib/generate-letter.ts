export interface ResignationTemplate {
  id: string;
  name: string;
  description: string;
  tone: string;
  template: string;
}

export interface FormData {
  yourName: string;
  managerName: string;
  companyName: string;
  lastWorkingDay: string;
  reason: string;
  templateId: string;
}

export function generateLetter(formData: FormData, template: ResignationTemplate): string {
  let letter = template.template;

  const variables: Record<string, string> = {
    yourName: formData.yourName || '[Your Name]',
    managerName: formData.managerName || '[Manager Name]',
    companyName: formData.companyName || '[Company Name]',
    lastWorkingDay: formData.lastWorkingDay
      ? formatDate(formData.lastWorkingDay)
      : '[Last Working Day]',
    reason: formData.reason || 'personal reasons',
  };

  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
    letter = letter.replace(regex, value);
  }

  return letter;
}

function formatDate(dateString: string): string {
  if (!dateString) return '[Last Working Day]';
  try {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}
