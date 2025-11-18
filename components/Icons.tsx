

import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

export const MenuIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const XIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
);

export const CheckIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export const XCircleIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const TwitterIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.95.08c.55 1.7 2.14 2.93 4.03 2.96-1.47 1.15-3.33 1.84-5.35 1.84-.35 0-.69-.02-1.03-.06 1.9 1.22 4.16 1.93 6.56 1.93 7.88 0 12.19-6.54 12.19-12.2 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.22z" />
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.253.057 2.094.274 2.844.582.766.31 1.34.717 1.933 1.31s1.003 1.167 1.31 1.932c.308.75.525 1.591.582 2.844.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.253-.274 2.094-.582 2.844-.31.766-.717 1.34-1.31 1.933s-1.167 1.003-1.932 1.31c-.75.308-1.591.525-2.844.582-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.253-.057-2.094-.274-2.844-.582-.766-.31-1.34-.717-1.933-1.31s-1.003-1.167-1.31-1.932c-.308-.75-.525-1.591-.582-2.844-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.057-1.253.274-2.094.582-2.844.31-.766.717-1.34 1.31-1.933s1.167-1.003 1.932-1.31c.75-.308 1.591.525 2.844-.582C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.155 0-3.52.012-4.748.068-1.19.054-1.87.262-2.48.513-.63.26-1.09.59-1.57 1.07s-.81.94-1.07 1.57c-.25.61-.458 1.29-.513 2.48C2.025 8.48 2.013 8.845 2.013 12s.012 3.52.068 4.748c.054 1.19.262 1.87.513 2.48.26.63.59 1.09 1.07 1.57s.94.81 1.57 1.07c.61.25 1.29.458 2.48.513 1.228.056 1.593.068 4.748.068s3.52-.012 4.748-.068c1.19-.054 1.87-.262 2.48-.513.63-.26 1.09-.59 1.57-1.07s.81-.94 1.07-1.57c.25-.61.458-1.29.513-2.48.056-1.228.068-1.593.068-4.748s-.012-3.52-.068-4.748c-.054-1.19-.262-1.87-.513-2.48-.26-.63-.59-1.09-1.07-1.57s-.94-.81-1.57-1.07c-.61-.25-1.29-.458-2.48-.513C15.52 3.975 15.155 3.965 12 3.965zM12 7.08c-2.71 0-4.91 2.2-4.91 4.91s2.2 4.91 4.91 4.91 4.91-2.2 4.91-4.91-2.2-4.91-4.91-4.91zm0 7.918c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm5.05-7.928c-.53 0-.96.43-.96.96s.43.96.96.96.96-.43.96-.96-.43-.96-.96-.96z"/>
    </svg>
);

export const LinkedinIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.54V9.02h3.52v11.43zM5.3 7.43c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.15 13.02h-3.52v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67h-3.52V9.02h3.38v1.54h.05c.47-.88 1.62-1.82 3.33-1.82 3.56 0 4.22 2.35 4.22 5.4v6.29z"/>
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);
  
export const UserIcon: React.FC<IconProps> = (props) => (
    <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" >
        <path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path>
    </svg>
);
  
export const CopyIcon: React.FC<IconProps> = (props) => (
    <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256">
        <path d="M200,88V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V88A16,16,0,0,1,40,72H184A16,16,0,0,1,200,88Zm16-48H64a8,8,0,0,0,0,16H216V176a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Z"></path>
    </svg>
);

export const SettingsIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export const DataIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 20v-5a2 2 0 0 1 2-2h2" />
        <path d="M14 3v5a2 2 0 0 0 2 2h5" />
        <path d="M4 3h10v2" />
        <path d="M4 7h10v2" />
        <path d="M4 11h8v2" />
        <path d="M4 15h8v2" />
        <path d="M4 19h8v2" />
        <path d="M18 12.01V21" />
    </svg>
);

export const RocketIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.66-1.74 1.94-3.6 3.6-5.25.79-.78 2.18-1.38 3.34-1.38.92 0 1.94.34 2.8.97.88.64 1.38 1.52 1.38 2.53 0 1.2-1.22 2.68-2.5 3.52-1.74 1.13-3.6 2.3-5.25 3.6C8.8 14.56 7.26 14.79 6.6 15.45c-.86.88-2.31.85-3.11.05z" />
        <path d="m15 5 3-3" />
        <path d="M9 14c-1-1-1.3-2.6-1-4 .3-1.3 1.3-2.3 2.6-2.6 1.4-.3 2.9 0 4 1" />
    </svg>
);

export const VirtualAssistantIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <circle cx="12" cy="8" r="2" />
        <path d="M16 13a4 4 0 0 0-8 0" />
    </svg>
);

export const LayersIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
    </svg>
);

export const DollarIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z" />
    </svg>
);

export const PlusCircleIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z" />
    </svg>
);

export const ContactHeaderIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" >
    <g fill="currentColor">
      <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path>
    </g>
  </svg>
);

export const ContactEmailIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false">
    <g fill="currentColor">
      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
    </g>
  </svg>
);

export const ContactCallIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false">
    <g fill="currentColor">
      <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
    </g>
  </svg>
);

// FIX: Added missing ArrowRightIcon
export const ArrowRightIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

// FIX: Added missing QuotationMarkIcon
export const QuotationMarkIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
    </svg>
);

// NEW ICONS FOR ACCESS SOLUTION PAGE
export const NfcWaveIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 8.5c1-2 2.5-3.5 4.5-4" /><path d="M8.5 4.5c1.5-1.5 3.5-2.5 5.5-2.5" /><path d="M12.5 12.5c0-2-1-3.5-2.5-4.5" /><path d="M15.5 15.5c0-2-1-3.5-2.5-4.5" />
    </svg>
);
export const PlugIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8h-2a4 4 0 0 0-4 4v1" /><path d="M6 8h2a4 4 0 0 1 4 4v1" /><path d="M14 17c0-1.7-1.3-3-3-3h-2c-1.7 0-3 1.3-3 3v5" />
    </svg>
);
export const CloudSyncIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2.34" /><path d="M12 20.34V22" /><path d="m4.22 16.22 1.42 1.42" /><path d="m18.36 6.36 1.42 1.42" /><path d="M22 12h-2.34" /><path d="M4.34 12H2" /><path d="m19.78 16.22-1.42 1.42" /><path d="m5.64 6.36-1.42 1.42" /><path d="M12 18a6 6 0 0 0 6-6h-3a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3H6a6 6 0 0 0 6 6z" />
    </svg>
);
export const ShieldCheckIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
    </svg>
);
export const KeyIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6" /><path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
);
export const WifiOffIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" y1="2" x2="22" y2="22" /><path d="M8.5 16.5a5 5 0 0 1 7 0" /><path d="M2 8.82a15 15 0 0 1 4.17-2.65" /><path d="M10.66 5.5C11.33 5.3 12 5.2 12.68 5.2c5.96 0 10.82 4.86 10.82 10.82 0 .68-.09 1.35-.28 2" /><path d="M5.5 13.5a9 9 0 0 1 5.6-2.5" />
    </svg>
);
export const FileTextIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
    </svg>
);
export const BriefcaseIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

export const LeafIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 17 4.5c-3 1.5-5.5 4-7 7l-2 2c-2 2-2 5 0 7c2 2 5 2 7 0l2-2" />
    </svg>
);