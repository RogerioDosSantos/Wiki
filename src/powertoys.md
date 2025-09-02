# PowerToys

PowerToys is a set of utilities for power users to tune and streamline their Windows experience for greater productivity. Developed by Microsoft, PowerToys provides a collection of tools that enhance and extend the functionality of Windows, making common tasks faster and more efficient.

---

## Key Features

- **PowerToys Run**: Quick launcher for files, apps, and web searches.
- **FancyZones**: Window manager for creating complex window layouts and snapping windows into custom zones.
- **PowerRename**: Advanced bulk file renaming utility with search and replace, regular expressions, and preview.
- **Keyboard Manager**: Remap keys and create custom keyboard shortcuts.
- **Color Picker**: System-wide color picker with history and color formats.
- **Image Resizer**: Context menu tool for fast image resizing.
- **File Explorer Add-ons**: Preview pane support for SVG, Markdown, and more.
- **Awake**: Prevents the computer from sleeping on demand.
- **Shortcut Guide**: Overlay showing available Windows shortcuts.
- **Always on Top**: Keep a window always visible above others.
- **Mouse Utilities**: Find mouse pointer, highlight clicks, and more.

---

## Installation

### Using Winget

You can install PowerToys easily using the Windows Package Manager (winget):

```sh
winget install --id Microsoft.PowerToys -e
```

---

## Configuring Screen Positioning Shortcuts (FancyZones)

PowerToys includes **FancyZones**, a powerful window manager that lets you create custom window layouts and quickly snap windows into position using keyboard shortcuts. This is especially useful for productivity and works even with maximized windows, including those in Remote Desktop sessions (when using the override option).

### How to Set Up and Use FancyZones for Screen Positioning

1. **Open PowerToys Settings**  
   Launch PowerToys and select **FancyZones** from the sidebar.

2. **Enable FancyZones**  
   Make sure FancyZones is enabled.

3. **Edit Zones Layout**  
   Click **Launch layout editor**. Choose a predefined layout or create a custom one to define how your screen is divided.

4. **Configure Shortcut for Moving Windows**  
   - By default, use <kbd>Win</kbd> + <kbd>Arrow Keys</kbd> to snap windows to screen edges.
   - For FancyZones, use <kbd>Shift</kbd> + <kbd>Win</kbd> + <kbd>Arrow Keys</kbd> to move the active window between zones.
   - You can customize these shortcuts in the **FancyZones** settings under **Override Windows Snap shortcut (Win+Arrow) to move windows between zones**.

5. **Enable Override for Maximized/Remote Desktop Windows**  
   - In **FancyZones** settings, enable **Allow zones to span across monitors** and **Override Windows Snap shortcut (Win+Arrow) to move windows between zones**.
   - This allows you to use FancyZones shortcuts even when a window is maximized or when working inside a Remote Desktop session.

6. **Snap Windows Using Shortcuts**  
   - Hold <kbd>Shift</kbd> (or your configured modifier) and drag a window, or use the configured keyboard shortcut to move windows between zones.

> ?? **Tip:** If you are using Remote Desktop in full screen, ensure that PowerToys is running on the remote machine and that FancyZones is enabled there. The override option ensures shortcuts work even for maximized windows.

---

## Useful Links

- [PowerToys Official Site](https://learn.microsoft.com/en-us/windows/powertoys/)
- [PowerToys GitHub Repository](https://github.com/microsoft/PowerToys)
- [PowerToys Releases](https://github.com/microsoft/PowerToys/releases)
- [PowerToys Documentation](https://learn.microsoft.com/en-us/powertoys/)

---

## See Also

- [AutoHotkey](./autohotkey.md): Scripting language for automating Windows tasks.
- [Windows Terminal Commands](./windows_terminal_commands.md): Enhance your command-line experience.
- [Notepad++](./notepadpp.md): Advanced text editor for Windows.

---
