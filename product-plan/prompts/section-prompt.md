# Section Implementation Prompt

## Define Section Variables

Before using this prompt, replace the placeholders:

- **SECTION_NAME** = [Human-readable name, e.g., "Hero Section", "Services Section"]
- **SECTION_ID** = [Folder name in sections/, e.g., "hero-section", "services-section"]
- **NN** = [Milestone number, e.g., "02", "03" — sections start at 02 since 01 is Foundation]

---

I need you to implement the **SECTION_NAME** section of my application.

## Instructions

Please carefully read and analyze the following files:

1. **@product-plan/product-overview.md** — Product summary for overall context
2. **@product-plan/instructions/incremental/NN-SECTION_ID.md** — Specific instructions for this section

Also review the section assets:
- **@product-plan/sections/SECTION_ID/README.md** — Feature overview and design intent
- **@product-plan/sections/SECTION_ID/tests.md** — Test-writing instructions (use TDD approach)
- **@product-plan/sections/SECTION_ID/components/** — React components to integrate
- **@product-plan/sections/SECTION_ID/types.ts** — TypeScript interfaces
- **@product-plan/sections/SECTION_ID/sample-data.json** — Test data

## Before You Begin

Please ask me clarifying questions about:

1. **Integration Points**
   - How should this section connect to existing features?
   - Any API endpoints already built that this should use?

2. **Data Source**
   - Should the data be static or fetched from an API/CMS?
   - How should the data be structured on the backend?

3. **Backend Requirements** (if applicable)
   - Any server-side logic needed?
   - API endpoints to create?

4. **Any Other Clarifications**
   - Questions about specific user flows in this section
   - Edge cases that need clarification

## Implementation Approach

Use test-driven development:
1. Read the `tests.md` file and write failing tests first
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

Lastly, be sure to ask me if I have any other notes to add for this implementation.

Once I answer your questions, proceed with implementation.

---

## Section Reference

| Section | SECTION_ID | NN |
|---------|------------|-----|
| Hero Section | hero-section | 02 |
| Services Section | services-section | 03 |
| Benefits Section | benefits-section | 04 |
| Contact Section | contact-section | 05 |
