import React from "react";

interface LogoProps {
  className?: string;
}

// Official React Atom Logo
export function ReactLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// Official Node.js Hexagon Logo
export function NodeLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 3L3.88 10v12L16 29l12.12-7V10L16 3z"
        fill="#339933"
      />
      <path
        d="M16 6.5l8.66 5v7L16 23.5l-8.66-5v-7L16 6.5z"
        fill="#66CC33"
      />
      <path
        d="M16 11l5 2.88v4.24L16 21l-5-2.88v-4.24L16 11z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official Express.js Logo
export function ExpressLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 50 32" fill="currentColor">
      <text
        x="0"
        y="23"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="-1"
      >
        ex
      </text>
    </svg>
  );
}

// Official MongoDB Leaf Logo
export function MongoLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 1.5c-.3 0-4.5 5.5-4.5 11.2 0 4.8 3.5 8.3 4.5 8.8.8-.5 4.5-4 4.5-8.8 0-5.7-4.2-11.2-4.5-11.2z"
        fill="#13AA52"
      />
      <path
        d="M12 21.5c-.2 0-.4-.1-.5-.2-1.2-.7-4.5-3.8-4.5-8.6 0-5.3 3.9-10.4 4.5-11.2.2-.2.5-.2.7 0 .6.8 4.5 5.9 4.5 11.2 0 4.8-3.3 7.9-4.5 8.6-.2.1-.4.2-.7.2z"
        stroke="#0F8B42"
        strokeWidth="0.8"
      />
      <path
        d="M12 2.5v18.5"
        stroke="#FFFFFF"
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />
    </svg>
  );
}

// Official JavaScript Logo
export function JavaScriptLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="4" fill="#F7DF1E" />
      <path
        d="M18.5 22.8c.8 1.3 1.9 2.2 3.8 2.2 1.6 0 2.6-.8 2.6-1.9 0-1.3-.9-1.8-2.6-2.5l-.9-.4c-2.6-1.1-4.3-2.5-4.3-5.5 0-2.7 2.1-4.8 5.4-4.8 2.3 0 4 1 5.1 2.9l-2.6 1.7c-.6-1-1.3-1.4-2.4-1.4-1.1 0-1.8.7-1.8 1.5 0 1 .7 1.5 2.3 2.1l.9.4c3.1 1.3 4.8 2.7 4.8 5.8 0 3.3-2.5 5.2-6.1 5.2-3.4 0-5.5-1.7-6.5-3.8l2.3-1.5zm-9.3.2c.4.8.9 1.4 1.8 1.4.9 0 1.5-.4 1.5-1.9v-11.8h3.3v11.9c0 3.3-1.9 4.8-4.6 4.8-2.5 0-4-1.3-4.8-3l2.8-1.4z"
        fill="#000000"
      />
    </svg>
  );
}

// Official TypeScript Logo
export function TypeScriptLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="4" fill="#3178C6" />
      <path
        d="M17.5 12h8.5v2.8h-2.8V26h-3V14.8h-2.7V12zm-4.7 9.8c.6.9 1.5 1.5 2.8 1.5 1.2 0 1.9-.6 1.9-1.4 0-.9-.7-1.3-1.9-1.8l-.6-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-2 1.5-3.5 3.9-3.5 1.7 0 2.9.7 3.7 2.1l-1.9 1.2c-.4-.7-1-1-1.8-1-.8 0-1.3.5-1.3 1.1 0 .7.5 1.1 1.7 1.5l.6.3c2.2.9 3.5 1.9 3.5 4.2 0 2.4-1.8 3.8-4.4 3.8-2.5 0-4-1.2-4.7-2.7l1.6-1.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official Tailwind CSS Logo
