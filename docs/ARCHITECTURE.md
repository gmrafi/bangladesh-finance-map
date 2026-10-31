# Technical Architecture

## Architectural principles

**One Next.js application, modular domain boundaries, shared infrastructure.** Keep source ingestion, calculations, presentation and map rendering separable. Research claims and production data must never be conflated.

## Proposed stack

- **Frontend:** Next.js App Router, React, TypeScript, Tailwind CSS, accessible component primitives.
- **Mapping:** MapLibre GL JS, dynamically loaded in client components; configurable licensed style/tile endpoint. Compare MapTiler, Mapbox, self-hosted PMTiles/Protomaps and others by Bangladesh coverage, attribution, style, quota, cost and permitted use.
- **Data:** PostgreSQL; enable PostGIS only for spatial queries requiring it. Initial curated GeoJSON/JSON may be appropriate for a narrow prototype.
- **Validation:** typed schemas (for example Zod) for user input and ingestion pipelines.
- **Background refresh:** scheduled ingestion with provenance, review, caching and observability; avoid exposing private vendor credentials.
- **Sharing:** Next.js metadata and Open Graph image routes, stable URLs, input minimization.
- **Quality:** TypeScript strict mode, linting, unit/integration tests, basic end-to-end coverage, accessibility checks.

## Suggested code organization

```text
src/
  app/
    (marketing)/
    (platform)/
      basa-iq/
      taxlens/
      cardmap/
      nrb-money-route/
      property-due-diligence/
      salary-reality/
      commute-cost/
      home-loan/
      entrepreneur-lab/
      safe-yield/
    api/
  components/
    ui/
    maps/
    charts/
    layout/
  features/
    basa-iq/
    taxlens/
    cardmap/
    nrb-money-route/
    property-due-diligence/
    salary-reality/
    commute-cost/
    home-loan/
    entrepreneur-lab/
    safe-yield/
  lib/
    db/
    geo/
    calculations/
    data-sources/
    validation/
    sharing/
  styles/
data/
  sources/
  schemas/
  fixtures/
tests/
docs/
```

Do not create placeholder feature pages merely to imply modules work. Mark planned or experimental modules accurately.

## Domain contracts

- `SourceRecord`: source ID, publisher, URL, retrieval date, effective date, license, coverage and validation status.
- `GeoArea`: stable identifier, canonical name(s), geometry reference, level and source.
- `Observation`: metric, value, unit, area, source, observed date, sample method and quality flag.
- `Scenario`: validated user inputs, calculation version, assumptions, result and privacy classification.
- `ShareArtifact`: public-safe result summary, expiry/versioning policy and share metadata.

Exact database schema follows verified source audit and MVP data needs.

## Map rules

- Separate geographic boundaries from estimated financial overlays.
- Avoid choropleths implying parcel-level accuracy when data is neighborhood-level.
- Provide legend, units, dates, uncertainty and source links.
- Lazy-load maps and use list/table fallback for accessibility and slow devices.
- Respect OSM and tile-provider licenses and attribution.
- Restrict client keys by domain and rate-limit sensitive server endpoints.

## Security and privacy

No credentials in git. Use environment variables and a documented `.env.example`. Never publish exact private salary, home or location information via share URLs without clear opt-in. Sanitize crowdsourced reports, aggregate where appropriate, defend against injection and abuse, and minimize personally identifiable data.

## Decision gates

Before choosing the production map vendor: test representative Dhaka areas, labels, basemap detail, performance on Android, license, monthly tile demand and costs. Before adding a finance data feed: validate reliability, update cadence, permitted redistribution and financial/compliance risks.
