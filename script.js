mermaid.initialize({ startOnLoad: false });

async function loadMarkdown(filePath, targetId) {

  const res = await fetch(filePath);
  const md = await res.text();

  const target = document.getElementById(targetId);

  // Convert markdown → HTML
  target.innerHTML = marked.parse(md);

  // Fix Mermaid
  setTimeout(() => {
    renderMermaid(target);
  }, 100);
}

function renderMermaid(container) {

  container.querySelectorAll("pre code").forEach((block) => {

    const text = block.textContent || "";

    if (/^\s*(flowchart|graph|sequenceDiagram)/m.test(text)) {

      const div = document.createElement("div");
      div.className = "mermaid";
      div.textContent = text.trim();

      block.parentElement.replaceWith(div);
    }
  });

  mermaid.init(undefined, container.querySelectorAll(".mermaid"));
}
