
// ===============================
// MAIN MARKDOWN LOADER (PER PAGE)
// ===============================
async function loadMarkdown(filePath, targetId) {

  const res = await fetch(filePath);
  const md = await res.text();

  const target = document.getElementById(targetId);

  // STEP 1: extract flowcharts BEFORE markdown render
  const { cleanMarkdown, flowcharts } = extractMermaid(md);

  // STEP 2: render markdown normally
  target.innerHTML = marked.parse(cleanMarkdown);

  // STEP 3: render flowcharts INSIDE SAME PAGE
  renderFlowcharts(flowcharts, target);
}


// ===============================
// EXTRACT MERMAID BLOCKS
// ===============================
function extractMermaid(md) {

  const regex = /```mermaid([\s\S]*?)```/g;

  let flowcharts = [];

  let cleanMarkdown = md.replace(regex, (match, code) => {
    flowcharts.push(code.trim());
    return ""; // remove from markdown output
  });

  return { cleanMarkdown, flowcharts };
}


// ===============================
// RENDER FLOWCHARTS IN SAME PAGE
// ===============================
function renderFlowcharts(flowcharts, container) {

  if (!flowcharts.length) return;

  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "30px";

  flowcharts.forEach((chart, i) => {

    const box = document.createElement("div");
    box.style.margin = "20px 0";
    box.style.padding = "15px";
    box.style.borderRadius = "10px";
    box.style.background = "#0f172a";
    box.style.border = "1px solid #334155";

    const title = document.createElement("h3");
    title.innerText = "📊 Flowchart " + (i + 1);
    title.style.color = "#38bdf8";

    const pre = document.createElement("pre");
    pre.style.whiteSpace = "pre-wrap";
    pre.style.color = "#ffffff";
    pre.style.fontSize = "14px";

    // Convert Mermaid → readable structured flow
    pre.textContent = formatFlow(chart);

    box.appendChild(title);
    box.appendChild(pre);
    wrapper.appendChild(box);
  });

  container.appendChild(wrapper);
}


// ===============================
// FLOW FORMATTER (SAFE DISPLAY)
// ===============================
function formatFlow(text) {

  return text
    .replace(/flowchart TD/g, "FLOW: Top Down")
    .replace(/flowchart LR/g, "FLOW: Left to Right")
    .replace(/-->/g, " → ")
    .replace(/\[|\]/g, "")
    .replace(/\{|\}/g, "")
    .trim();
}
