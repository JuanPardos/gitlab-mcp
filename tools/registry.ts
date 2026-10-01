import { toJSONSchema } from "../utils/schema.js";
import {
  USE_GITLAB_WIKI,
  USE_MILESTONE,
  USE_PIPELINE,
  SSE,
  STREAMABLE_HTTP,
} from "../config.js";
import { getToolDescription } from "./tool-descriptions.js";
import {
  CancelPipelineJobSchema,
  ErasePipelineJobSchema,
  CancelPipelineSchema,
  CreateBranchSchema,
  CreateGroupSchema,
  CreateIssueNoteSchema,
  CreateIssueSchema,
  CreateIssueEmojiReactionSchema,
  CreateIssueNoteEmojiReactionSchema,
  ListIssueEmojiReactionsSchema,
  ListIssueNoteEmojiReactionsSchema,
  CreateLabelSchema,
  MarkAllTodosDoneSchema,
  ListTodosSchema,
  MarkTodoDoneSchema,
  CreateMergeRequestDiscussionNoteSchema,
  CreateMergeRequestEmojiReactionSchema,
  ListMergeRequestEmojiReactionsSchema,
  CreateMergeRequestNoteSchema,
  CreateMergeRequestSchema,
  CreateMergeRequestThreadSchema,
  CreateNoteSchema,
  CreateCommitStatusSchema,
  CreateOrUpdateFileSchema,
  CreatePipelineSchema,
  CreateProjectMilestoneSchema,
  CreateGroupMilestoneSchema,
  CreateRepositorySchema,
  CreateTagSchema,
  CreateWebhookSchema,
  CreateWikiPageSchema,
  DeleteBranchSchema,
  GetProtectedBranchSchema,
  ListProtectedBranchesSchema,
  ProtectBranchSchema,
  UnprotectBranchSchema,
  UpdateDefaultBranchSchema,
  DeleteGroupMilestoneSchema,
  DeleteIssueSchema,
  DeleteIssueEmojiReactionSchema,
  DeleteIssueNoteEmojiReactionSchema,
  DeleteLabelSchema,
  DeleteMergeRequestDiscussionNoteSchema,
  DeleteMergeRequestNoteSchema,
  DeleteMergeRequestEmojiReactionSchema,
  DeleteProjectMilestoneSchema,
  DeleteTagSchema,
  DeleteWebhookSchema,
  DeleteWikiPageSchema,
  DownloadAttachmentSchema,
  DownloadAttachmentRemoteSchema,
  DownloadJobArtifactsSchema,
  DownloadJobArtifactsRemoteSchema,
  EditProjectMilestoneSchema,
  EditGroupMilestoneSchema,
  ForkRepositorySchema,
  HealthCheckSchema,
  GetBranchSchema,
  GetBranchDiffsSchema,
  GetCommitDiffSchema,
  GetCommitSchema,
  GetDeploymentSchema,
  CreateDeploymentSchema,
  UpdateDeploymentSchema,
  DeploymentApprovalSchema,
  ListDeploymentMergeRequestsSchema,
  GetEnvironmentSchema,
  UpdateEnvironmentSchema,
  StopEnvironmentSchema,
  StopStaleEnvironmentsSchema,
  DeleteReviewAppEnvironmentsSchema,
  PipelineTriggerIdSchema,
  ListPipelineTriggersSchema,
  CreatePipelineTriggerSchema,
  UpdatePipelineTriggerSchema,
  TriggerPipelineSchema,
  GetFileContentsSchema,
  GetIssueSchema,
  GetJobArtifactFileSchema,
  GetLabelSchema,
  GetMergeRequestDiffsSchema,
  GetMergeRequestDiscussionSchema,
  GetMergeRequestNoteSchema,
  GetMergeRequestNotesSchema,
  GetMergeRequestSchema,
  GetMergeRequestVersionSchema,
  GetMilestoneIssuesSchema,
  GetMilestoneMergeRequestsSchema,
  GetGroupMilestoneSchema,
  GetGroupMilestoneIssuesSchema,
  GetGroupMilestoneMergeRequestsSchema,
  GetNamespaceSchema,
  GetPipelineJobOutputSchema,
  PipelineJobControlSchema,
  GetPipelineSchema,
  UpdatePipelineMetadataSchema,
  DeletePipelineSchema,
  PipelineReportSchema,
  WaitForPipelineSchema,
  WaitForPipelineJobSchema,
  GetProjectEventsSchema,
  GetProjectMilestoneSchema,
  GetProjectSchema,
  GetRepositoryTreeSchema,
  GetTagSchema,
  GetUsersSchema,
  GetUserSchema,
  WhoAmISchema,
  GetWikiPageSchema,
  ListBranchesSchema,
  ListCommitsSchema,
  ListCommitStatusesSchema,
  ListDeploymentsSchema,
  ListEnvironmentsSchema,
  ListEventsSchema,
  ListGroupMilestonesSchema,
  ListGroupProjectsSchema,
  ListIssueDiscussionsSchema,
  ListIssuesSchema,
  ListLabelsSchema,
  ListMergeRequestDiscussionsSchema,
  ListMergeRequestPipelinesSchema,
  ListMergeRequestVersionsSchema,
  ListMergeRequestsSchema,
  ListNamespacesSchema,
  ListPipelineJobsSchema,
  ValidateCiLintSchema,
  ListPipelinesSchema,
  ListPipelineSchedulesSchema,
  GetPipelineScheduleSchema,
  CreatePipelineScheduleSchema,
  UpdatePipelineScheduleSchema,
  DeletePipelineScheduleSchema,
  TakeOwnershipPipelineScheduleSchema,
  CreatePipelineScheduleVariableSchema,
  UpdatePipelineScheduleVariableSchema,
  DeletePipelineScheduleVariableSchema,
  ListGroupMembersSchema,
  ListProjectMembersSchema,
  ListProjectMilestonesSchema,
  ListProjectsSchema,
  ListTagsSchema,
  ListWebhooksSchema,
  ListWikiPagesSchema,
  MarkdownUploadSchema,
  MarkdownUploadRemoteSchema,
  MergeMergeRequestSchema,
  MyIssuesSchema,
  PlayPipelineJobSchema,
  PushFilesSchema,
  RetryPipelineJobSchema,
  RetryPipelineSchema,
  SearchCodeSchema,
  SearchGroupCodeSchema,
  SearchProjectCodeSchema,
  SearchRepositoriesSchema,
  UpdateIssueNoteSchema,
  UpdateIssueSchema,
  UpdateIssueDescriptionPatchSchema,
  UpdateLabelSchema,
  UpdateProjectSchema,
  UpdateMergeRequestDiscussionNoteSchema,
  UpdateMergeRequestNoteSchema,
  UpdateMergeRequestSchema,
  UpdateWebhookSchema,
  UpdateWikiPageSchema,
  ListProjectVariablesSchema,
  GetProjectVariableSchema,
  CreateProjectVariableSchema,
  UpdateProjectVariableSchema,
  DeleteProjectVariableSchema,
  ListGroupVariablesSchema,
  GetGroupVariableSchema,
  CreateGroupVariableSchema,
  UpdateGroupVariableSchema,
  DeleteGroupVariableSchema,
} from "../schemas.js";

