import React from 'react';

interface AdrovixLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'nav';
  showSubmark?: boolean;
}

export const AdrovixLogo: React.FC<AdrovixLogoProps> = ({
  className = '',
  size = 'nav',
  showSubmark = false,
}) => {
  // Height classes adhering to exact specifications:
  // Desktop: ~30-34px | Mobile: ~24-28px
  const heightClass = {
    nav: 'h-[26px] sm:h-[28px] md:h-[32px] lg:h-[34px]',
    sm: 'h-[24px] sm:h-[26px]',
    md: 'h-[30px] sm:h-[34px]',
    lg: 'h-[40px] sm:h-[48px]',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official ADROVIX Transparent Chrome Neon Wordmark */}
      <img
        src="/adrovix-logo-transparent.svg"
        alt="ADROVIX"
        className={`${heightClass} w-auto max-w-none object-contain select-none`}
        style={{
          aspectRatio: '690 / 120',
        }}
        referrerPolicy="no-referrer"
        loading="eager"
        decoding="async"
      />
      {showSubmark && (
        <span className="text-[10px] font-mono tracking-wider text-cyan-400 uppercase hidden sm:inline-block border-l border-white/15 pl-2.5 py-0.5">
          Performance
        </span>
      )}
    </div>
  );
};
