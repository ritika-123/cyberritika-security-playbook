
// INIT MERMAID
mermaid.initialize({ startOnLoad: false });


// =========================
// MAIN LOADER
// =========================
async function loadMarkdown(filePath, targetId) {

  const res = await fetch(filePath);
  const md = await res.text();

  const target = document.getElementById(targetId);

  // STEP 1: convert markdown → HTML
  const html = marked.parse(md);
  target.innerHTML = html;

  // STEP 2: wait DOM update (IMPORTANT)
  setTimeout(() => {
    convertAndRenderMermaid(target);
  }, 100);
}


// =========================
// CORE FIX (ROBUST)
// =========================
function convertAndRenderMermaid(container) {

  // 1. Find ALL code blocks
  const codeBlocks = container.querySelectorAll("pre code");

  codeBlocks.forEach((block) => {

    const text = block.textContent || "";

    // STRICT detection (IMPORTANT FIX)
    const isMermaid =
      /^\s*(flowchart|graph|sequenceDiagram|classDiagram)/m.test(text);

    if (isMermaid) {

      const div = document.createElement("div");
      div.className = "mermaid";

      // Clean markdown fences safely
      const clean = text
        .replace(/```mermaid/g, "")
        .replace(/```/g, "")
        .trim();

      div.textContent = clean;

      block.parentElement.replaceWith(div);
    }
  });

  // 2. FORCE Mermaid render
  const diagrams = container.querySelectorAll(".mermaid");

  if (diagrams.length > 0) {
    mermaid.init(undefined, diagrams);
  }
}