const IS_REMOTE = SSE || STREAMABLE_HTTP;

// Define all available tools
export const allTools = [
  {
    name: "merge_merge_request",
    description: "Merge a merge request",
    inputSchema: toJSONSchema(MergeMergeRequestSchema),
  },
  {
    name: "list_merge_request_pipelines",
    description: "List pipelines for a merge request with pagination",
    inputSchema: toJSONSchema(ListMergeRequestPipelinesSchema),
  },
  {
    name: "create_or_update_file",
    description: "Create or update a file in a GitLab project",
    inputSchema: toJSONSchema(CreateOrUpdateFileSchema),
  },
  {
    name: "search_repositories",
    description: "Search for GitLab projects",
    inputSchema: toJSONSchema(SearchRepositoriesSchema),
  },
  {
    name: "create_repository",
    description: "Create a new GitLab project",
    inputSchema: toJSONSchema(CreateRepositorySchema),
  },
  {
    name: "create_group",
    description: "Create new group or subgroup",
    inputSchema: toJSONSchema(CreateGroupSchema),
  },
  {
    name: "get_file_contents",
    description: "Get contents of a file or directory from a GitLab project",
    inputSchema: toJSONSchema(GetFileContentsSchema),
  },
  {
    name: "push_files",
    description: "Push multiple files in a single commit",
    inputSchema: toJSONSchema(PushFilesSchema),
  },
  {
    name: "create_issue",
    description: "Create a new issue",
    inputSchema: toJSONSchema(CreateIssueSchema),
  },
  {
    name: "create_merge_request",
    description: "Create a new merge request",
    inputSchema: toJSONSchema(CreateMergeRequestSchema),
  },
  {
    name: "fork_repository",
    description: "Fork a project to your account or specified namespace",
    inputSchema: toJSONSchema(ForkRepositorySchema),
  },
  {
    name: "create_branch",
    description: "Create a new branch",
    inputSchema: toJSONSchema(CreateBranchSchema),
  },
  {
    name: "get_branch",
    description: "Get branch details (commit, protection status)",
    inputSchema: toJSONSchema(GetBranchSchema),
  },
  {
    name: "list_branches",
    description: "List branches in project with search filter",
    inputSchema: toJSONSchema(ListBranchesSchema),
  },
  {
    name: "delete_branch",
    description: "Delete branch from project",
    inputSchema: toJSONSchema(DeleteBranchSchema),
  },
  {
    name: "list_protected_branches",
    description: "List protected branches in a project, supports search filter",
    inputSchema: toJSONSchema(ListProtectedBranchesSchema),
  },
  {
    name: "get_protected_branch",
    description: "Get details of a single protected branch (access levels, force push settings)",
    inputSchema: toJSONSchema(GetProtectedBranchSchema),
  },
  {
    name: "protect_branch",
    description: "Protect a repository branch (set push/merge/unprotect access levels)",
    inputSchema: toJSONSchema(ProtectBranchSchema),
  },
  {
    name: "unprotect_branch",
    description: "Remove protection from a previously protected branch",
    inputSchema: toJSONSchema(UnprotectBranchSchema),
  },
  {
    name: "update_default_branch",
    description: "Change the default branch of a project",
    inputSchema: toJSONSchema(UpdateDefaultBranchSchema),
  },
  {
    name: "get_merge_request",
    description:
      "Get details of a merge request (mergeRequestIid or branchName required). Set include_summaries=true for deployment/commit/approval summaries",
    inputSchema: toJSONSchema(GetMergeRequestSchema),
  },
  {
    name: "get_merge_request_diffs",
    description: "Get the changes/diffs of a merge request (mergeRequestIid or branchName required)",
    inputSchema: toJSONSchema(GetMergeRequestDiffsSchema),
  },
  {
    name: "list_merge_request_versions",
    description: "List all versions of a merge request",
    inputSchema: toJSONSchema(ListMergeRequestVersionsSchema),
  },
  {
    name: "get_merge_request_version",
    description: "Get a specific version of a merge request",
    inputSchema: toJSONSchema(GetMergeRequestVersionSchema),
  },
  {
    name: "get_branch_diffs",
    description: "Get diffs between two branches or commits",
    inputSchema: toJSONSchema(GetBranchDiffsSchema),
  },
  {
    name: "update_merge_request",
    description: "Update a merge request (mergeRequestIid or branchName required)",
    inputSchema: toJSONSchema(UpdateMergeRequestSchema),
  },
  {
    name: "create_note",
    description: "Create a new note (comment) to an issue or merge request",
    inputSchema: toJSONSchema(CreateNoteSchema),
  },
  {
    name: "create_merge_request_thread",
    description: "Create a new thread on a merge request",
    inputSchema: toJSONSchema(CreateMergeRequestThreadSchema),
  },
  {
    name: "mr_discussions",
    description: "List discussion items for a merge request",
    inputSchema: toJSONSchema(ListMergeRequestDiscussionsSchema),
  },
  {
    name: "get_merge_request_discussion",
    description: "Get a single discussion item for a merge request",
    inputSchema: toJSONSchema(GetMergeRequestDiscussionSchema),
  },
  {
    name: "delete_merge_request_discussion_note",
    description: "Delete a discussion note on a merge request",
    inputSchema: toJSONSchema(DeleteMergeRequestDiscussionNoteSchema),
  },
  {
    name: "update_merge_request_discussion_note",
    description: "Update a discussion note on a merge request",
    inputSchema: toJSONSchema(UpdateMergeRequestDiscussionNoteSchema),
  },
  {
    name: "create_merge_request_discussion_note",
    description: "Add a new discussion note to an existing merge request thread",
    inputSchema: toJSONSchema(CreateMergeRequestDiscussionNoteSchema),
  },
  {
    name: "create_merge_request_note",
    description: "Add a new note to a merge request",
    inputSchema: toJSONSchema(CreateMergeRequestNoteSchema),
  },
  {
    name: "delete_merge_request_note",
    description: "Delete an existing merge request note",
    inputSchema: toJSONSchema(DeleteMergeRequestNoteSchema),
  },
  {
    name: "get_merge_request_note",
    description: "Get a specific note for a merge request",
    inputSchema: toJSONSchema(GetMergeRequestNoteSchema),
  },
  {
    name: "get_merge_request_notes",
    description: "List notes for a merge request",
    inputSchema: toJSONSchema(GetMergeRequestNotesSchema),
  },
  {
    name: "update_merge_request_note",
    description: "Modify an existing merge request note",
    inputSchema: toJSONSchema(UpdateMergeRequestNoteSchema),
  },
  // --- Merge request emoji reaction tools ---
  {
    name: "list_merge_request_emoji_reactions",
    description: "List all emoji reactions on a merge request",
    inputSchema: toJSONSchema(ListMergeRequestEmojiReactionsSchema),
  },
  {
    name: "create_merge_request_emoji_reaction",
    description: "Add an emoji reaction to a merge request (e.g. thumbsup, rocket, eyes)",
    inputSchema: toJSONSchema(CreateMergeRequestEmojiReactionSchema),
  },
  {
    name: "delete_merge_request_emoji_reaction",
    description: "Remove an emoji reaction from a merge request",
    inputSchema: toJSONSchema(DeleteMergeRequestEmojiReactionSchema),
  },
  {
    name: "update_issue_note",
    description: "Modify an existing issue thread note",
    inputSchema: toJSONSchema(UpdateIssueNoteSchema),
  },
  {
    name: "create_issue_note",
    description: "Add a note to an issue, optionally replying to a discussion thread",
    inputSchema: toJSONSchema(CreateIssueNoteSchema),
  },
  // --- Issue emoji reaction tools ---
  {
    name: "list_issue_emoji_reactions",
    description: "List all emoji reactions on an issue",
    inputSchema: toJSONSchema(ListIssueEmojiReactionsSchema),
  },
  {
    name: "list_issue_note_emoji_reactions",
    description: "List all emoji reactions on an issue note. Pass discussion_id for discussion thread replies.",
    inputSchema: toJSONSchema(ListIssueNoteEmojiReactionsSchema),
  },
  {
    name: "create_issue_emoji_reaction",
    description: "Add an emoji reaction to an issue (e.g. thumbsup, rocket, eyes)",
    inputSchema: toJSONSchema(CreateIssueEmojiReactionSchema),
  },
  {
    name: "delete_issue_emoji_reaction",
    description: "Remove an emoji reaction from an issue",
    inputSchema: toJSONSchema(DeleteIssueEmojiReactionSchema),
  },
  {
    name: "create_issue_note_emoji_reaction",
    description: "Add an emoji reaction to an issue note. Pass discussion_id for discussion thread replies.",
    inputSchema: toJSONSchema(CreateIssueNoteEmojiReactionSchema),
  },
  {
    name: "delete_issue_note_emoji_reaction",
    description: "Remove an emoji reaction from an issue note. Pass discussion_id for discussion thread replies.",
    inputSchema: toJSONSchema(DeleteIssueNoteEmojiReactionSchema),
  },
  {
    name: "list_issues",
    description: "List issues (default: created by current user; use scope='all' for all)",
    inputSchema: toJSONSchema(ListIssuesSchema),
  },
  {
    name: "my_issues",
    description: "List issues assigned to the authenticated user",
    inputSchema: toJSONSchema(MyIssuesSchema),
  },
  {
    name: "get_issue",
    description:
      "Get details of a specific issue. Returns a slim milestone by default; set full_response=true for the complete milestone object",
    inputSchema: toJSONSchema(GetIssueSchema),
  },
  {
    name: "update_issue",
    description:
      "Update an issue. Returns a slim confirmation by default; set full_response=true for the complete updated issue object",
    inputSchema: toJSONSchema(UpdateIssueSchema),
  },
  {
    name: "update_issue_description_patch",
    description:
      "Apply a patch (search/replace or unified diff) to an issue description. " +
      "Reduces token usage by allowing small changes without sending the full description. " +
      "Supports dry_run to preview changes and create_note to summarize updates.",
    inputSchema: toJSONSchema(UpdateIssueDescriptionPatchSchema),
  },
  {
    name: "delete_issue",
    description: "Delete an issue",
    inputSchema: toJSONSchema(DeleteIssueSchema),
  },
  {
    name: "list_todos",
    description: "List GitLab to-do items for the current user",
    inputSchema: toJSONSchema(ListTodosSchema),
  },
  {
    name: "mark_todo_done",
    description: "Mark a GitLab to-do item as done",
    inputSchema: toJSONSchema(MarkTodoDoneSchema),
  },
  {
    name: "mark_all_todos_done",
    description: "Mark all pending GitLab to-do items as done for the current user",
    inputSchema: toJSONSchema(MarkAllTodosDoneSchema),
  },
  {
    name: "list_issue_discussions",
    description: "List discussions for an issue",
    inputSchema: toJSONSchema(ListIssueDiscussionsSchema),
  },
  {
    name: "list_namespaces",
    description: "List all namespaces (users and groups) available to the current user. Filter by kind='group' for groups only.",
    inputSchema: toJSONSchema(ListNamespacesSchema),
  },
  {
    name: "get_namespace",
    description: "Get details of a namespace (user or group) by ID or path. Groups are namespaces with kind='group'.",
    inputSchema: toJSONSchema(GetNamespaceSchema),
  },
  {
    name: "get_project",
    description: "Get details of a specific project",
    inputSchema: toJSONSchema(GetProjectSchema),
  },
  {
    name: "list_projects",
    description: "List projects accessible by the current user",
    inputSchema: toJSONSchema(ListProjectsSchema),
  },
  {
    name: "update_project",
    description: "Update project settings such as description, visibility, default branch, and feature access levels",
    inputSchema: toJSONSchema(UpdateProjectSchema),
  },
  {
    name: "list_project_members",
    description: "List members of a GitLab project",
    inputSchema: toJSONSchema(ListProjectMembersSchema),
  },
  {
    name: "list_group_members",
    description: "List members of a GitLab group with optional name or username search",
    inputSchema: toJSONSchema(ListGroupMembersSchema),
  },
  {
    name: "list_labels",
    description: "List labels for a project",
    inputSchema: toJSONSchema(ListLabelsSchema),
  },
  {
    name: "get_label",
    description: "Get a single label from a project",
    inputSchema: toJSONSchema(GetLabelSchema),
  },
  {
    name: "create_label",
    description: "Create a new label in a project",
    inputSchema: toJSONSchema(CreateLabelSchema),
  },
  {
    name: "update_label",
    description: "Update an existing label in a project",
    inputSchema: toJSONSchema(UpdateLabelSchema),
  },
  {
    name: "delete_label",
    description: "Delete a label from a project",
    inputSchema: toJSONSchema(DeleteLabelSchema),
  },
  {
    name: "list_group_projects",
    description: "List projects in a group",
    inputSchema: toJSONSchema(ListGroupProjectsSchema),
  },
  {
    name: "list_wiki_pages",
    description: "List wiki pages in a project",
    inputSchema: toJSONSchema(ListWikiPagesSchema),
  },
  {
    name: "get_wiki_page",
    description: "Get details of a specific wiki page",
    inputSchema: toJSONSchema(GetWikiPageSchema),
  },
  {
    name: "create_wiki_page",
    description: "Create a wiki page in a project",
    inputSchema: toJSONSchema(CreateWikiPageSchema),
  },
  {
    name: "update_wiki_page",
    description: "Update a wiki page in a project",
    inputSchema: toJSONSchema(UpdateWikiPageSchema),
  },
  {
    name: "delete_wiki_page",
    description: "Delete a wiki page from a project",
    inputSchema: toJSONSchema(DeleteWikiPageSchema),
  },
  {
    name: "get_repository_tree",
    description: "List files and directories in a repository",
    inputSchema: toJSONSchema(GetRepositoryTreeSchema),
  },
  {
    name: "list_pipelines",
    description: "List pipelines with filtering options",
    inputSchema: toJSONSchema(ListPipelinesSchema),
  },
  {
    name: "get_pipeline",
    description: "Get details of a specific pipeline",
    inputSchema: toJSONSchema(GetPipelineSchema),
  },
  { name: "get_pipeline_test_report", description: "Get pipeline test report", inputSchema: toJSONSchema(PipelineReportSchema) },
  { name: "get_pipeline_test_report_summary", description: "Get pipeline test report summary", inputSchema: toJSONSchema(PipelineReportSchema) },
  { name: "delete_pipeline", description: "Delete a pipeline. Requires the project Owner role, cannot be undone, and does not automatically delete child pipelines.", inputSchema: toJSONSchema(DeletePipelineSchema) },
  { name: "update_pipeline_metadata", description: "Update pipeline metadata", inputSchema: toJSONSchema(UpdatePipelineMetadataSchema) },
  {
    name: "list_deployments",
    description: "List deployments with filtering options",
    inputSchema: toJSONSchema(ListDeploymentsSchema),
  },
  {
    name: "get_deployment",
    description: "Get deployment details, including approval_summary, approvals, and pending_approval_count when GitLab provides them",
    inputSchema: toJSONSchema(GetDeploymentSchema),
  },
  { name: "create_deployment", description: "Create a deployment", inputSchema: toJSONSchema(CreateDeploymentSchema) },
  { name: "update_deployment", description: "Update a deployment status", inputSchema: toJSONSchema(UpdateDeploymentSchema) },
  { name: "delete_deployment", description: "Delete a deployment", inputSchema: toJSONSchema(GetDeploymentSchema) },
  { name: "list_deployment_merge_requests", description: "List merge requests shipped with a deployment", inputSchema: toJSONSchema(ListDeploymentMergeRequestsSchema) },
  { name: "approve_deployment", description: "Approve or reject a protected-environment deployment", inputSchema: toJSONSchema(DeploymentApprovalSchema) },
  {
    name: "list_environments",
    description: "List environments in a project",
    inputSchema: toJSONSchema(ListEnvironmentsSchema),
  },
  { name: "update_environment", description: "Update an environment", inputSchema: toJSONSchema(UpdateEnvironmentSchema) },
  { name: "delete_environment", description: "Delete a stopped environment", inputSchema: toJSONSchema(GetEnvironmentSchema) },
  { name: "stop_environment", description: "Stop an environment", inputSchema: toJSONSchema(StopEnvironmentSchema) },
  { name: "stop_stale_environments", description: "Stop eligible stale environments; protected environments are excluded and environments are stopped, not deleted", inputSchema: toJSONSchema(StopStaleEnvironmentsSchema) },
  { name: "delete_review_app_environments", description: "Schedule deletion of stopped review-app environments one week later; dry_run defaults to true and actual scheduling requires dry_run=false", inputSchema: toJSONSchema(DeleteReviewAppEnvironmentsSchema) },
  { name: "list_pipeline_triggers", description: "List project pipeline trigger tokens", inputSchema: toJSONSchema(ListPipelineTriggersSchema) },
  { name: "get_pipeline_trigger", description: "Get a project pipeline trigger", inputSchema: toJSONSchema(PipelineTriggerIdSchema) },
  { name: "create_pipeline_trigger", description: "Create a project pipeline trigger", inputSchema: toJSONSchema(CreatePipelineTriggerSchema) },
  { name: "update_pipeline_trigger", description: "Update a project pipeline trigger", inputSchema: toJSONSchema(UpdatePipelineTriggerSchema) },
  { name: "delete_pipeline_trigger", description: "Delete a project pipeline trigger", inputSchema: toJSONSchema(PipelineTriggerIdSchema) },
  { name: "trigger_pipeline", description: "Trigger a pipeline with a pipeline trigger token", inputSchema: toJSONSchema(TriggerPipelineSchema) },
  {
    name: "list_pipeline_jobs",
    description: "List all jobs in a specific pipeline",
    inputSchema: toJSONSchema(ListPipelineJobsSchema),
  },
  {
    name: "get_pipeline_job",
    description: "Get details of a GitLab pipeline job number",
    inputSchema: toJSONSchema(PipelineJobControlSchema),
  },
  {
    name: "get_pipeline_job_output",
    description: "Get the output/trace of a pipeline job with optional pagination",
    inputSchema: toJSONSchema(GetPipelineJobOutputSchema),
  },
  {
    name: "validate_ci_lint",
    description: "Validate provided GitLab CI/CD YAML content for a project",
    inputSchema: toJSONSchema(ValidateCiLintSchema),
  },
  {
    name: "create_pipeline",
    description: "Create a new pipeline for a branch or tag",
    inputSchema: toJSONSchema(CreatePipelineSchema),
  },
  {
    name: "retry_pipeline",
    description: "Retry a failed or canceled pipeline",
    inputSchema: toJSONSchema(RetryPipelineSchema),
  },
  {
    name: "cancel_pipeline",
    description: "Cancel a running pipeline",
    inputSchema: toJSONSchema(CancelPipelineSchema),
  },
  {
    name: "list_pipeline_schedules",
    description: "List pipeline schedules in a project, optionally filtered to active or inactive",
    inputSchema: toJSONSchema(ListPipelineSchedulesSchema),
  },
  {
    name: "get_pipeline_schedule",
    description:
      "Get details of a specific pipeline schedule, including its variables and last pipeline",
    inputSchema: toJSONSchema(GetPipelineScheduleSchema),
  },
  {
    name: "create_pipeline_schedule",
    description: "Create a new pipeline schedule for a branch or tag",
    inputSchema: toJSONSchema(CreatePipelineScheduleSchema),
  },
  {
    name: "update_pipeline_schedule",
    description: "Update an existing pipeline schedule",
    inputSchema: toJSONSchema(UpdatePipelineScheduleSchema),
  },
  {
    name: "delete_pipeline_schedule",
    description: "Delete a pipeline schedule",
    inputSchema: toJSONSchema(DeletePipelineScheduleSchema),
  },
  {
    name: "take_ownership_pipeline_schedule",
    description: "Take ownership of a pipeline schedule",
    inputSchema: toJSONSchema(TakeOwnershipPipelineScheduleSchema),
  },
  {
    name: "create_pipeline_schedule_variable",
    description: "Create a variable for a pipeline schedule",
    inputSchema: toJSONSchema(CreatePipelineScheduleVariableSchema),
  },
  {
    name: "update_pipeline_schedule_variable",
    description: "Update a variable of a pipeline schedule",
    inputSchema: toJSONSchema(UpdatePipelineScheduleVariableSchema),
  },
  {
    name: "delete_pipeline_schedule_variable",
    description: "Delete a variable from a pipeline schedule",
    inputSchema: toJSONSchema(DeletePipelineScheduleVariableSchema),
  },
  {
    name: "play_pipeline_job",
    description: "Run a manual pipeline job",
    inputSchema: toJSONSchema(PlayPipelineJobSchema),
  },
  {
    name: "retry_pipeline_job",
    description: "Retry a failed or canceled pipeline job",
    inputSchema: toJSONSchema(RetryPipelineJobSchema),
  },
  {
    name: "cancel_pipeline_job",
    description: "Cancel a running pipeline job",
    inputSchema: toJSONSchema(CancelPipelineJobSchema),
  },
  { name: "erase_pipeline_job", description: "Erase a pipeline job log and artifacts", inputSchema: toJSONSchema(ErasePipelineJobSchema) },
  { name: "wait_for_pipeline", description: "Wait for a pipeline to reach a terminal status", inputSchema: toJSONSchema(WaitForPipelineSchema) },
  { name: "wait_for_job", description: "Wait for a job to reach a terminal status", inputSchema: toJSONSchema(WaitForPipelineJobSchema) },
  {
    name: "download_job_artifacts",
    description: IS_REMOTE
      ? "Get a download URL for a job's artifact archive (zip)"
      : "Download job artifact archive (zip) and save to a local path",
    inputSchema: IS_REMOTE
      ? toJSONSchema(DownloadJobArtifactsRemoteSchema)
      : toJSONSchema(DownloadJobArtifactsSchema),
  },
  {
    name: "get_job_artifact_file",
    description: "Get content of a single file from a job's artifacts",
    inputSchema: toJSONSchema(GetJobArtifactFileSchema),
  },
  {
    name: "list_merge_requests",
    description: "List merge requests (without project_id: user's MRs; with project_id: project MRs)",
    inputSchema: toJSONSchema(ListMergeRequestsSchema),
  },
  {
    name: "list_milestones",
    description: "List milestones with filtering options",
    inputSchema: toJSONSchema(ListProjectMilestonesSchema),
  },
  {
    name: "get_milestone",
    description: "Get details of a specific milestone",
    inputSchema: toJSONSchema(GetProjectMilestoneSchema),
  },
  {
    name: "create_milestone",
    description: "Create a new milestone",
    inputSchema: toJSONSchema(CreateProjectMilestoneSchema),
  },
  {
    name: "edit_milestone",
    description: "Edit an existing milestone",
    inputSchema: toJSONSchema(EditProjectMilestoneSchema),
  },
  {
    name: "delete_milestone",
    description: "Delete a milestone",
    inputSchema: toJSONSchema(DeleteProjectMilestoneSchema),
  },
  {
    name: "get_milestone_issue",
    description: "Get issues associated with a specific milestone",
    inputSchema: toJSONSchema(GetMilestoneIssuesSchema),
  },
  {
    name: "get_milestone_merge_requests",
    description: "Get merge requests associated with a specific milestone",
    inputSchema: toJSONSchema(GetMilestoneMergeRequestsSchema),
  },
  {
    name: "list_group_milestones",
    description: "List group milestones with filtering options",
    inputSchema: toJSONSchema(ListGroupMilestonesSchema),
  },
  {
    name: "get_group_milestone",
    description: "Get details of a specific group milestone",
    inputSchema: toJSONSchema(GetGroupMilestoneSchema),
  },
  {
    name: "create_group_milestone",
    description: "Create a new group milestone",
    inputSchema: toJSONSchema(CreateGroupMilestoneSchema),
  },
  {
    name: "edit_group_milestone",
    description: "Edit an existing group milestone",
    inputSchema: toJSONSchema(EditGroupMilestoneSchema),
  },
  {
    name: "delete_group_milestone",
    description: "Delete a group milestone",
    inputSchema: toJSONSchema(DeleteGroupMilestoneSchema),
  },
  {
    name: "get_group_milestone_issue",
    description: "Get issues associated with a specific group milestone",
    inputSchema: toJSONSchema(GetGroupMilestoneIssuesSchema),
  },
  {
    name: "get_group_milestone_merge_requests",
    description: "Get merge requests associated with a specific group milestone",
    inputSchema: toJSONSchema(GetGroupMilestoneMergeRequestsSchema),
  },
  {
    name: "get_users",
    description: "Get GitLab user details by usernames",
    inputSchema: toJSONSchema(GetUsersSchema),
  },
  {
    name: "get_user",
    description: "Get user details by ID",
    inputSchema: toJSONSchema(GetUserSchema),
  },
  {
    name: "whoami",
    description: "Get current authenticated user details",
    inputSchema: toJSONSchema(WhoAmISchema),
  },
  {
    name: "list_commits",
    description: "List repository commits with filtering options",
    inputSchema: toJSONSchema(ListCommitsSchema),
  },
  {
    name: "get_commit",
    description: "Get details of a specific commit",
    inputSchema: toJSONSchema(GetCommitSchema),
  },
  {
    name: "get_commit_diff",
    description: "Get changes/diffs of a specific commit",
    inputSchema: toJSONSchema(GetCommitDiffSchema),
  },
  {
    name: "list_commit_statuses",
    description: "List statuses for a commit",
    inputSchema: toJSONSchema(ListCommitStatusesSchema),
  },
  {
    name: "create_commit_status",
    description: "Create or update the status of a commit",
    inputSchema: toJSONSchema(CreateCommitStatusSchema),
  },
  {
    name: "upload_markdown",
    description: IS_REMOTE
      ? "Upload base64-encoded content for use in markdown"
      : "Upload a file for use in markdown content",
    inputSchema: IS_REMOTE
      ? toJSONSchema(MarkdownUploadRemoteSchema)
      : toJSONSchema(MarkdownUploadSchema),
  },
  {
    name: "download_attachment",
    description: IS_REMOTE
      ? "Download an uploaded file from a project (images returned inline as base64, other files returned as download URL)"
      : "Download an uploaded file from a project (images returned as base64; use local_path to save to disk)",
    inputSchema: IS_REMOTE
      ? toJSONSchema(DownloadAttachmentRemoteSchema)
      : toJSONSchema(DownloadAttachmentSchema),
  },
  {
    name: "health_check",
    description:
      "Verify server status and authentication. Always reports the MCP server version (mcp_server_version). When authenticated, also reports the GitLab instance version from GET /api/v4/version (version, revision, enterprise). Version lookup failures do not fail the health check — those fields are omitted.",
    inputSchema: toJSONSchema(HealthCheckSchema),
  },
  {
    name: "list_events",
    description: "List events for the authenticated user (before/after: YYYY-MM-DD)",
    inputSchema: toJSONSchema(ListEventsSchema),
  },
  {
    name: "get_project_events",
    description: "List events for a project (before/after: YYYY-MM-DD)",
    inputSchema: toJSONSchema(GetProjectEventsSchema),
  },
  {
    name: "list_tags",
    description: "List repository tags for a project",
    inputSchema: toJSONSchema(ListTagsSchema),
  },
  {
    name: "get_tag",
    description: "Get a repository tag by name",
    inputSchema: toJSONSchema(GetTagSchema),
  },
  {
    name: "create_tag",
    description: "Create a new repository tag",
    inputSchema: toJSONSchema(CreateTagSchema),
  },
  {
    name: "delete_tag",
    description: "Delete a repository tag",
    inputSchema: toJSONSchema(DeleteTagSchema),
  },
  // --- Work item tools (GraphQL-based) ---
  // --- Work item emoji reaction tools (GraphQL-based) ---
  // --- Incident timeline event tools ---
  {
    name: "list_webhooks",
    description: "List webhooks for a project or group",
    inputSchema: toJSONSchema(ListWebhooksSchema),
  },
  {
    name: "create_webhook",
    description: "Create a webhook on a project or group",
    inputSchema: toJSONSchema(CreateWebhookSchema),
  },
  {
    name: "update_webhook",
    description: "Update an existing project or group webhook",
    inputSchema: toJSONSchema(UpdateWebhookSchema),
  },
  {
    name: "delete_webhook",
    description: "Delete a project or group webhook",
    inputSchema: toJSONSchema(DeleteWebhookSchema),
  },
  {
    name: "search_code",
    description: "Search for code across all projects (requires advanced search or Zoekt)",
    inputSchema: toJSONSchema(SearchCodeSchema),
  },
  {
    name: "search_project_code",
    description: "Search for code within a specific project (requires advanced search or Zoekt)",
    inputSchema: toJSONSchema(SearchProjectCodeSchema),
  },
  {
    name: "search_group_code",
    description: "Search for code within a specific group (requires advanced search or Zoekt)",
    inputSchema: toJSONSchema(SearchGroupCodeSchema),
  },
  // --- CI/CD Variable tools ---
  {
    name: "list_project_variables",
    description: "List CI/CD variables for a project",
    inputSchema: toJSONSchema(ListProjectVariablesSchema),
  },
  {
    name: "get_project_variable",
    description: "Get a single CI/CD variable from a project",
    inputSchema: toJSONSchema(GetProjectVariableSchema),
  },
  {
    name: "create_project_variable",
    description: "Create a CI/CD variable for a project",
    inputSchema: toJSONSchema(CreateProjectVariableSchema),
  },
  {
    name: "update_project_variable",
    description: "Update an existing CI/CD variable in a project",
    inputSchema: toJSONSchema(UpdateProjectVariableSchema),
  },
  {
    name: "delete_project_variable",
    description: "Delete a CI/CD variable from a project",
    inputSchema: toJSONSchema(DeleteProjectVariableSchema),
  },
  {
    name: "list_group_variables",
    description: "List CI/CD variables for a group",
    inputSchema: toJSONSchema(ListGroupVariablesSchema),
  },
  {
    name: "get_group_variable",
    description: "Get a single CI/CD variable from a group",
    inputSchema: toJSONSchema(GetGroupVariableSchema),
  },
  {
    name: "create_group_variable",
    description: "Create a CI/CD variable for a group",
    inputSchema: toJSONSchema(CreateGroupVariableSchema),
  },
  {
    name: "update_group_variable",
    description: "Update an existing CI/CD variable in a group",
    inputSchema: toJSONSchema(UpdateGroupVariableSchema),
  },
  {
    name: "delete_group_variable",
    description: "Delete a CI/CD variable from a group",
    inputSchema: toJSONSchema(DeleteGroupVariableSchema),
  },
  // --- Dependency proxy tools ---
  // --- Vulnerability tools ---
  // --- GitLab Orbit (knowledge graph) tools ---
  // --- Meta tool: Dynamic tool discovery ---
  {
    name: "discover_tools",
    description:
      "Discover and activate additional tool categories for this session. Call without arguments to see available categories.",
    inputSchema: {
      type: "object" as const,
      properties: {
        category: {
          type: "string",
          description:
            "Toolset category to activate (e.g. 'pipelines', 'wiki'). Omit to list available categories.",
        },
      },
    },
  },
];

