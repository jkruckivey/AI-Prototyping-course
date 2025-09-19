# GEMINI.md - AI Prototyping Learn

## Project Goal and Workflow

The primary goal of this project is to create a self-paced course on Canvas by converting subject matter expert content into interactive HTML pages.

The workflow is as follows:

1.  **Content Source**: The raw course content is located in the `Course Materials/` directory.
2.  **Development**: The content is being developed into HTML pages in the `Development Files/` directory.
3.  **Templating**: All HTML pages created in `Development Files/` must adhere to the structure and styling defined in the `amba template.html` file. This ensures a consistent look and feel within the Canvas LMS.
4.  **Deployment**: The final HTML files are copied and pasted into the Canvas HTML editor.

## Directory Overview

This directory contains a collection of interactive, web-based learning modules for teaching and learning Artificial Intelligence (AI) and Machine Learning (ML) concepts. The project is designed for educational use, with a professional "Ivey" branding and specific integration features for the Canvas Learning Management System (LMS).

The project is structured as a static website, with a main `index.html` serving as a hub for various interactive demos. Each demo is a self-contained set of HTML, CSS, and JavaScript files. There is no server-side code or complex build process required.

## Key Files

*   **`README.md`**: The primary documentation for the project. It provides a high-level overview, setup instructions, and a summary of the available interactive demos.
*   **`amba template.html`**: The master template for creating Canvas content pages. All HTML files in `Development Files/` must be based on this template.
*   **`index.html`**: The main entry point for the learning hub. It presents a grid of available and forthcoming interactive modules.
*   **`styles.css`**: The main stylesheet that defines the visual identity of the project, including the "Ivey" branding (colors, fonts, etc.).
*   **`demos/`**: This directory contains the various interactive learning modules. Each module is typically comprised of an `.html` file and a corresponding `.js` file (e.g., `linear-regression.html` and `linear-regression.js`).
*   **`demos/widgets/`**: This subdirectory contains smaller, embeddable versions of the demos, specifically designed for integration into the Canvas LMS. The `canvas-widget-template.html` file serves as a template for creating new widgets.
*   **`CANVAS-*.md`**: A set of Markdown files providing detailed guidance for instructors on how to embed the widgets within the Ivey Canvas LMS framework. The `CANVAS-EMBEDDING-GUIDE.md` is the most comprehensive of these.
*   **`DEVELOPMENT-LOG.md`**: A crucial file that documents the project's history, architectural decisions, and conventions. It notably explains the adoption of the "Ivey Canvas dp- framework" for styling and embedding, which is a key development convention.
*   **`Development Files/`**: Contains the HTML files that are being actively developed for the Canvas course.
*   **`Course Materials/`**: Contains the source content from subject matter experts.

## Usage

The interactive demos in this directory are intended to be used in one of two ways:

1.  **Standalone**: The `index.html` file can be opened in any modern web browser to access the learning hub and the full-featured demos.

2.  **Embedded in Canvas**: The widgets in the `demos/widgets/` directory are designed to be embedded directly into Canvas pages. The `CANVAS-*.md` files provide detailed instructions on how to do this, including copy-paste ready HTML snippets that leverage the "Ivey Canvas dp- framework".

### Running the Project

No build process is necessary. To run the project, simply open the `index.html` file in a web browser. For the best experience, especially when developing, it is recommended to serve the files using a simple local web server:

```bash
# Using Python
python -m http.server

# Using Node.js (requires `serve` package)
npx serve .
```

### Development Conventions

*   **Templating**: All new Canvas pages must be created from the `amba template.html` file.
*   **Styling**: All new components should adhere to the "Ivey" branding guidelines defined in `styles.css` and the `demos/widgets/canvas-widget-template.html`.
*   **Canvas Integration**: When creating new content for Canvas, the "Ivey Canvas dp- framework" should be used. Refer to the `DEVELOPMENT-LOG.md` and `CANVAS-EMBEDDING-GUIDE.md` for details.
*   **JavaScript**: The project uses vanilla JavaScript. The use of external libraries is limited to Plotly.js for charting.
*   **File Structure**: New demos should be placed in the `demos/` directory, and new embeddable widgets in the `demos/widgets/` directory. New course pages should be placed in the `Development Files/` directory.
*   **Logging**: All significant changes, especially to the architecture or conventions, should be documented in the `DEVELOPMENT-LOG.md`.