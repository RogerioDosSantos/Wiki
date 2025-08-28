# Visual Studio External Tools

Visual Studio External Tools allow you to integrate custom commands, scripts, or third-party utilities directly into the Visual Studio IDE. This feature streamlines your workflow by making external utilities accessible from the Tools menu.

---

## Key Features

- **Custom Integration:** Add any executable, script, or command-line tool.
- **Parameter Support:** Pass arguments such as the current file, project, or solution.
- **Environment Variables:** Use Visual Studio macros for dynamic paths and context.
- **Menu Access:** Launch tools directly from the Tools menu.
- **Output Handling:** Optionally redirect tool output to the Visual Studio Output window.

---

## How to Create an External Tool

1. **Open Visual Studio.**
2. Go to `Tools` > `External Tools...`.
3. Click `Add` to create a new tool entry.
4. Fill in the following fields:
   - **Title:** Name of your tool as it will appear in the menu.
   - **Command:** Path to the executable or script.
   - **Arguments:** (Optional) Parameters to pass (e.g., `$(ItemPath)` for the current file).
   - **Initial Directory:** (Optional) Working directory (e.g., `$(ProjectDir)`).
5. (Optional) Check `Use Output window` to display tool output in Visual Studio.
6. Use the `Move Up` and `Move Down` buttons to reorder tools.
7. Click `OK` to save.

> 📌 **Tip**: Use Visual Studio macros (like `$(SolutionDir)`, `$(ItemPath)`) to make your tool context-aware.

Once the External Tool is created, it will appear under the `Tools` menu for easy access:

![](./resources/visual_studio_external_tools/visual_studio_external_tools_line_34.png)

---

## How to Set a Shortcut for an External Tool

You can assign a keyboard shortcut to your External Tool for quick access:

1. Go to `Tools` > `Options`.
2. Expand the `Environment` section and select `Keyboard`.
3. In the `Show commands containing` box, type `Tools.ExternalCommand`.
4. Find the command that matches your tool (e.g., `Tools.ExternalCommand1` for the first tool in the list).
5. Click in the `Press shortcut keys` box and press your desired key combination (e.g., `Ctrl+Alt+N`).
6. Click `Assign`, then `OK` to save.

> 💡 **Note**: The number in `Tools.ExternalCommandN` corresponds to the order of your tool in the External Tools list.

---

## Example: Add Notepad++ as an External Tool

- **Title:** Notepad++
- **Command:** `C:\Program Files\Notepad++\notepad++.exe`
- **Arguments:** `$(ItemPath)`
- **Initial Directory:** `$(ItemDir)`

This setup opens the currently selected file in Notepad++.

---

## Useful Links

| Resource | Description |
|----------|-------------|
| [Microsoft Docs: External Tools](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-use-external-tools) | Official documentation |
| [List of Visual Studio Macros](https://learn.microsoft.com/en-us/visualstudio/ide/using-visual-studio-macros-in-command-line-arguments) | Macro reference |
| [Customize keyboard shortcuts](https://learn.microsoft.com/en-us/visualstudio/ide/identifying-and-customizing-keyboard-shortcuts-in-visual-studio) | Shortcut customization |

---

## See Also

- [Visual Studio](./visual_studio.md)
- [Visual Studio Extensions](./visual_studio_extensions.md): Enhance Visual Studio with extensions.
- [Command Line Tools](./command_line_tools.md): Useful command line tools for development.

---
