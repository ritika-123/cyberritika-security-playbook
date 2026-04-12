mermaid.initialize({ startOnLoad: false });

function renderMarkdown(md, target) {
  target.innerHTML = marked.parse(md);

  setTimeout(() => {
    fixMermaidBlocks();
  }, 0);
}

function fixMermaidBlocks() {
  document.querySelectorAll("code").forEach((el) => {

    if (el.className.includes("language-mermaid")) {

      const div = document.createElement("div");
      div.className = "mermaid";
      div.innerHTML = el.textContent;

      el.parentElement.replaceWith(div);
    }
  });

  mermaid.init(undefined, document.querySelectorAll(".mermaid"));
}