// Define which tools are read-only
export const readOnlyTools = new Set([
  "discover_tools",
  "health_check",
  "search_repositories",
  "search_code",
  "search_project_code",
  "search_group_code",
  "get_file_contents",
  "get_merge_request",
  "get_merge_request_diffs",
  "list_merge_request_versions",
  "get_merge_request_version",
  "get_branch",
  "list_branches",
  "get_branch_diffs",
  "list_protected_branches",
  "get_protected_branch",
  "list_merge_request_pipelines",
  "get_merge_request_note",
  "get_merge_request_notes",
  "mr_discussions",
  "get_merge_request_discussion",
  "list_issues",
  "list_todos",
  "my_issues",
  "list_merge_requests",
  "get_issue",
  "list_issue_discussions",
  "list_namespaces",
  "get_namespace",
  "get_project",
  "list_projects",
  "list_project_members",
  "list_group_members",
  "get_pipeline",
  "get_pipeline_test_report",
  "get_pipeline_test_report_summary",
  "list_pipelines",
  "list_pipeline_schedules",
  "get_pipeline_schedule",
  "list_deployments",
  "get_deployment",
  "list_deployment_merge_requests",
  "list_environments",
  "list_pipeline_triggers",
  "get_pipeline_trigger",
  "list_pipeline_jobs",
  "get_pipeline_job",
  "get_pipeline_job_output",
  "wait_for_pipeline",
  "wait_for_job",
  "validate_ci_lint",
  "download_job_artifacts",
  "get_job_artifact_file",
  "list_labels",
  "get_label",
  "list_group_projects",
  "get_repository_tree",
  "list_milestones",
  "get_milestone",
  "get_milestone_issue",
  "get_milestone_merge_requests",
  "list_group_milestones",
  "get_group_milestone",
  "get_group_milestone_issue",
  "get_group_milestone_merge_requests",
  "list_wiki_pages",
  "get_wiki_page",
  "get_users",
  "get_user",
  "whoami",
  "list_commits",
  "get_commit",
  "get_commit_diff",
  "list_commit_statuses",
  "get_group_iteration",
  "download_attachment",
  "list_events",
  "get_project_events",
  "list_tags",
  "get_tag",
  "list_merge_request_emoji_reactions",
  "list_issue_emoji_reactions",
  "list_issue_note_emoji_reactions",
  "list_webhooks",
  "list_project_variables",
  "get_project_variable",
  "list_group_variables",
  "get_group_variable",
]);

