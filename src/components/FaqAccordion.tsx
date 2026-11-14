import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FaqItem } from '../data/nuvamiloData';
import { EASE_PREMIUM } from './MotionPrimitives';

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenId?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  defaultOpenId,
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null);

  return (
    <div className="divide-y divide-[#071C44]/10 border-t border-b border-[#071C44]/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-5 sm:py-6">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-start justify-between gap-6 text-left group cursor-pointer"
            >
              <div>
                <span className="block text-xs font-semibold text-[#075BE8] mb-1">
                  {item.category}
                </span>
                <span className="font-display text-lg sm:text-xl font-semibold text-[#071C44] group-hover:text-[#075BE8] transition-colors duration-200">
                  {item.question}
                </span>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: EASE_PREMIUM }}
                className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                  isOpen
                    ? 'bg-[#071C44] text-white border-[#071C44]'
                    : 'bg-white text-[#071C44] border-[#071C44]/12 group-hover:border-[#075BE8] group-hover:text-[#075BE8]'
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: EASE_PREMIUM }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pr-0 sm:pr-12 text-[15px] sm:text-base leading-relaxed text-[#071C44]/75">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
