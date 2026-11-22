import React from 'react';
import { Phone, Mail, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export const TopAnnouncementBar: React.FC = () => {
  return (
    <div className="relative z-40 bg-[#071D49] text-white/85 text-[11px] font-medium border-b border-white/8 py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
        {/* Left message */}
        <div className="flex items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#20E78A]/20 text-[#20E78A]">
            <Sparkles className="h-2.5 w-2.5" />
          </span>
          <span className="font-semibold text-white tracking-wide">
            Save More With Nuvamilo Daily Grocery Deals
          </span>
          <span className="hidden md:inline-block text-white/40">|</span>
          <span className="hidden md:inline-flex items-center gap-1 text-[#20E78A] font-semibold">
            <ShieldCheck className="h-3 w-3" />
            100% Quality Guaranteed
          </span>
        </div>

        {/* Right contacts & links */}
        <div className="flex items-center gap-4 text-white/70">
          <a
            href="tel:+919876543210"
            className="hidden sm:flex items-center gap-1.5 hover:text-[#00C8F8] transition-colors"
          >
            <Phone className="h-3 w-3 text-[#00C8F8]" />
            <span>+91 98765 43210</span>
          </a>

          <a
            href="mailto:support@nuvamilo.in"
            className="flex items-center gap-1.5 hover:text-[#00C8F8] transition-colors"
          >
            <Mail className="h-3 w-3 text-[#00C8F8]" />
            <span>support@nuvamilo.in</span>
          </a>

          <span className="text-white/20">|</span>

          <span className="hidden lg:flex items-center gap-1 text-white/80">
            <MapPin className="h-3 w-3 text-[#20E78A]" />
            <span>Deliver to: <strong>Ahmedabad 380015</strong></span>
          </span>
        </div>
      </div>
    </div>
  );
};
