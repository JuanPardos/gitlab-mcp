# Meta & GraphQL

Tools the MCP exposes that aren't tied to a specific GitLab feature group — server diagnostics and the GraphQL escape hatch.

!!! note "Feature toggle"
    Mixed availability. `discover_tools` is always exposed (the server re-adds it after every toolset filter). `execute_graphql` is not part of any toolset — enable it explicitly with `GITLAB_TOOLS=execute_graphql`.

## Tools in this group

- [`discover_tools`](#discover_tools) — 📖 Read-only

---

### `discover_tools`

*📖 Read-only*

Discover and activate additional tool categories for this session. Available categories: merge_requests, issues, repositories, branches, projects, labels, ci, groups, pipelines, milestones, wiki, tags, users, webhooks, search, variables. Already-active categories are listed in the response. Use this when a needed opt-in category is not currently exposed; omit `category` to inspect available categories, then call it with a category to activate that group for the current session. It changes only the session's tool registry, returns the active-tool summary, and does not change GitLab data.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|:-:|---|
| `category` | string |  | Toolset category to activate (e.g. 'pipelines', 'wiki'). Omit to list available categories. |
