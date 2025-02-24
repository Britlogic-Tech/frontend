This is a [Next.js](https://nextjs.org) project
[started here](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Mostly written in _TypeScript_ and _Scss_

## Getting Started

1- First, clone the repo and install dependencies

```bash
npm install
```

2- Run the development server:

```bash
npm run dev
```

3- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4- Make sure to build production grade for serving on production

```bash
npm run build
```

5- You can start a built-in Node server by running `start` (only after `build`)

```bash
npm run start
```

### Fonts

- This project uses
  [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to
  automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
- Also using Google font: [Golos Text](https://fonts.google.com/specimen/Golos+Text) for larger hero
  texts

## Edit content

### Dynamic content

Most of the dynamic contents are driven by data read from this JSON files under `data` folder. Feel
free to adjust the content. Please do not remove required properties. Linter should be able to let
you know if you attempt to remove a required property. If you don't want something shown, use `""`
(empty text) instead.

```
└── 📁data
    └── companyInfo.tsx
    └── footerLinks.ts
    └── navigation.ts
    └── offices.ts
    └── partners.ts
    └── services.ts
```

#### Notice

Next.js generates static pages at build-time **Once you changed any content (in JSON files or
others), you should `build` the project again**

### Static content

Static pages contents are hard-coded Should you want to edit find them here in `pages.tsx` files

```
└── 📁about
    └── 📁privacy-policy
        └── page.tsx
    └── 📁terms-and-conditions
        └── page.tsx
    └── layout.tsx
    └── page.tsx
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.