// Define which tools are destructive (data loss potential)
export const destructiveTools = new Set([
  "delete_pipeline",
  "erase_pipeline_job",
  // Teardown verbs without a `delete_` prefix tear down live pipelines/environments too.
  "cancel_pipeline",
  "cancel_pipeline_job",
  "delete_deployment",
  "approve_deployment",
  "delete_environment",
  "stop_environment",
  "stop_stale_environments",
  "delete_review_app_environments",
  "delete_pipeline_trigger",
  "delete_issue",
  "delete_label",
  "delete_wiki_page",
  "delete_milestone",
  "delete_group_milestone",
  "delete_tag",
  "delete_webhook",
  "delete_merge_request_note",
  "delete_merge_request_discussion_note",
  "delete_merge_request_emoji_reaction",
  "delete_issue_emoji_reaction",
  "delete_issue_note_emoji_reaction",
  "delete_branch",
  "unprotect_branch",
  "protect_branch",
  "update_default_branch",
  "merge_merge_request",
  "push_files",
  "delete_project_variable",
  "delete_group_variable",
  "delete_pipeline_schedule",
  "delete_pipeline_schedule_variable",
]);

// Tools blocked in "modify" permission mode: permanent deletions plus destructive
// teardown verbs that do not start with `delete_` (see the comment inside).
// Invariant: deleteTools is a subset of destructiveTools — every blocked tool is also
// annotated with `destructiveHint`. Add new blocked tools to both sets.
export const deleteTools = new Set([
  "delete_pipeline",
  "erase_pipeline_job",
  "delete_deployment",
  "delete_environment",
  "delete_review_app_environments",
  "delete_pipeline_trigger",
  "delete_branch",
  "delete_group_variable",
  "delete_group_milestone",
  "delete_issue",
  "delete_issue_emoji_reaction",
  "delete_issue_note_emoji_reaction",
  "delete_label",
  "delete_merge_request_discussion_note",
  "delete_merge_request_emoji_reaction",
  "delete_merge_request_note",
  "delete_milestone",
  "delete_pipeline_schedule",
  "delete_pipeline_schedule_variable",
  "delete_project_variable",
  "delete_tag",
  "delete_webhook",
  "delete_wiki_page",
  // Destructive teardown operations whose names do not start with `delete_`:
  // stopping/cancelling live pipelines and environments, and removing branch protection.
  "cancel_pipeline",
  "cancel_pipeline_job",
  "stop_environment",
  "stop_stale_environments",
  "unprotect_branch",
]);

