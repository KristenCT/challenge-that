# Assets

Drop files here and reference them in code as `/assets/...`

## Folders

- **logos/** — Challenge That logo, ANALYTIQ logo, partner/client logos
- **icons/** — Favicons, app icons, any custom SVG icons
- **team/** — Profile photos (name them consistently, e.g. `firstname-lastname.jpg`)

## Usage in Next.js

```tsx
<img src="/assets/team/firstname-lastname.jpg" alt="Name" />
// or with Next.js Image component:
<Image src="/assets/logos/challengethat.svg" alt="Challenge That" width={120} height={40} />
```

## Recommended formats

- Logos: SVG preferred, PNG fallback
- Team photos: JPG, square crop, minimum 400×400px
