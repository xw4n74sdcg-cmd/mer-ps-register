# MER-PS Challenge GitHub Pages Registration Site

This folder contains a minimal static GitHub Pages site modeled after the MPDD-AVG registration page.

## What the Reference Site Does

The MPDD-AVG page is a static GitHub Pages site. It uses:

- `index.html` for the homepage
- `registration.html` for the registration page
- `style.css` for layout and visual style
- A Google Form public link for registration
- A Google Form embedded iframe for in-page registration

There is no backend server. Google Form responses are stored and maintained through Google Forms / Google Sheets.

## How to Publish on GitHub Pages

1. Create a GitHub repository, for example `mer-ps-register`.
2. Upload `index.html`, `registration.html`, `style.css`, and this `README.md`.
3. Open the repository on GitHub.
4. Go to `Settings` > `Pages`.
5. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save.
7. After 1-3 minutes, GitHub will show a public URL like:
   - `https://YOUR_USERNAME.github.io/mer-ps-register/`

If you create a repository named `YOUR_USERNAME.github.io`, the site URL becomes:

- `https://YOUR_USERNAME.github.io/`

## How to Create and Maintain the Google Form

1. Open Google Forms and create a blank form.
2. Title it `MER-PS Team Registration`.
3. Add these required fields:
   - Team name
   - Institution / affiliation
   - Team leader real name
   - Team leader Codabench username
   - Team leader email address
   - Number of team members
   - Member real name
   - Member Codabench username
   - Member email address
   - Agreement checkbox for one-person-one-team rule
   - Agreement checkbox for final audit rule
4. In `Settings`:
   - Enable email collection if suitable for your participants.
   - Enable `Limit to 1 response` if all participants can log in with Google.
   - Consider disabling public response editing and requiring changes by email.
5. In the `Responses` tab:
   - Click `Link to Sheets`.
   - Use the sheet for final auditing and duplicate checks.

## How to Embed the Form

In Google Forms:

1. Click `Send`.
2. Use the link icon to copy the public form link.
3. Use the embed icon `<>` to copy the iframe link.
4. Replace these placeholders in `registration.html`:
   - `GOOGLE_FORM_PUBLIC_LINK`
   - `GOOGLE_FORM_EMBED_LINK`
   - `YOUR_EMAIL@example.com`

The public link usually looks like:

```text
https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=sf_link
```

The embedded link usually looks like:

```text
https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true
```

## Simple Audit Workflow

In the linked Google Sheet:

1. Freeze the header row.
2. Add filters to all columns.
3. Sort by Codabench username and email to check duplicates.
4. Use conditional formatting for duplicate values in:
   - Team leader Codabench username
   - Member Codabench usernames
   - Member emails
5. Before final ranking, export Codabench submissions and match usernames against the registered team sheet.

Useful duplicate-check formulas:

```text
=COUNTIF(C:C, C2)>1
```

Use this as a conditional-formatting rule for a Codabench username column. Replace `C:C` and `C2` with the actual column you want to check.

```text
=COUNTIF(E:E, E2)>1
```

Use the same idea for email columns. This makes repeated accounts or repeated emails easy to spot.

## Files to Edit Most Often

- `registration.html`: form links, organizer email, registration rules
- `index.html`: homepage text and Codabench link
- `style.css`: visual style
