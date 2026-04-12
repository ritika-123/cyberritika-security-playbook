
// =========================
// INIT MERMAID
// =========================
mermaid.initialize({ startOnLoad: false });


// =========================
// MARKDOWN RENDERER
// =========================
function renderMarkdown(md, targetId) {
  const target = document.getElementById(targetId);

  // Convert markdown → HTML
  const html = marked.parse(md);
  target.innerHTML = html;

  // Render Mermaid AFTER DOM update
  requestAnimationFrame(() => {
    runMermaid();
  });
}


// =========================
// MERMAID RENDER (FIXED)
// =========================
function runMermaid() {
  try {
    mermaid.init(undefined, document.querySelectorAll(".language-mermaid, .mermaid"));
  } catch (e) {
    console.log("Mermaid render error:", e);
  }
}


// =========================
// LOAD MARKDOWN FILES
// =========================
async function loadMarkdown(filePath, targetId) {
  const res = await fetch(filePath);
  const md = await res.text();

  renderMarkdown(md, targetId);
}
