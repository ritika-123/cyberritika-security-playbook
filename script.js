
// INIT MERMAID
mermaid.initialize({ startOnLoad: false });


// LOAD MARKDOWN FILE
async function loadMarkdown(filePath, targetId) {

  const res = await fetch(filePath);
  const md = await res.text();

  const target = document.getElementById(targetId);

  // STEP 1: markdown → HTML
  target.innerHTML = marked.parse(md);

  // STEP 2: FIX MERMAID AFTER RENDER
  setTimeout(() => {
    renderMermaid(target);
  }, 0);
}


// FIX MERMAID BLOCKS
function renderMermaid(container) {

  const blocks = container.querySelectorAll("pre code");

  blocks.forEach((block) => {

    const text = block.textContent || "";

    const isMermaid =
      text.includes("flowchart") ||
      text.includes("graph LR") ||
      text.includes("graph TD");

    if (isMermaid) {

      const div = document.createElement("div");
      div.className = "mermaid";

      div.innerHTML = text
        .replace(/```mermaid/g, "")
        .replace(/```/g, "")
        .trim();

      block.parentElement.replaceWith(div);
    }
  });

  // RENDER DIAGRAMS
  mermaid.init(undefined, container.querySelectorAll(".mermaid"));
}
