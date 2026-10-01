| webhooks (4 tools)| tags (4 tools)| wiki (5 tools)| milestones (14 tools)| pipelines (48 tools)| ci (1 tools)| projects (9 tools)| branches (14 tools)| issues (20 tools)| merge_requests (26 tools)---
name: gitlab-mcp-skill
description: Use this skill when working with the GitLab MCP server tools for merge requests, issues, repositories, pipelines, variables, dependency proxy, vulnerabilities, webhooks, search, CI catalog, and related GitLab workflows.
---

# gitlab-mcp

GitLab MCP server providing 177 tools: 176 tools across 16 toolsets, plus the always-available `discover_tools` meta-tool. Tools whose API does not exist in GitLab 10.8 have been removed.

For exact generated parameter tables, see `docs/tools/`. Use this file for workflow shape and high-signal parameter hints.

## Toolsets

| Toolset | Default | Enable with |
|---|---|---|
| merge_requests (26 tools) | yes | - |
| issues (20 tools) | yes | - |
| repositories (7 tools) | yes | - |
| branches (14 tools) | yes | - |
| projects (9 tools) | yes | - |
| labels (5 tools) | yes | - |
| ci (1 tool) | yes | - |
| groups (1 tool) | yes | - |
| users (7 tools) | yes | - |
| pipelines (48 tools) | no | `USE_PIPELINE=true` or `GITLAB_TOOLSETS=pipelines` |
| milestones (14 tools) | no | `USE_MILESTONE=true` or `GITLAB_TOOLSETS=milestones` |
| wiki (5 tools) | no | `USE_GITLAB_WIKI=true` or `GITLAB_TOOLSETS=wiki` |
| tags (4 tools) | no | `GITLAB_TOOLSETS=tags` |
| webhooks (4 tools) | no | `GITLAB_TOOLSETS=webhooks` |
| search (3 tools) | no | `GITLAB_TOOLSETS=search` |
| variables (10 tools) | no | `GITLAB_TOOLSETS=variables` |

Enable all: `GITLAB_TOOLSETS=all`. Use `GITLAB_TOOLS` to enable individual tools outside their toolset. `discover_tools` can list and activate opt-in categories for the current session.

The per-toolset counts above sum to 263 because `get_branch` and `list_branches` are each listed
in both `merge_requests` and `branches`; the unique tool count across all toolsets is 261.

## Key Workflows

### Code Review (see reference/code-review.md)

1. `get_merge_request_diffs` - get the changed files and their diffs
2. `create_merge_request_thread` or `create_merge_request_note` - leave review comments

### MR Lifecycle (see reference/merge-requests.md)

`create_merge_request` -> review -> `merge_merge_request`

### Issue Management (see reference/issues.md)

`create_issue` -> `create_issue_note` -> `update_issue`

Use `update_issue_description_patch` for small edits to long issue descriptions instead of resending the full body.

### Projects & Namespaces

- `get_project`, `list_projects`, `update_project` - inspect or change project settings
- `list_project_members`, `list_group_members` - search members by name or username within a project or group
- `list_namespaces`, `get_namespace` - find target namespaces before creating projects/groups
- `create_repository.namespace_id` creates a project under a group namespace

### Branches & Commits

- `create_branch`, `list_branches`, `get_branch`, `delete_branch`
- Protected branches: `list_protected_branches`, `get_protected_branch`, `protect_branch`, `unprotect_branch`, `update_default_branch`
- Commits: `list_commits`, `get_commit`, `get_commit_diff`, `list_commit_statuses`, `create_commit_status`

### CI

- Lint configs: `validate_ci_lint`
- Pipelines/jobs/deployments: see reference/pipelines.md

### Variables

Enable with `GITLAB_TOOLSETS=variables`.

- Variables: project/group CRUD tools (`list_*_variables`, `get_*_variable`, `create_*_variable`, `update_*_variable`, `delete_*_variable`)

### Webhooks & Search

- Webhooks: see reference/webhooks.md
- Code search: see reference/search.md

### File Operations

- Read: `get_file_contents`, `get_repository_tree`
- Write: `create_or_update_file` (single file), `push_files` (multiple files in one commit)

## Parameter Hints

- **project_id**: numeric ID or URL-encoded path (`group%2Fsubgroup%2Fproject`)
- **namespace_id**: numeric namespace ID for `create_repository`; use `list_namespaces` first
- **parent_id**: scope subgroup creation for nested groups
- **MR lookup**: provide `mergeRequestIid` OR `branchName` (not both)
- **list_issues**: default scope = created by current user. Use `scope: "all"` for all issues
- **list_merge_requests**: without project_id returns user's MRs across all projects
- **emoji reactions**: merge request and issue reaction tools use GitLab emoji names like `thumbsup`, `rocket`, or `eyes`

## Destructive Tools (require caution)

`cancel_pipeline`, `cancel_pipeline_job`, `delete_branch`, `delete_deployment`, `approve_deployment`, `delete_environment`, `erase_pipeline_job`, `delete_group_milestone`, `delete_group_variable`, `delete_issue`, `delete_issue_emoji_reaction`, `delete_issue_note_emoji_reaction`, `delete_label`, `delete_merge_request_discussion_note`, `delete_merge_request_emoji_reaction`, `delete_merge_request_note`, `delete_milestone`, `delete_pipeline`, `delete_pipeline_schedule`, `delete_pipeline_schedule_variable`, `delete_pipeline_trigger`, `delete_project_variable`, `delete_review_app_environments`, `delete_tag`, `delete_webhook`, `delete_wiki_page`, `merge_merge_request`, `protect_branch`, `push_files`, `stop_environment`, `stop_stale_environments`, `unprotect_branch`, `update_default_branch`

## Advanced

- **Dynamic discovery**: `discover_tools` lists and activates opt-in toolsets at runtime
- **Tool docs**: `docs/tools/` is generated from `tools/registry.ts`; prefer it for exact schemas
- **Remote MCP OAuth**: when `GITLAB_MCP_OAUTH=true`, `POST /register` (DCR) is rate-limited per client IP (default 20/hour via MCP SDK; tune with `OAUTH_REGISTER_RATE_LIMIT_PER_HOUR`). Separate from `MAX_REQUESTS_PER_MINUTE` and GitLab API quotas — see [environment-variables.md](../../docs/configuration/environment-variables.md#oauth_register_rate_limit_per_hour)
- **Zoekt search**: `search_code`, `search_project_code`, `search_group_code` (requires advanced search enabled)
- **Work Items**: GraphQL-based alternative to issues (Premium/Ultimate features)
