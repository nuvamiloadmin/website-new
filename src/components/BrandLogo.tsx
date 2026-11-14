import React from 'react';
import { BRAND_ASSETS } from '../data/nuvamiloData';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  className = '',
}) => {
  if (variant === 'dark') {
    return (
      <span className={`inline-flex items-center ${className}`}>
        <img
          src={BRAND_ASSETS.logoWhite}
          alt="NUVAMILO logo"
          referrerPolicy="no-referrer"
          className="h-[60px] sm:h-[68px] lg:h-[74px] w-auto object-contain select-none"
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={BRAND_ASSETS.logo}
        alt="NUVAMILO logo"
        referrerPolicy="no-referrer"
        className="h-[44px] sm:h-[52px] lg:h-[58px] w-auto object-contain select-none"
      />
    </span>
  );
};
