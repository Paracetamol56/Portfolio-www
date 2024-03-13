// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      title: "Portfolio - Mathéo Galuba",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#0c0816" },
      ],
      meta: [
        {
          name: "keywords",
          content:
            "Mathéo Galuba, Portfolio, Work, Software, Engineer, Developer, Web Developer, Frontend, Fullstack, Nuxt, Vue, JavaScript, TypeScript, TailwindCSS, HTML, CSS, SASS, SCSS, Git, GitHub, Discord, Figma, Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Audition, Lightroom, Blender, Unity, Unreal Engine, C#, C++, Python, Java, Kotlin, Swift, Dart, Flutter, React, Angular, Svelte, Node.js, Express, MongoDB, MySQL, PostgreSQL, Firebase, AWS, Azure, Google Cloud, Netlify, Vercel, DigitalOcean, PayPal, SendGrid, GraphQL, REST, API, SPA, PWA, SSR, SEO, UX, UI, A11Y",
        },
        { name: "author", content: "Mathéo Galuba" },
        {
          name: "description",
          content:
            "Mathéo Galuba's portfolio, showcasing his work as a software engineer and developer.",
        },
        { name: "application-name", content: "Portfolio - Mathéo Galuba" },
        { name: "msapplication-TileColor", content: "#0c0816" },
        { name: "theme-color", content: "#0c0816" },

        { property: "og:url", content: "https://matheo-galuba.com" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Portfolio - Mathéo Galuba" },
        {
          property: "og:description",
          content:
            "Mathéo Galuba's portfolio, showcasing his work as a software engineer and developer.",
        },
        {
          property: "og:image",
          content: "https://matheo-galuba.com/og-image.png",
        },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Portfolio - Mathéo Galuba" },
        {
          name: "twitter:description",
          content:
            "Mathéo Galuba's portfolio, showcasing his work as a software engineer and developer.",
        },
        {
          name: "twitter:image",
          content: "https://matheo-galuba.com/og-image.png",
        },
      ],
      script: [
        {
          src: "https://analytics.matheo-galuba.com/script.js",
          defer: true,
          async: true,
          "data-website-id": "f0cfd44e-8247-4f6b-9ee2-0f8bf949a1ae",
        },
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/i18n", "nuxt3-leaflet"],
  content: {
    // ... options
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
      },
      {
        code: "fr",
        iso: "fr-FR",
        file: "fr-FR.json",
      },
    ],
    langDir: "locales/",
  },
});
