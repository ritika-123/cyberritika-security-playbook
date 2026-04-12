
// INIT MERMAID
mermaid.initialize({ startOnLoad: false });


// =========================
// LOAD MARKDOWN INTO PAGE
// =========================
async function loadMarkdown(filePath, targetId) {

  const res = await fetch(filePath);
  const md = await res.text();

  const target = document.getElementById(targetId);

  // STEP 1: Convert markdown → HTML
  target.innerHTML = marked.parse(md);

  // STEP 2: FIX MERMAID AFTER RENDER
  setTimeout(() => {
    renderMermaid(target);
  }, 100);
}


// =========================
// MERMAID FIX (CRITICAL)
// =========================
function renderMermaid(container) {

  // find all code blocks inside rendered markdown
  const blocks = container.querySelectorAll("pre code");

  blocks.forEach((block) => {

    const text = block.textContent || "";

    // detect mermaid safely
    const isMermaid =
      text.includes("flowchart") ||
      text.includes("graph LR") ||
      text.includes("graph TD") ||
      text.includes("sequenceDiagram");

    if (isMermaid) {

      const div = document.createElement("div");
      div.className = "mermaid";

      // clean markdown fences
      div.textContent = text
        .replace(/```mermaid/g, "")
        .replace(/```/g, "")
        .trim();

      block.parentElement.replaceWith(div);
    }
  });

  // IMPORTANT: re-run Mermaid on THIS PAGE ONLY
  mermaid.init(undefined, container.querySelectorAll(".mermaid"));
}