// Define which tools are related to wiki and can be toggled by USE_GITLAB_WIKI
export const wikiToolNames = new Set([
  "list_wiki_pages",
  "get_wiki_page",
  "create_wiki_page",
  "update_wiki_page",
  "delete_wiki_page",
  "upload_wiki_attachment",
]);

// Define which tools are related to milestones and can be toggled by USE_MILESTONE
export const milestoneToolNames = new Set([
  "list_milestones",
  "get_milestone",
  "create_milestone",
  "edit_milestone",
  "delete_milestone",
  "get_milestone_issue",
  "get_milestone_merge_requests",
  "list_group_milestones",
  "get_group_milestone",
  "create_group_milestone",
  "edit_group_milestone",
  "delete_group_milestone",
  "get_group_milestone_issue",
  "get_group_milestone_merge_requests",
]);

// Define which tools are related to pipelines and can be toggled by USE_PIPELINE
export const pipelineToolNames = new Set([
  "list_pipelines",
  "get_pipeline",
  "get_pipeline_test_report",
  "get_pipeline_test_report_summary",
  "delete_pipeline",
  "update_pipeline_metadata",
  "list_deployments",
  "get_deployment",
  "create_deployment",
  "update_deployment",
  "delete_deployment",
  "list_deployment_merge_requests",
  "approve_deployment",
  "list_environments",
  "update_environment",
  "delete_environment",
  "stop_environment",
  "stop_stale_environments",
  "delete_review_app_environments",
  "list_pipeline_triggers",
  "get_pipeline_trigger",
  "create_pipeline_trigger",
  "update_pipeline_trigger",
  "delete_pipeline_trigger",
  "trigger_pipeline",
  "list_pipeline_jobs",
  "get_pipeline_job",
  "get_pipeline_job_output",
  "erase_pipeline_job",
  "wait_for_pipeline",
  "wait_for_job",
  "validate_ci_lint",
  "create_pipeline",
  "retry_pipeline",
  "cancel_pipeline",
  "list_pipeline_schedules",
  "get_pipeline_schedule",
  "create_pipeline_schedule",
  "update_pipeline_schedule",
  "delete_pipeline_schedule",
  "take_ownership_pipeline_schedule",
  "create_pipeline_schedule_variable",
  "update_pipeline_schedule_variable",
  "delete_pipeline_schedule_variable",
  "play_pipeline_job",
  "retry_pipeline_job",
  "cancel_pipeline_job",
  "download_job_artifacts",
  "get_job_artifact_file",
]);

