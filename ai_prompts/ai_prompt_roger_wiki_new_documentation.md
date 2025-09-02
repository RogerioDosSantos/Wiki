# Roger Wiki New Documentation Generation Instructions

Given the following subject: {{subject_name}}

Follow these steps to create and integrate new subject documentation into your technical wiki:

---

## 1. Create Initial Documentation File
- **Location:** `src/{{subject_name}}.md`
- **Content Requirements:**
  - Begin with a brief introduction to **{{subject_name}}**.
  - List key features.
  - Provide useful links.
	- **Important:** Do NOT include links that does not exist.
  - Add a **See Also** section referencing similar subjects.

---

## 2. Update Main Wiki Index
- **File:** `README.md` (`src/index.md`)
- **Action:**
  - Add an entry for **{{subject_name}}** under the most appropriate section.
  - Follow the format of existing entries.

---

## 3. Add Documentation Images
- **Directory:** `src/{{subject_name}}/`
- **Filename Format:** `{{subject_name}}-{{image_purpose}}.png`
- Download and save any relevant images for the documentation.

---

## 4. Apply Markdown Formatting Standards
- Format the documentation using the instructions in `ai_prompts/ai_prompt_markdown_documentation_format.md`.
- Ensure headings, lists, code blocks, and tables are used for clarity and professionalism.


---