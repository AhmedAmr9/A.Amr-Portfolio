// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahmed Amr",
    "jobTitle": "System Developer",
    "description": "System Developer specializing in web and mobile development with React, Next.js, Node.js",
    "url": "https://your-portfolio-domain.com",
    "image": "/Ahmed-Profile.png",
    "sameAs": [
      "https://linkedin.com/in/your-handle",
      "https://github.com/your-handle"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Mobile Development",
      "System Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "System Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Egypt"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />

        {/* Primary Meta Tags */}
        <title>Ahmed Amr - System Developer Portfolio</title>
        <meta name="title" content="Ahmed Amr - System Developer Portfolio" />
        <meta name="description" content="Portfolio of Ahmed Amr, a System Developer specializing in web and mobile development with React, Next.js, Node.js. Explore my projects and get in touch." />
        <meta name="keywords" content="Ahmed Amr, System Developer, Portfolio, React, Next.js, Node.js, Web Development, Mobile Development, JavaScript, TypeScript" />
        <meta name="author" content="Ahmed Amr" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-domain.com" />
        <meta property="og:title" content="Ahmed Amr - System Developer Portfolio" />
        <meta property="og:description" content="Explore my projects and skills in web and mobile development. Available for new opportunities." />
        <meta property="og:image" content="/Ahmed-Profile.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Ahmed Amr Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://your-portfolio-domain.com" />
        <meta name="twitter:title" content="Ahmed Amr - System Developer Portfolio" />
        <meta name="twitter:description" content="Explore my projects and skills in web and mobile development. Available for new opportunities." />
        <meta name="twitter:image" content="/Ahmed-Profile.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