// --- Toolset definitions ---

export type ToolsetId =
  | "merge_requests"
  | "issues"
  | "repositories"
  | "branches"
  | "projects"
  | "labels"
  | "ci"
  | "groups"
  | "pipelines"
  | "milestones"
  | "wiki"
  | "tags"
  | "users"
  | "webhooks"
  | "search"
  | "variables";

export interface ToolsetDefinition {
  readonly id: ToolsetId;
  readonly isDefault: boolean;
  readonly tools: ReadonlySet<string>;
}

export const TOOLSET_DEFINITIONS: readonly ToolsetDefinition[] = [
  {
    id: "merge_requests",
    isDefault: true,
    tools: new Set([
      "merge_merge_request",
      "get_branch",
      "list_branches",
      "list_merge_request_pipelines",
      "get_merge_request",
      "get_merge_request_diffs",
      "list_merge_request_versions",
      "get_merge_request_version",
      "update_merge_request",
      "create_merge_request",
      "list_merge_requests",
      "get_branch_diffs",
      "mr_discussions",
      "get_merge_request_discussion",
      "create_merge_request_note",
      "update_merge_request_note",
      "delete_merge_request_note",
      "get_merge_request_note",
      "get_merge_request_notes",
      "delete_merge_request_discussion_note",
      "update_merge_request_discussion_note",
      "create_merge_request_discussion_note",
      "create_merge_request_thread",
      "list_merge_request_emoji_reactions",
      "create_merge_request_emoji_reaction",
      "delete_merge_request_emoji_reaction",
    ]),
  },
  {
    id: "issues",
    isDefault: true,
    tools: new Set([
      "create_issue",
      "list_issues",
      "my_issues",
      "get_issue",
      "update_issue",
      "update_issue_description_patch",
      "delete_issue",
      "list_todos",
      "mark_todo_done",
      "mark_all_todos_done",
      "create_issue_note",
      "update_issue_note",
      "list_issue_discussions",
      "create_note",
      "list_issue_emoji_reactions",
      "list_issue_note_emoji_reactions",
      "create_issue_emoji_reaction",
      "delete_issue_emoji_reaction",
      "create_issue_note_emoji_reaction",
      "delete_issue_note_emoji_reaction",
    ]),
  },
  {
    id: "repositories",
    isDefault: true,
    tools: new Set([
      "search_repositories",
      "create_repository",
      "get_file_contents",
      "push_files",
      "create_or_update_file",
      "fork_repository",
      "get_repository_tree",
    ]),
  },
  {
    id: "branches",
    isDefault: true,
    tools: new Set([
      "create_branch",
      "get_branch",
      "list_branches",
      "delete_branch",
      "list_protected_branches",
      "get_protected_branch",
      "protect_branch",
      "unprotect_branch",
      "update_default_branch",
      "list_commits",
      "get_commit",
      "get_commit_diff",
      "list_commit_statuses",
      "create_commit_status",
    ]),
  },
  {
    id: "projects",
    isDefault: true,
    tools: new Set([
      "get_project",
      "list_projects",
      "update_project",
      "list_project_members",
      "list_group_members",
      "list_namespaces",
      "get_namespace",
      "list_group_projects",
      "health_check",
    ]),
  },
  {
    id: "labels",
    isDefault: true,
    tools: new Set([
      "list_labels",
      "get_label",
      "create_label",
      "update_label",
      "delete_label",
    ]),
  },
  {
    id: "ci",
    isDefault: true,
    tools: new Set([
      "validate_ci_lint",
    ]),
  },
  {
    id: "groups",
    isDefault: true,
    tools: new Set(["create_group"]),
  },
  {
    id: "pipelines",
    isDefault: false,
    tools: new Set([
      "list_pipelines",
      "get_pipeline",
      "get_pipeline_test_report",
      "get_pipeline_test_report_summary",
      "delete_pipeline",
      "update_pipeline_metadata",
      "list_deployments",
      "get_deployment",
      "create_deployment",
      "update_deployment",
      "delete_deployment",
      "list_deployment_merge_requests",
      "approve_deployment",
      "list_environments",
      "update_environment",
      "delete_environment",
      "stop_environment",
      "stop_stale_environments",
      "delete_review_app_environments",
      "list_pipeline_triggers",
      "get_pipeline_trigger",
      "create_pipeline_trigger",
      "update_pipeline_trigger",
      "delete_pipeline_trigger",
      "trigger_pipeline",
      "list_pipeline_jobs",
      "get_pipeline_job",
      "get_pipeline_job_output",
      "create_pipeline",
      "retry_pipeline",
      "cancel_pipeline",
      "list_pipeline_schedules",
      "get_pipeline_schedule",
      "create_pipeline_schedule",
      "update_pipeline_schedule",
      "delete_pipeline_schedule",
      "take_ownership_pipeline_schedule",
      "create_pipeline_schedule_variable",
      "update_pipeline_schedule_variable",
      "delete_pipeline_schedule_variable",
      "play_pipeline_job",
      "retry_pipeline_job",
      "cancel_pipeline_job",
      "erase_pipeline_job",
      "wait_for_pipeline",
      "wait_for_job",
      "download_job_artifacts",
      "get_job_artifact_file",
    ]),
  },
  {
    id: "milestones",
    isDefault: false,
    tools: new Set([
      "list_milestones",
      "get_milestone",
      "create_milestone",
      "edit_milestone",
      "delete_milestone",
      "get_milestone_issue",
      "get_milestone_merge_requests",
      "list_group_milestones",
      "get_group_milestone",
      "create_group_milestone",
      "edit_group_milestone",
      "delete_group_milestone",
      "get_group_milestone_issue",
      "get_group_milestone_merge_requests",
    ]),
  },
  {
    id: "wiki",
    isDefault: false,
    tools: new Set([
      "list_wiki_pages",
      "get_wiki_page",
      "create_wiki_page",
      "update_wiki_page",
      "delete_wiki_page",
    ]),
  },
  {
    id: "tags",
    isDefault: false,
    tools: new Set([
      "list_tags",
      "get_tag",
      "create_tag",
      "delete_tag",
    ]),
  },
  {
    id: "users",
    isDefault: true,
    tools: new Set([
      "get_users",
      "get_user",
      "whoami",
      "list_events",
      "get_project_events",
      "upload_markdown",
      "download_attachment",
    ]),
  },
  {
    id: "webhooks",
    isDefault: false,
    tools: new Set([
      "list_webhooks",
      "create_webhook",
      "update_webhook",
      "delete_webhook",
    ]),
  },
  {
    id: "search",
    isDefault: false,
    tools: new Set(["search_code", "search_project_code", "search_group_code"]),
  },
  {
    id: "variables",
    isDefault: false,
    tools: new Set([
      "list_project_variables",
      "get_project_variable",
      "create_project_variable",
      "update_project_variable",
      "delete_project_variable",
      "list_group_variables",
      "get_group_variable",
      "create_group_variable",
      "update_group_variable",
      "delete_group_variable",
    ]),
  },
] as const;

