# Frontend Design Skills: Integration and Verification

The user's original five-tool pack is archived **verbatim** at [FRONTEND_DESIGN_PACK_ORIGINAL.txt](references/FRONTEND_DESIGN_PACK_ORIGINAL.txt). This document explains how to apply it to **Next.js + shadcn/ui**. Links and CLI commands are user-provided references; their compatibility, current syntax and licenses have **not yet been independently verified or installed**.

## Tools

| Reference | Source | Role |
|---|---|---|
| Awesome DESIGN.md | https://github.com/voltagent/awesome-design-md | Design-system examples and grounding |
| Impeccable | https://github.com/pbakaus/impeccable | Anti-generic-design critique and polishing |
| Taste Skill | https://github.com/leonxlnx/taste-skill | Calibrate visual boldness, motion and density |
| Vercel agent skills / Web Design Guidelines | https://github.com/vercel-labs/agent-skills and https://github.com/vercel-labs/web-interface-guidelines | Accessibility and UX review |
| Microsoft Playwright MCP | https://github.com/microsoft/playwright-mcp | Real-browser interaction, screenshots and regression review |

## User-provided install commands (run only after checking current official documentation)

```bash
npx skills add pbakaus/impeccable
npx skills add Leonxlnx/taste-skill
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
claude mcp add playwright npx '@playwright/mcp@latest'
```

The last command targets **Claude CLI** specifically and is **not automatically an Antigravity MCP configuration command**. Configure Playwright MCP using the actual supported MCP configuration mechanism in Antigravity, then test that browser navigation, clicking and screenshots work. The slash commands `/impeccable audit` and `/impeccable polish` may also vary by agent environment; verify actual availability.

## Required workflow

1. Read `DESIGN.md` and preserve its approved tokens and brand direction.
2. Use shadcn/ui and accessible primitives for reusable components.
3. Draft a page and review typography, layout, spacing, colors, iconography, information density and mobile fit.
4. Run Impeccable/Taste workflows **if installed**; otherwise apply their documented principles manually and record that limitation.
5. Audit Vercel guidelines and WCAG-oriented fundamentals: keyboard, focus, labels, zoom, target size, contrast, responsive behavior and pending states.
6. Start local Next.js server; use Playwright to inspect desktop and mobile sizes, click primary controls, submit forms, inspect overflow, take screenshots and fix observed defects.
7. Report exact commands, checks, screenshot artifacts, failures and changes. Never report an imaginary 98/100 score.

## Source of truth and conflicts

`DESIGN.md` is the project token authority. `CLAUDE.md` supplies agent workflow rules. The full research is the product requirements source. The original pack is archival; third-party examples are inspiration, not a mandate to copy someone else's brand identity. Accessibility and actual usability override arbitrary visual scores.
