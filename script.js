
async function loadMarkdown(filePath, targetId) {

  const target = document.getElementById(targetId);

  const res = await fetch(filePath);
  const md = await res.text();

  // STEP 1: inject markdown
  target.innerHTML = marked.parse(md);

  // STEP 2: wait for FULL browser paint (important fix)
  requestAnimationFrame(() => {

    setTimeout(() => {

      convertMermaid(target);
      renderMermaid(target);

    }, 0);

  });
}


// ============================
// CONVERT BLOCKS SAFELY
// ============================
function convertMermaid(container) {

  const blocks = container.querySelectorAll("pre code");

  blocks.forEach(block => {

    const text = block.textContent || "";

    if (text.includes("flowchart") || text.includes("graph")) {

      const div = document.createElement("div");
      div.className = "mermaid";

      div.textContent = text
        .replace(/```mermaid/g, "")
        .replace(/```/g, "")
        .trim();

      block.parentElement.replaceWith(div);
    }
  });
}


// ============================
// SAFE MERMAID RENDER
// ============================
function renderMermaid(container) {

  if (!window.mermaid) return;

  const nodes = container.querySelectorAll(".mermaid");

  if (nodes.length > 0) {
    mermaid.init(undefined, nodes);
  }
}
