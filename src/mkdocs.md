# MkDocs Documentation

MkDocs is a fast, simple, and modern static site generator that's geared towards building project documentation. It uses Markdown for content and YAML for configuration, making it easy to write and maintain technical documentation.

---

## Key Features

- **Markdown-based**: Write documentation in Markdown for simplicity and readability.
- **Theming**: Supports themes, including the popular Material for MkDocs.
- **Live Preview**: Built-in development server with live reload.
- **Easy Deployment**: Deploy to GitHub Pages or any static site host.
- **Extensible**: Supports plugins for diagrams (e.g., Mermaid, Graphviz), search, and more.
- **Containerized**: Can be run in Docker for consistent local and CI builds.

---

## Displaying Images in MkDocs

To display images in your MkDocs documentation, place your image files inside the documentation source folder (e.g., `docs/resources`).

### Example: Using Images from `docs/resources`

1. **Place your images** in the `docs/resources` folder. For example:
   - `docs/resources/example.png`

2. **Reference the image in your Markdown file** using a relative path:
   ```markdown
   ![](resources/example.png)
   ```
   > ?? **Tip:** The path is relative to the documentation source folder (`docs` by default).

3. **Ensure your `mkdocs.yml` is configured correctly**:
   - The default `docs_dir` is `docs`. If you use a different folder, update `docs_dir` in `mkdocs.yml`:
     ```yaml
     docs_dir: docs
     ```

4. **Extra Static Files (Optional):**
   - If you want to serve images from a folder outside `docs`, add it to `mkdocs.yml`:
     ```yaml
     extra_static_dirs:
       - resources
     ```

> ?? **Note:** All image paths must be inside or referenced from the documentation source folder. Case sensitivity matters on Linux.

---

## Useful Links

- [MkDocs Official Site](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [MkDocs GitHub](https://github.com/mkdocs/mkdocs)
- [MkDocs Plugins](https://github.com/mkdocs/catalog)
- [MkDocs Graphviz Plugin](https://github.com/mkdocs-contrib/mkdocs-graphviz): Add Graphviz diagram support to MkDocs

---

## How-to

### How to force MkDocs to rebuild the pages

```sh
mkdocs serve
```

### How to add Graphviz support to MkDocs

> ?? **Tip:** You can render Graphviz diagrams in your documentation using the [mkdocs-graphviz](https://github.com/mkdocs-contrib/mkdocs-graphviz) plugin.

**Steps:**

1. Install the plugin:

   ```sh
   pip install mkdocs-graphviz
   ```

2. Add the plugin to your `mkdocs.yml` configuration:

   ```yaml
   plugins:
     - search
     - graphviz
   ```

3. Use Graphviz code blocks in your Markdown files:

   ```dot
   digraph G {
     A -> B;
     B -> C;
   }
   ```

---

## See Also

- [Pandoc](./pandoc.md): Universal document converter supporting Markdown.
- [DocFX](./docfx.md): Documentation generator for .NET projects.
- [Sphinx](https://www.sphinx-doc.org/): Python documentation generator.
- [Graphviz](./graphviz.md): Open-source graph visualization software.

---
