import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

interface MediaFrameProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: '4/3' | '16/9' | '1/1' | 'auto';
  enableHoverZoom?: boolean;
}

export const MediaFrame: React.FC<MediaFrameProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectRatio = '4/3',
  enableHoverZoom = true,
}) => {
  const [hasError, setHasError] = useState(false);

  const ratioClass =
    aspectRatio === '16/9'
      ? 'aspect-video'
      : aspectRatio === '4/3'
        ? 'aspect-[4/3]'
        : aspectRatio === '1/1'
          ? 'aspect-square'
          : '';

  return (
    <div
      className={`group relative overflow-hidden bg-transparent ${ratioClass} ${className}`}
    >
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className={`h-full w-full object-cover ${
              enableHoverZoom
                ? 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]'
                : ''
            } ${imgClassName}`}
          />
          {enableHoverZoom && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#071C44]/0 via-white/0 to-white/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F5F8FC] via-white to-[#EBF3FF] p-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071C44]/5 text-[#075BE8]">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <p className="max-w-xs text-sm font-medium text-[#071C44]/70">{alt}</p>
        </div>
      )}
    </div>
  );
};
