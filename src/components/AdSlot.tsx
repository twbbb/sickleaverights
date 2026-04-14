interface AdSlotProps {
  slot?: string;
  className?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
}

export default function AdSlot({ slot = '', className = '', format = 'auto' }: AdSlotProps) {
  // Placeholder — replace with real AdSense code after approval
  return (
    <div
      className={`bg-gray-100 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-xs ${className}`}
      aria-label="Advertisement"
      data-ad-slot={slot}
      data-ad-format={format}
    >
      <span>Ad</span>
    </div>
  );
}
