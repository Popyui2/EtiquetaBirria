# EtiquetaBirria

Frozen Birria Tacos product label designed in HTML/CSS.

## Files

- `label_v2_hires.html` — High-resolution version (scaled up ~4x for print-quality export)
- `label_v2.html` / `label.html` — Standard resolution versions
- `label_v2_pdf.html` / `label_pdf.html` — PDF-optimized versions
- `label_v2_print.html` / `label_print.html` — Print-optimized versions
- `HLAM_FrozenBirriaTacos_v2.png` — Background product photo
- `H74_WBL_.ttf` — H74 font used in the label

## Exporting a Lossless Image via Firefox

Follow these steps to export the label as a lossless PNG using Firefox's built-in screenshot tool:

1. **Open the label** — Open the desired `.html` file in Firefox (e.g. `label_v2_hires.html` for the highest resolution).

2. **Open DevTools** — Press `F12` (or `Ctrl+Shift+I`) to open Firefox Developer Tools.

3. **Open the console** — Click the **Console** tab in DevTools.

4. **Take a node screenshot** — In the **Inspector** tab, right-click the `.label` element (or the outermost container you want to capture) and select **"Screenshot Node"**. This saves a lossless PNG of that exact element at its rendered resolution.

   **Alternatively, use the console command:**
   ```
   :screenshot --selector ".wrap" --dpr 1 --fullpage
   ```
   - `--selector ".wrap"` captures only the label wrapper element.
   - `--dpr 1` keeps the device pixel ratio at 1 (use `--dpr 2` for 2x resolution).
   - `--fullpage` ensures the full element is captured even if it overflows the viewport.

5. **Find your file** — The PNG is saved to your Firefox default download folder (usually `~/Downloads`). The file is a **lossless PNG** with no JPEG compression artifacts.

### Tips

- Use `label_v2_hires.html` for the best print resolution — it renders the label at ~4x scale (`transform: scale(3.936)`), producing a large, crisp PNG.
- Make sure the browser window is wide enough so the label is not clipped before taking the screenshot.
- Firefox's screenshot tool always exports as **PNG (lossless)** — no extra settings needed. Avoid using "Save Image As" on the page itself, as that only saves the background photo, not the rendered label.
