mermaid.initialize({ startOnLoad: false });

function renderMarkdown(md, target) {
  target.innerHTML = marked.parse(md);

  // Wait for DOM update
  setTimeout(() => {
    convertMermaidBlocks();
  }, 50);
}

function convertMermaidBlocks() {

  document.querySelectorAll("pre code").forEach((block) => {

    if (block.className.includes("language-mermaid")) {

      const parent = block.parentElement;

      const div = document.createElement("div");
      div.className = "mermaid";
      div.innerHTML = block.textContent;

      parent.replaceWith(div);
    }
  });

  mermaid.init(undefined, document.querySelectorAll(".mermaid"));
}
