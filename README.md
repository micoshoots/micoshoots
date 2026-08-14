# Personal photography portfolio

A lightweight static portfolio designed for personal and travel photography. It deploys directly to Vercel—no build step or database required.

## Make it yours

1. In `index.html`, replace `YOUR CITY` and the email address. The portfolio name and Instagram are set to `micoshoots`.
2. The temporary web-ready images from the existing portfolio live under `images/micoshoots/`. Replace them with your originals when you have access to the drive; keep original files backed up elsewhere.
3. Replace each coloured `.image-slot` with a real `<img>` element. Example:

   ```html
   <img src="images/northern-passage-cover.jpg" alt="Short, descriptive alt text" />
   ```

   Add this once to `styles.css` to make every image behave correctly:

   ```css
   .image-slot > img { width: 100%; height: 100%; object-fit: cover; }
   ```

4. Rename the four projects and update `projects.html` with the first full story. Duplicate `projects.html` for additional projects or convert it to a data-driven template later.

## Image prep

- Start with 40–70 images across 4–6 stories.
- Export JPEG or WebP files at roughly 2400px on the long edge.
- Use a mix of horizontal and vertical images within each story.
- Aim for 10–25 images per project; edit ruthlessly.

## Deploy

1. Push this repository to GitHub.
2. In Vercel, select **Add New → Project**, import the GitHub repository, and deploy. Vercel detects this as a static site.
3. In the Vercel project, open **Settings → Domains** and add your domain. Follow the displayed DNS records at your domain registrar.
4. Keep `main` as your live branch. Every other GitHub branch gets a private Vercel preview link before you publish it.

## Creative direction

The design uses warm paper, serif display type, sparse captions, and large photographs. The coloured image areas are intentional placeholders—replace them with your own work, rather than with stock photography.
