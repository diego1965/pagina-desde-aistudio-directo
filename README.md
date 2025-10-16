# Resto-QR: Futuro Gastronómico

This is the source code for the Resto-QR landing page, a futuristic showcase for a revolutionary restaurant management system.

## Features

-   Modern, futuristic UI/UX with animations and a clean design.
-   Integrated AI chatbot, "Chef-i", to answer visitor questions.
-   Fully responsive for all devices.
-   Built with React, TypeScript, and Tailwind CSS.

## Deployment on GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup

1.  **Push to GitHub:** Push your code to a new GitHub repository.
2.  **Enable GitHub Pages:**
    *   In your repository, go to **Settings** > **Pages**.
    *   Under "Build and deployment", select **Source** as **GitHub Actions**.
3.  **Trigger Deployment:**
    *   The deployment workflow is located at `.github/workflows/deploy.yml`.
    *   It will automatically run every time you push a change to the `main` branch.
    *   After the workflow completes successfully, your site will be live at `https://<your-username>.github.io/<your-repository-name>/`.

### Local Development

To run this project locally, you need a local web server that can serve static files.

1.  Make sure you have Node.js installed.
2.  Install a simple server package globally:
    ```bash
    npm install -g serve
    ```
3.  Run the server from the project's root directory:
    ```bash
    serve .
    ```
4.  Open your browser and navigate to the URL provided by the `serve` command (usually `http://localhost:3000`).

**Note on API Key:** The application's chatbot functionality requires a Gemini API key. The code references `process.env.API_KEY`, which is a standard way to handle secrets in a Node.js environment. However, when deploying a purely static site to GitHub Pages, there's no backend to manage environment variables. This means the `API_KEY` will be `undefined` in the deployed version, and the chatbot may not function. For a production scenario, you would typically use a backend proxy to securely handle the API key.
