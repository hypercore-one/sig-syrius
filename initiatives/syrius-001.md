## Initiative: 001 (Bloc Refactor)

**Lead / Sponsor:** @?:hc1.chat  
**Status:** In progress  
**Goal:** Establish a robust, modular architecture based on **Bloc** that cleanly separates presentation, state, and domain logic; modernize persistence; de-risk dependencies; and harden the codebase with analysis, concurrency best practices, and test coverage—so the wallet can evolve rapidly and be consumed by the mobile app.

### Scope
- Core wallet features (accounts, keys, transactions, node/RPC interaction, settings)
- Cross-platform app layers (desktop + mobile)
- Build & tooling (flavors, analysis rules, test infra)

---

### Deliverables

1. **Bloc Architecture Adoption**
   - Feature modules structured as `feature/` packages (presentation → bloc → domain → data).
   - Replaced legacy state management with Bloc/Cubit per feature.
   - Navigation & lifecycle integrated with Bloc observers.
   - **Acceptance:** No UI regressions; bloc tests for state transitions; documented module boundaries.

2. **Storage Migration: Hive → drift**
   - Introduce **drift** (with DAOs, schema, migrations, typed queries).
   - Replace Hive usages and write migration code where feasible.
   - **Acceptance:** Data integrity preserved for existing users OR a one-time migration path with fallback; drift unit tests for critical tables.

3. **Dependency Audit & Remediation**
   - Audit third-party packages (update cadence, maintenance status, license).
   - Replace stale/abandoned packages with maintained alternatives or Flutter/Dart SDK features.
   - Where sensible, **in-house small utilities** replace heavy deps.
   - **Acceptance:** Audit report committed; blockers removed for Flutter/Dart upgrades.

4. **App Flavors: prod / test / dev**
   - Define flavors with env config (API URLs, feature flags, unlock bypass for test/dev).
   - CI builds per flavor; clear app naming and icons where needed.
   - **Acceptance:** One-command build per flavor; runtime banner or About screen shows flavor.

5. **Modern Dart Features**
   - Adopt records, patterns, sealed classes, enhanced enums, `switch` exhaustiveness, `late`/`final` correctness.
   - Remove legacy null-safety shims.
   - **Acceptance:** Analyzer passes; migration notes in changelog.

6. **Dart Analyzer Rules (Lints)**
   - Add `analysis_options.yaml` aligned with `flutter_lints` + SIG conventions (see sample below).
   - CI gating on `dart analyze`.
   - **Acceptance:** Zero warnings on main; lint breaks the build.

7. **Isolates for Heavy Work**
   - Offload CPU-bound or blocking tasks (e.g., Argon2/key ops, serialization, large JSON, PoW link prep) to **isolates** or `compute`.
   - **Acceptance:** No jank in UI traces; perf notes and tests on critical paths.

8. **Unit Tests & Docs**
   - Bloc tests per feature; DAO tests for drift; smoke tests for navigation.
   - Contributor docs: module structure, how to add a bloc, how to write a migration/test.
   - **Acceptance:** Coverage target ≥ 60% for refactored modules; docs in `/docs` and README anchors.

---

### Milestones & Checklist