// Derived lookup: tool name → toolset ID
export const TOOLSET_BY_TOOL_NAME = new Map<string, ToolsetId>();
for (const def of TOOLSET_DEFINITIONS) {
  for (const tool of def.tools) {
    if (TOOLSET_BY_TOOL_NAME.has(tool)) {
      console.warn(
        `Tool "${tool}" is defined in multiple toolsets: "${TOOLSET_BY_TOOL_NAME.get(tool)}" and "${def.id}"`
      );
    }
    TOOLSET_BY_TOOL_NAME.set(tool, def.id);
  }
}

export const DEFAULT_TOOLSET_IDS: ReadonlySet<ToolsetId> = new Set(
  TOOLSET_DEFINITIONS.filter(d => d.isDefault).map(d => d.id)
);

export const ALL_TOOLSET_IDS: ReadonlySet<ToolsetId> = new Set(
  TOOLSET_DEFINITIONS.map(d => d.id)
);

// Update discover_tools description with all known categories (must be after TOOLSET_DEFINITIONS)
const discoverTool = allTools.find(t => t.name === "discover_tools");
if (discoverTool) {
  discoverTool.description = `Discover and activate additional tool categories for this session. Available categories: ${[...ALL_TOOLSET_IDS].join(", ")}. Already-active categories are listed in the response.`;
}