export function TailwindLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="#38BDF8">
      <path d="M16 8c-4.4 0-7.2 2.2-8.4 6.6 1.6-2.2 3.6-3 6-2.4 1.4.3 2.4 1.3 3.5 2.4 1.8 1.8 3.8 3.9 8.3 3.9 4.4 0 7.2-2.2 8.4-6.6-1.6 2.2-3.6 3-6 2.4-1.4-.3-2.4-1.3-3.5-2.4-1.8-1.8-3.8-3.9-8.3-3.9zm-8.4 8.5c-4.4 0-7.2 2.2-8.4 6.6 1.6-2.2 3.6-3 6-2.4 1.4.3 2.4 1.3 3.5 2.4 1.8 1.8 3.8 3.9 8.3 3.9 4.4 0 7.2-2.2 8.4-6.6-1.6 2.2-3.6 3-6 2.4-1.4-.3-2.4-1.3-3.5-2.4-1.8-1.8-3.8-3.9-8.3-3.9z" />
    </svg>
  );
}

// Official Dart Logo
export function DartLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path d="M7 6l8-3 10 10-6 13-12-8V6z" fill="#0175C2" />
      <path d="M15 3l10 10-4 13-14-5 8-18z" fill="#00B4AB" />
      <path d="M7 6l14 12-8 8-6-2V6z" fill="#02569B" />
      <path d="M15 12l8 8-10 6-4-4 6-10z" fill="#29B6F6" />
    </svg>
  );
}

// Official Flutter Logo
export function FlutterLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path d="M18.8 3.5L8.5 13.8l3.6 3.6L26 3.5h-7.2z" fill="#47C5FB" />
      <path d="M18.8 19.5l-5.4 5.4 3.6 3.6 8.9-8.9h-7.1z" fill="#02569B" />
      <path d="M13.4 14.1l-3.6 3.6 3.6 3.6 3.6-3.6-3.6-3.6z" fill="#0175C2" />
      <path d="M13.4 21.3l3.6-3.6 3.6 3.6-3.6 3.6-3.6-3.6z" fill="#47C5FB" />
    </svg>
  );
}

// Official Git Logo
export function GitLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M29.5 14.5L17.5 2.5a2.1 2.1 0 00-3 0l-12 12a2.1 2.1 0 000 3l12 12a2.1 2.1 0 003 0l12-12a2.1 2.1 0 000-3z"
        fill="#F05032"
      />
      <circle cx="16" cy="11" r="2.5" fill="#FFFFFF" />
      <circle cx="11" cy="16" r="2.5" fill="#FFFFFF" />
      <circle cx="21" cy="21" r="2.5" fill="#FFFFFF" />
      <path
        d="M16 13.5v7m-5-2l7.5 7.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Official Postman Logo
export function PostmanLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" fill="#FF6C37" />
      <path
        d="M9 18l5-4 5 1-3 5-7-2z"
        fill="#FFFFFF"
      />
      <circle cx="16" cy="11" r="2.5" fill="#FFFFFF" />
      <path
        d="M13 14l6-3 4 5-3 2"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Official Vercel Logo
export function VercelLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 5l12 21H4L16 5z" fill="#000000" />
    </svg>
  );
}

// Official Render Logo
export function RenderLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#111111" />
      <path
        d="M8 22V10h8a6 6 0 010 12H8zm4-4h4a2 2 0 000-4h-4v4z"
        fill="#46E3B7"
      />
      <circle cx="21" cy="19" r="3" fill="#FFFFFF" />
    </svg>
  );
}

// JWT Badge Logo
export function JwtLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#000000" />
      <circle cx="16" cy="16" r="9" stroke="url(#jwtGrad)" strokeWidth="2.5" />
      <path d="M13 16h6M16 13v6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="jwtGrad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#FB015B" />
          <stop offset="0.5" stopColor="#D63AFF" />
          <stop offset="1" stopColor="#00B9F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// REST API Architecture Logo
export function RestApiLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#7C3AED" />
      <path
        d="M8 16h16M18 10l6 6-6 6M14 22l-6-6 6-6"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
