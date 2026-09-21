# Design QA: AI hero, brand solution, and solution routes

- Source visual truth:
  - `/var/folders/hm/cnj1y4bx63z3999rdyccwvww0000gn/T/codex-clipboard-33a8cee9-9e98-4e4f-94bf-447d53946062.png` (AI hero failure state: CTA, prompt, phone, and rings overlap)
  - `/Users/prakhyatshrestha/Downloads/awwtomation/public/site-assets/solutions/brands/hero.png`
  - `/Users/prakhyatshrestha/Downloads/awwtomation/public/site-assets/solutions/brands/engage.png`
- Implementations:
  - `http://localhost:3000/product/ai`
  - `http://localhost:3000/solution/for-brand`
- Browser-rendered evidence: Codex in-app browser tab 2 captures `Inspect the AI hero at desktop size`, `Confirm the final AI hero spacing`, and `Confirm the mobile AI heading and spacing`; tab 3 captures `Verify the new brand solution page and imagery` and `Confirm the brand engagement visual`.
- Viewports: AI desktop 1440 x 900 CSS px; AI mobile 390 x 844 CSS px; brand page responsive desktop capture. Device density was the in-app browser default (1 CSS px per captured px).
- Source dimensions: AI reference 3600 x 2260 px, rendered in the task at 1987 x 1248 px. Brand sources are 1786 x 881 px and 1586 x 992 px.
- States: AI hero at initial load and at `scrollY=900`; mobile initial load; brand hero image; brand `Engage` pinned image; legacy `/for/brands` redirect.

## Full-view comparison evidence

The AI page keeps the requested dark grid, two-line display heading, white CTA, animated conversation phone, instruction panel, and rainbow speech rings. Unlike the supplied failure state, the content now has three non-overlapping layers: copy/CTA, phone/rings, and instruction panel. At the pinned animation state, the CTA remains fully visible above the phone, while the instruction panel stays to its left.

The brand solution page uses the supplied team image directly below the lavender hero and the supplied laptop image in the full-screen `Engage` section. Both images loaded through Next Image with non-zero natural dimensions and descriptive alt text.

## Focused-region comparison evidence

- Fonts and typography: the existing Awwtomation display and mono system is retained. The AI title remains exactly two lines on desktop and mobile; the 390 px capture has no clipping or horizontal overflow.
- Spacing and layout rhythm: at the final desktop scroll state, the phone starts 46 px below the CTA and the instruction card ends about 30 px before the phone. The prompt, conversation, and CTA remain visually distinct.
- Colors and visual tokens: the near-black grid, white display type, violet reply, muted UI chrome, and restrained rainbow outlines remain consistent with the supplied reference language.
- Image quality and asset fidelity: the supplied brand PNGs are used directly, with cover cropping appropriate to their sections. No placeholder, CSS drawing, or generated replacement was substituted.
- Copy and content: the rejected Meta API claim is absent from marketing content. Brand and solution copy remains unchanged except where API-focused claims were replaced with customer-facing control and security language.

## Comparison history

- [P1] First desktop capture placed the phone at the far right because `justify-end` carried from the mobile column into the desktop row. Fixed with `lg:justify-center`. Post-fix evidence centers the phone and leaves about 30 px between the instruction panel and device.
- [P2] The in-progress scroll state left only about 10 px between the CTA and phone, while large decorative rings visually crowded the button. Fixed by stabilizing the phone scale/translation and reducing ring height from 138% to 116%. Post-fix evidence leaves a 46 px CTA-to-phone gap.
- [P2] The forced two-line AI heading clipped horizontally at 390 px. Fixed with a mobile-specific 7.2vw display size while preserving the literal two line wrappers. Post-fix evidence reports `scrollWidth=390` at a 390 px viewport, and both lines fit inside the 350 px content width.

## Findings

No actionable P0, P1, or P2 differences remain for the requested scope.

Residual P3: the mobile hero intentionally shows the instruction panel after the phone rather than floating it beside the device, preventing collision at narrow widths.

## Primary interactions tested

- Scrolled the pinned AI hero from its initial state to `scrollY=900`.
- Checked the AI hero at 1440 x 900 and 390 x 844.
- Loaded both brand images and inspected their visible hero and `Engage` states.
- Opened `/for/brands` and confirmed it resolves to `/solution/for-brand`.
- Checked both rendered pages for browser console errors; none were present.

## Implementation checklist

- [x] Keep the AI CTA clear of the phone, prompt, and rings.
- [x] Preserve a useful scroll-driven hero animation.
- [x] Preserve the required two-line hero title without mobile clipping.
- [x] Render both supplied brand images in their relevant sections.
- [x] Move solution navigation and canonical page paths under `/solution/`.
- [x] Keep legacy solution links working through redirects.
- [x] Verify responsive rendering, console output, lint, tests, source TypeScript, and whitespace.

final result: passed
