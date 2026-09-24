# Performance baseline and optimization

## Scope

- Target: [the live GitHub Pages site](https://digital-building-process-tu-wien.github.io/)
- Test host: Chrome DevTools against the live URL. No localhost server was used.
- Measurement date: 2026-09-24
- Page-load metric: `PerformanceNavigationTiming.loadEventEnd`
- Page-load method: five reloads with `ignoreCache: true`; median is the middle of the five sorted values.
- Performance trace method: five Chrome DevTools performance traces with CPU throttling disabled and no network throttling.

## Results

| Measurement | Before optimization | After optimization |
| --- | ---: | ---: |
| Live page-load median (`loadEventEnd`) | 46.5 ms | 81.2 ms |
| Live page-load runs (ms) | 164.7, 45.5, 39.2, 49.8, 46.5 | 323.3, 56.4, 81.2, 295.5, 76.9 |
| Live LCP median (ms) | 103 ms | 222 ms |
| Live CLS | 0.00 | 0.00 |
| Lighthouse accessibility | 100 | 100 |
| Lighthouse best practices | 100 | 100 |
| Lighthouse SEO | 92 | 100 |
| Lighthouse agentic browsing | 100 | 100 |

The post-optimization live values come from the deployed build at commit `b4844c0`, with a cache-busting query so the browser did not reuse the baseline document. The post run has a heavier tail than the baseline, so the medians are reported as observed rather than treated as a guaranteed speedup. The five-run sample and unthrottled Chrome measurements are sensitive to GitHub Pages and network variance. The final Lighthouse audit is clean, with no failed audits.

## Changes made

- Converted all team and news JPEG assets to WebP.
- Resized team portraits to 224 × 224 px, matching the 112 CSS-pixel display size at a 2× density without over-downloading.
- Reduced the hero and logo WebP assets while preserving their dimensions.
- Reduced the large openBIM news image to a 720 px-wide WebP, which is sufficient for its rendered card size and mobile layout.
- Added intrinsic image dimensions, `decoding="async"`, and retained lazy loading for below-the-fold imagery.
- Removed the unused Tailwind Vite integration and dependency. The site uses component-scoped/custom CSS rather than Tailwind utilities.
- Inlined the small global stylesheet to remove the render-blocking CSS request.
- Removed the redundant brand accessible name and added descriptive labels to news links, addressing the baseline Lighthouse failures.

## Asset impact

| Asset set | Before | After | Reduction |
| --- | ---: | ---: | ---: |
| All image files | 850,771 bytes | 328,004 bytes | 522,767 bytes (61.4%) |
| Initial image set observed in the live baseline | 257,513 bytes | 110,828 bytes | 146,685 bytes (57.0%) |

Image totals are uncompressed file sizes. The live baseline loaded the document, stylesheet, logo, hero, and the first eight team portraits.

## Validation

- `npm run check` — passed with 0 errors, 0 warnings, and 0 hints.
- `npm run build` — passed; four static routes generated.
- Live Chrome DevTools Lighthouse baseline — desktop and mobile runs recorded above.
