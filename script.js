async function loadMarkdown(filePath, targetId) {

  const target = document.getElementById(targetId);

  const res = await fetch(filePath);
  const md = await res.text();

  // 1. Convert markdown to HTML
  target.innerHTML = marked.parse(md);

  // 2. IMPORTANT FIX: wait DOM update
  setTimeout(() => {

    document.querySelectorAll("pre code").forEach((block) => {

      const text = block.textContent;

      // detect mermaid
      if (text.includes("flowchart") || text.includes("graph")) {

        const div = document.createElement("div");
        div.className = "mermaid";
        div.textContent = text.replace(/```mermaid|```/g, "");

        block.parentElement.replaceWith(div);
      }
    });

    // 3. render all diagrams
    mermaid.init(undefined, document.querySelectorAll(".mermaid"));

  }, 100);
}
