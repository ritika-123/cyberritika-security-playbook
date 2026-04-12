async function loadMarkdown(filePath, targetId) {

  const target = document.getElementById(targetId);

  const res = await fetch(filePath);
  const md = await res.text();

  target.innerHTML = marked.parse(md);

  // Immediately trigger observer (no guessing timing)
  observeAndRenderMermaid(target);
}


// ===============================
// GUARANTEED MERMAID RENDERER
// ===============================
function observeAndRenderMermaid(container) {

  if (!container) return;

  const observer = new MutationObserver(() => {

    convertMermaidBlocks(container);
    renderMermaid(container);

  });

  observer.observe(container, {
    childList: true,
    subtree: true
  });

  // also run once immediately
  convertMermaidBlocks(container);
  renderMermaid(container);
}


// ===============================
// CONVERT <pre><code> → .mermaid
// ===============================
function convertMermaidBlocks(container) {

  container.querySelectorAll("pre code").forEach((block) => {

    const text = block.textContent || "";

    const isMermaid =
      text.includes("flowchart") ||
      text.includes("graph") ||
      text.includes("sequenceDiagram");

    if (isMermaid) {

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


// ===============================
// SAFE MERMAID RENDER
// ===============================
function renderMermaid(container) {

  if (typeof mermaid === "undefined") return;

  const elements = container.querySelectorAll(".mermaid");

  if (elements.length > 0) {
    try {
      mermaid.init(undefined, elements);
    } catch (e) {
      console.error("Mermaid error:", e);
    }
  }
}
