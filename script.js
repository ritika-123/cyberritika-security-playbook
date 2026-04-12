
// INIT MERMAID (IMPORTANT)
mermaid.initialize({ startOnLoad: false });


// =========================
// LOAD MARKDOWN
// =========================
async function loadMarkdown(filePath, targetId) {

  const target = document.getElementById(targetId);

  if (!target) {
    console.error("Target not found:", targetId);
    return;
  }

  try {
    const res = await fetch(filePath);
    const md = await res.text();

    // STEP 1: convert markdown → HTML
    target.innerHTML = marked.parse(md);

    // STEP 2: delay to ensure DOM is ready
    setTimeout(() => {
      fixAndRenderMermaid(target);
    }, 50);

  } catch (err) {
    console.error("Markdown load failed:", err);
    target.innerHTML = "Error loading file: " + filePath;
  }
}


// =========================
// MERMAID FIX (CORE LOGIC)
// =========================
function fixAndRenderMermaid(container) {

  if (!container) return;

  const codeBlocks = container.querySelectorAll("pre code");

  let mermaidBlocks = [];

  codeBlocks.forEach((block) => {

    const text = block.textContent || "";

    // STRICT detection of mermaid
    const isMermaid =
      text.includes("flowchart") ||
      text.includes("graph TD") ||
      text.includes("graph LR") ||
      text.includes("sequenceDiagram");

    if (isMermaid) {

      const clean = text
        .replace(/```mermaid/g, "")
        .replace(/```/g, "")
        .trim();

      const div = document.createElement("div");
      div.className = "mermaid";
      div.textContent = clean;

      block.parentElement.replaceWith(div);

      mermaidBlocks.push(div);
    }
  });

  // IMPORTANT: render ONLY if found
  if (mermaidBlocks.length > 0) {

    try {
      mermaid.init(undefined, mermaidBlocks);
    } catch (e) {
      console.error("Mermaid render error:", e);
    }
  }
}
