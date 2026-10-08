# pitre.com

Personal site for Brian L. Pitre. Static Astro site, deployed to GitHub Pages from this repository. The public address is [https://pitre.com](https://pitre.com) once DNS is pointed at GitHub Pages.

The repository that already existed is [YegorCreative/pitre.com](https://github.com/YegorCreative/pitre.com). A repository named `pitre` was not created, so this project stays in the repo that matches the domain.

## Stack

- Astro, static output
- TypeScript
- Tailwind CSS
- GitHub Actions → GitHub Pages

`astro.config.ts` sets `site` to `https://pitre.com` and `output` to `static`. The production base path is the domain root. It is not `/pitre/` or `/pitre.com/`.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Edit the words

Career facts live in `src/data/site.ts`. They follow the résumé dated September 2, 2020. Do not add the street address. Do not add employers, dates, or numbers that are not in that file’s sources.

Photographs:

- `public/images/brian-on-the-water.*` — February 2025, on a boat
- `public/images/brian-skyop-class.*` — SkyOp Introduction to sUAS classroom

Camera metadata has been removed from the boat portraits.

## Contact form

GitHub Pages cannot host a private form backend. The contact page publishes the résumé phone number.

To turn on a written form without a server:

1. Create a form at [Formspree](https://formspree.io/).
2. Set `formEndpoint` in `src/data/site.ts` to the public form URL, `https://formspree.io/f/xxxxxxxx`.
3. Commit and push.

Do not put private API keys in the repository. A Formspree form id is meant to be public.

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`:

1. Install dependencies with `npm ci`
2. `npm run build`
3. Upload `dist`
4. Deploy with `actions/deploy-pages`

The workflow has `contents: read`, `pages: write`, and `id-token: write`, and deploys into the `github-pages` environment.

In the repository settings, GitHub Pages must use **GitHub Actions** as the source.

`public/CNAME` is not in the repository yet. Adding it tells GitHub Pages that the canonical host is `pitre.com`. Until the domain’s A records point at GitHub, that setting makes the `github.io` preview redirect to whatever `pitre.com` currently serves. Add the file when DNS is ready to change:

```
pitre.com
```

## Custom domain (needs approval)

DNS is at GoDaddy (`domaincontrol.com`). Mail uses GoDaddy (`secureserver.net`).

Do not change MX, SPF, DKIM, DMARC, or the existing TXT records.

When the new site is approved, replace only the address records:

| Host | Type | Value |
| --- | --- | --- |
| `@` | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |
| `www` | CNAME | `YegorCreative.github.io` |

Optional AAAA records, from GitHub’s current Pages documentation:

- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

Keep the A records as well. After GitHub provisions a certificate, turn on Enforce HTTPS. The apex domain is canonical. GitHub redirects `www` to the apex when the custom domain is `pitre.com` and both names resolve to Pages.

## License

MIT. See `LICENSE`.
