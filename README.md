This is a [Next.js](https://nextjs.org) project
[started here](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Mostly written in _TypeScript_ and _Scss_

## Getting Started

1- To run locally, you will need Node.

Install NVM:
[Read more here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Running the above commands downloads a script and runs it. The script clones the nvm repository to
`~/.nvm`, and attempts to add the source lines from the snippet below to the correct profile file
(`~/.bashrc`, `~/.bash_profile`, `~/.zshrc`, or `~/.profile`). If you find the install script is
updating the wrong profile file, set the `$PROFILE` env var to the profile file’s path, and then
rerun the installation script.

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

or on Mac

```bash
brew upgrade
brew install nvm
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$(brew --prefix nvm)/nvm.sh" ] && \. "$(brew --prefix nvm)/nvm.sh"' >> ~/.zshrc
echo '[ -s "$(brew --prefix nvm)/etc/bash_completion.d/nvm" ] && \. "$(brew --prefix nvm)/etc/bash_completion.d/nvm"' >> ~/.zshrc
source ~/.zshrc
```

Then install Node 22 and use it

```bash
nvm install 22
nvm use 22
```

1- Clone the repo

2- install dependencies

```bash
npm install
```

3- create `.env` file from `.env_example` replacing the placeholders with your actual data

4- Run the development server:

```bash
npm run dev
```

5- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6- Make sure to build production grade for serving on production

```bash
npm run build
```

7- You can start a built-in Node server by running `start` (only after `build`)

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
