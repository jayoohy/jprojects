# jprojects

Small projects from my TikTok, all in one Next.js app and deployed together on Vercel.

| URL | What it is |
|---|---|
| `/` | Home: list of projects and a link to my portfolio |
| `/debby` | Creator showcase site for a made-up UGC creator |
| `/debby/bad` | The deliberately bad version of the same site (not listed on the home page) |

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm test
npm run lint
npm run typecheck
npm run build
```

## Structure

```
src/
  app/
    page.tsx            home (reads src/data/projects.ts)
    layout.tsx          neutral shell and fonts for the home page
    debby/              the /debby route: layout (fonts, scoped styles) and page
  components/home/      home page components
  projects/
    debby/              everything for the Debby site: components, hooks, data, utils, debby.css
  data/projects.ts      the list the home page shows
public/
  debby/                Debby's images, and the bad site at public/debby/bad/index.html
docs/<project>/         notes for each project
tasks/<project>/        PRD and task list for each project
```

## Add a new project

1. Create `src/app/<slug>/page.tsx` (and a `layout.tsx` if it needs its own fonts or styles).
2. Put its code in `src/projects/<slug>/` and its static files in `public/<slug>/`.
3. Scope any global CSS to a wrapper class, and prefix its colour tokens with the project name (as `debby-*` does), so projects never affect each other.
4. Add an entry to `src/data/projects.ts` so it shows on the home page. Sub-pages, like `/debby/bad`, are not listed.

## Deploying

Import the GitHub repo into Vercel. No environment variables are needed. The Vercel project name decides the address (`jprojects.vercel.app`), so check the name is free when you create it.
