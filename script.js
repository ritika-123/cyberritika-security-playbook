async function loadMarkdown(filePath, targetId) {

  const target = document.getElementById(targetId);

  const res = await fetch(filePath);
  const md = await res.text();

  // Convert markdown
  target.innerHTML = marked.parse(md);

  // WAIT for DOM update
  setTimeout(() => {

    // Find all code blocks
    document.querySelectorAll("pre code").forEach((block) => {

      const text = block.textContent || "";

      // detect mermaid
      if (text.includes("flowchart") || text.includes("graph")) {

        const div = document.createElement("div");
        div.className = "mermaid";

        // CLEAN markdown fences
        div.textContent = text
          .replace(/```mermaid/g, "")
          .replace(/```/g, "")
          .trim();

        block.parentElement.replaceWith(div);
      }
    });

    // RENDER ALL DIAGRAMS
    if (window.mermaid) {
      mermaid.init(undefined, document.querySelectorAll(".mermaid"));
    }

  }, 50);
}
