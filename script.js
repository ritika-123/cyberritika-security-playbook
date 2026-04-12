// ================================
// MARKDOWN RENDER FUNCTION
// ================================

function renderMarkdown(md, targetId) {
  const target = document.getElementById(targetId);

  // Convert markdown → HTML
  target.innerHTML = marked.parse(md);

  // Fix mermaid after rendering
  setTimeout(() => {
    renderMermaid();
  }, 100);
}


// ================================
// MERMAID FIX (IMPORTANT PART)
// ================================

function renderMermaid() {
  const blocks = document.querySelectorAll("pre code");

  blocks.forEach((block) => {
    const text = block.textContent;

    // Detect mermaid content
    if (
      block.className.includes("language-mermaid") ||
      text.includes("flowchart") ||
      text.includes("graph LR") ||
      text.includes("graph TD")
    ) {
      const div = document.createElement("div");
      div.className = "mermaid";

      // Clean code block
      div.innerHTML = text
        .replace(/```mermaid/g, "")
        .replace(/```/g, "")
        .trim();

      // Replace code block with diagram container
      block.parentElement.replaceWith(div);
    }
  });

  // Render diagrams
  mermaid.init(undefined, document.querySelectorAll(".mermaid"));
}


// ================================
// LOAD MARKDOWN FILES
// ================================

async function loadMarkdown(filePath, targetId) {
  const res = await fetch(filePath);
  const md = await res.text();

  renderMarkdown(md, targetId);
}
