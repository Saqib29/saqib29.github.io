# My Portfolio

This is my personal portfolio website, showcasing my skills, experience, and projects. It is a fully responsive, single-page application with a clean and modern design. The portfolio is built with vanilla TypeScript and Tailwind CSS, and the content is dynamically loaded from a single JSON file.

## Features

-   **Fully Responsive:** The website is designed to work on all devices, from mobile phones to desktops.
-   **Dark Mode:** A dark mode theme is available and can be toggled with a button. The preference is saved in local storage.
-   **Dynamic Content:** All the content of the portfolio is loaded from a single JSON file (`data/content.json`), making it easy to update.
-   **CI/CD:** The project is configured with GitHub Actions for continuous integration and deployment to Vercel.
-   **Blog Section:** A separate page for blog posts, also dynamically loaded from the JSON file.

## Tech Stack

-   **Frontend:**
    -   HTML
    -   TypeScript
    -   Tailwind CSS
-   **Build Tool:**
    -   TypeScript Compiler (`tsc`)
-   **Package Manager:**
    -   pnpm
-   **CI/CD:**
    -   GitHub Actions
    -   Vercel

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v22 or later)
-   pnpm (v10 or later)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/saqib29/saqib29.github.io.git
    ```
2.  Install NPM packages
    ```sh
    pnpm install
    ```

### Running the Project

1.  Build the project
    ```sh
    pnpm build
    ```
2.  Open `index.html` in your browser.


## Workflows

The project is configured with two GitHub Actions workflows:

### CI Pipeline

The `CI Pipeline` workflow is triggered on every push and pull request to any branch. It performs the following steps:

1.  Checks out the code.
2.  Sets up Node.js and pnpm.
3.  Installs dependencies.
4.  Runs lint checks.
5.  Builds the project.
6.  Creates a `dist` folder with all the necessary files.
7.  Uploads the `dist` folder as an artifact named `portfolio-dist`.

### Deploy to Vercel

The `Deploy to Vercel` workflow is triggered on every push to the `vercel` branch. It performs the following steps:

1.  Downloads the `portfolio-dist` artifact from the `CI Pipeline` workflow.
2.  Deploys the `dist` folder to Vercel.
3.  If the push is to the `main` branch, it aliases the deployment to the production domain.
