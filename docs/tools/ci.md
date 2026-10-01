# CI Lint

Validate `.gitlab-ci.yml` snippets and project pipeline configs.

## Tools in this group

- [`validate_ci_lint`](#validate_ci_lint) — 📖 Read-only

---

### `validate_ci_lint`

*📖 Read-only*

Validate provided GitLab CI/CD YAML content for a project. Use this to check configuration without applying it; choose a create or update tool only after validation succeeds. It is read-only and does not mutate GitLab data; missing resources, invalid identifiers, insufficient permission, and rate limits are returned as errors. When `project_id` or `group_id` is accepted, provide the numeric ID or complete URL-encoded path described by the schema; use required identifiers and pagination fields exactly as documented.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|:-:|---|
| `project_id` | string | ✓ | Project ID or URL-encoded path |
| `content` | string | ✓ | GitLab CI/CD YAML content to validate |
| `dry_run` | boolean |  | Run pipeline creation simulation |
| `include_jobs` | boolean |  | Include jobs in the lint response |
| `ref` | string |  | Branch or tag context for dry_run validation |
