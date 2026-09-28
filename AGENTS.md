<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project decisions

- Keep the proposal as one route with internal view state because the experience is a private, app-like command center rather than a public content site.
- Keep landing-page concepts in a dedicated presentation module and open selected concepts as fixed, independently scrollable full-viewport previews, so they feel like complete websites without adding routes.
