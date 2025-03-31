# Shopify Starter Theme (Vite + TS + Tailwind)

A minimal Shopify theme starter using **Vite**, **TypeScript**, and **Tailwind CSS v4**. Designed for a fast development workflow with zero unnecessary bloat and cross-platform compatibility.

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (or your preferred package manager)
- Shopify CLI installed and authenticated (`shopify auth login`)
- A Shopify store for development

## Features

- **Vite:** Fast builds and development watching (`vite build --watch`).
- **TypeScript:** Type safety for your JavaScript.
- **Tailwind CSS v4:** Latest version integrated via the official Vite plugin.
- **Modern Development Tools:**
  - Prettier with Liquid & Tailwind support for consistent formatting.
  - Concurrent development processes (`vite build --watch` + `shopify theme dev`).
  - `.env` file support for environment variables (like store name).
  - Cross-platform compatible scripts via Node.js wrapper for `shopify theme dev`.
  - VSCode configuration included.
- **Complete Template Structure:**
  - All essential Shopify templates (404, cart, collection, product, etc.).
  - Basic header and footer snippets.
  - Minimal but functional layouts.

## Getting Started

1.  **Clone this repository:**

    ```bash
    git clone https://github.com/faisalagood/shopify-starter-theme.git your-theme-name
    cd your-theme-name
    ```

2.  **(Optional) Remove existing Git history and initialize a new repository:**

    ```bash
    rm -rf .git
    git init
    git add .
    git commit -m "Initial commit"
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Configure Environment:**

    - Copy `.env.example` to `.env`.
    - Edit `.env` and set `SHOPIFY_STORE` to your development store's handle (e.g., `your-store.myshopify.com`).

5.  **Start development:**
    ```bash
    npm run dev
    ```
    This command starts the Vite build watcher and the Shopify CLI development server concurrently using a cross-platform compatible script.

## Available Scripts

- `npm run dev`: Starts the Vite build watcher (`vite build --watch`) and the Shopify theme development server (`shopify theme dev`) concurrently. Use this for active development. Changes in `src/` will trigger rebuilds into `assets/`, and Shopify CLI will refresh the preview.
- `npm run watch`: Starts only the Vite build watcher (`vite build --watch`). Useful if you want to manage the Shopify CLI process separately.
- `npm run build`: Performs a one-time production build using Vite, outputting optimized files to `assets/`. Use this before deploying or pushing the theme.
- `npm run shopify:dev`: Starts only the Shopify theme development server via the Node.js wrapper script. Requires assets to be already built in `assets/` or managed by another process.
- `npm run format`: Formats all supported files (`.js`, `.ts`, `.json`, `.liquid`, `.css`) using Prettier.
- `npm run lint`: Checks formatting using Prettier without making changes.
- `npm run clean`: Removes generated asset files (`application.css`, `main.js`, sourcemaps) from the `assets/` directory.

## Project Structure

```
├── assets/                 # Compiled assets (GENERATED - DO NOT EDIT DIRECTLY)
│   ├── application.css     # Generated CSS file
│   └── main.js             # Generated JS file
├── config/                 # Theme configuration (settings_schema.json, etc.)
├── layout/                 # Theme layouts (theme.liquid, etc.)
├── locales/                # Translation files
├── scripts/                # Helper scripts for package.json
│   └── shopify-dev.js      # Cross-platform wrapper for shopify theme dev
├── sections/               # Theme sections (.liquid)
├── snippets/               # Reusable snippets (.liquid)
├── src/                    # Source files (EDIT THESE)
│   ├── css/
│   │   └── global.css        # Global CSS / Tailwind entry point
│   └── ts/
│       └── main.ts         # TypeScript entry point
├── templates/              # Theme templates (.liquid, .json)
├── .env                    # Local environment variables (ignored by Git)
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore rules
├── LICENSE.md              # Project License
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## VSCode Configuration

Included `.vscode/settings.json` provides:

- Format on save enabled.
- Liquid file association.
- Prettier as the default formatter for supported languages.

## Development Workflow

1.  Run `npm run dev`.
2.  Edit files within the `src/` directory (TypeScript, CSS) or standard theme files (`layout/`, `sections/`, `templates/`, etc.).
3.  Vite automatically rebuilds changes from `src/` into the `assets/` directory.
4.  Shopify CLI detects changes in `assets/` (or other theme files) and should refresh the browser preview automatically.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE.md)