for (const tool of allTools) {
  tool.description = getToolDescription(
    tool.name,
    tool.description,
    readOnlyTools.has(tool.name),
    destructiveTools.has(tool.name)
  );
}

export function parseEnabledToolsets(raw: string | undefined): ReadonlySet<ToolsetId> {
  if (!raw || raw.trim() === "") {
    return DEFAULT_TOOLSET_IDS;
  }
  const trimmed = raw.trim().toLowerCase();
  if (trimmed === "all") {
    return ALL_TOOLSET_IDS;
  }
  const selected = new Set(
    trimmed
      .split(",")
      .map(s => s.trim())
      .filter((s): s is ToolsetId => ALL_TOOLSET_IDS.has(s as ToolsetId))
  );
  if (selected.size === 0) {
    console.warn(
      `No valid toolsets found in configuration (${raw}). Falling back to default toolsets.`
    );
    return DEFAULT_TOOLSET_IDS;
  }
  return selected;
}

export function parseIndividualTools(raw: string | undefined): ReadonlySet<string> {
  if (!raw || raw.trim() === "") {
    return new Set();
  }
  const allToolNames = new Set(allTools.map((t: { name: string }) => t.name));
  const parsed = raw
    .trim()
    .split(",")
    .map(s => s.trim().toLowerCase())
    .filter(Boolean);
  const unknown = parsed.filter(name => !allToolNames.has(name));
  if (unknown.length > 0) {
    console.warn(`Unknown tool names in GITLAB_TOOLS (will be ignored): ${unknown.join(", ")}`);
  }
  return new Set(parsed);
}

export function buildFeatureFlagOverrides(): ReadonlySet<string> {
  const overrides = new Set<string>();
  if (USE_GITLAB_WIKI) {
    for (const t of wikiToolNames) overrides.add(t);
  }
  if (USE_MILESTONE) {
    for (const t of milestoneToolNames) overrides.add(t);
  }
  if (USE_PIPELINE) {
    for (const t of pipelineToolNames) overrides.add(t);
  }
  return overrides;
}

export function isToolInEnabledToolset(
  toolName: string,
  enabledToolsets: ReadonlySet<ToolsetId>
): boolean {
  const toolsetId = TOOLSET_BY_TOOL_NAME.get(toolName);
  // Tools not in any toolset are excluded by default
  if (toolsetId === undefined) return false;
  return enabledToolsets.has(toolsetId);
}
