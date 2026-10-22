import React from 'react';
import { HOSPITAL_INFO } from '../data/hospital';

export const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

interface SocialLinksProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = "", 
  variant = 'light',
  size = 'md'
}) => {
  const links = [
    {
      name: 'YouTube',
      href: HOSPITAL_INFO.socialLinks.youtube,
      icon: YoutubeIcon,
      hoverColor: 'hover:text-[#FF0000] hover:bg-[#FF0000]/15 hover:border-[#FF0000]/40',
      label: 'Watch pediatric & health care videos on YouTube'
    },
    {
      name: 'Instagram',
      href: HOSPITAL_INFO.socialLinks.instagram,
      icon: InstagramIcon,
      hoverColor: 'hover:text-[#E1306C] hover:bg-[#E1306C]/15 hover:border-[#E1306C]/40',
      label: 'Follow Dr. Keerthi Kids Care on Instagram'
    },
    {
      name: 'Facebook',
      href: HOSPITAL_INFO.socialLinks.facebook,
      icon: FacebookIcon,
      hoverColor: 'hover:text-[#1877F2] hover:bg-[#1877F2]/15 hover:border-[#1877F2]/40',
      label: 'Connect with us on Facebook'
    }
  ];

  const baseStyle = variant === 'dark'
    ? 'bg-white/10 text-slate-300 border-white/15'
    : 'bg-slate-100 text-slate-700 border-slate-200';

  const sizeStyle = size === 'sm'
    ? 'w-6 h-6 rounded-md text-xs'
    : 'w-9 h-9 rounded-xl text-sm';

  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className={`${sizeStyle} flex items-center justify-center border transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs ${baseStyle} ${item.hoverColor}`}
          >
            <IconComponent className={iconSize} />
          </a>
        );
      })}
    </div>
  );
};
