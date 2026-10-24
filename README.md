# Ethan Cleminson – Engineering Portfolio

Static site built on the Massively template by HTML5 UP. No build step: what is in this folder is what goes online.

## Folder layout

```
index.html                         the whole site (one page)
assets/css/main.css                template styles – leave alone
assets/css/custom.css              our additions (carousel, tags, About Me)
assets/js/carousel.js              image slider used in each project
images/bg.jpg                      intro background (replace to change it)
images/projects/<project-name>/    images for each project
files/                             PDF reports and the CV
```

## Before going live

Search `index.html` for `EDIT` and fill in:

1. CV – save as `files/Ethan-Cleminson-CV.pdf`.
2. Phone and email in the footer (or delete the Phone `<section>`).
3. LinkedIn and GitHub links – these appear twice, in the nav bar and the footer.
4. About Me text – the current wording is a draft for Ethan to rewrite.
5. Optional photo – save as `images/ethan.jpg` and uncomment the image line.

## Adding a new project

1. Create `images/projects/<project-name>/` and put the images in it. Use lower-case names with hyphens, no spaces. Resize photos to about 1400 px wide first so the page stays quick.
2. Put the full write-up in `files/<project-name>-report.pdf`.
3. In `index.html`, copy the block between `START` and `END` in the PROJECT TEMPLATE comment and paste it above that comment (newest project at the top, under About Me).
4. Edit the date, title, image paths, captions, Objective / Result / Key problem solved, tags and report link.
5. Open `index.html` in a browser to check it before uploading.

The carousel needs no set-up: each `<figure class="slide">` becomes one slide. The first one should carry `class="slide is-active"`.

## Deploying to Cloudflare Pages

**First time (dashboard):** Workers & Pages → Create → Pages → Upload assets. Name the project, drag in the contents of this folder (index.html at the top level, not inside another folder), and deploy. Then add your domain under the project's Custom domains tab.

**Updates (dashboard):** open the project → Create deployment → upload the folder again.

**Updates (command line, optional):**

```
npx wrangler pages deploy . --project-name=<your-project-name>
```

Delete `README.md` from the upload if you don't want it publicly reachable (it is harmless either way).

## Licence

The template is CC BY 3.0: keep the "Design: HTML5 UP" credit in the footer.
