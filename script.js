
// INIT MERMAID
mermaid.initialize({ startOnLoad: false });


// =========================
// LOAD MARKDOWN
// =========================
async function loadMarkdown(filePath, targetId) {

  const res = await fetch(filePath);
  const md = await res.text();

  const target = document.getElementById(targetId);

  // STEP 1: Markdown → HTML
  target.innerHTML = marked.parse(md);

  // STEP 2: Wait for DOM update (CRITICAL)
  setTimeout(() => {
    processMermaid(target);
  }, 50);
}


// =========================
// MERMAID PROCESSOR (ROBUST)
// =========================
function processMermaid(container) {

  // Find all code blocks
  const blocks = container.querySelectorAll("pre code");

  blocks.forEach((block) => {

    const text = block.textContent || "";

    // STRICT detection (IMPORTANT FIX)
    const isMermaid =
      /^\s*(flowchart|graph|sequenceDiagram|classDiagram)/m.test(text);

    if (isMermaid) {

      const div = document.createElement("div");
      div.className = "mermaid";

      // Clean markdown fences
      div.textContent = text
        .replace(/```mermaid/g, "")
        .replace(/```/g, "")
        .trim();

      block.parentElement.replaceWith(div);
    }
  });

  // FORCE RENDER
  const diagrams = container.querySelectorAll(".mermaid");

  if (diagrams.length > 0) {
    mermaid.init(undefined, diagrams);
  }
}
