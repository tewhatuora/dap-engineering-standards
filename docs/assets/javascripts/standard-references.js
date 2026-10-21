function enhanceStandardReferences() {
  const article = document.querySelector(".md-content__inner.md-typeset");
  if (!article?.querySelector(":scope > h1.standard-references")) return;

  article.querySelectorAll("ol > li > code:last-child, ol > li > p > code:last-child").forEach((tag) => {
    if (!/^std-[a-z0-9-]+-\d{2}$/.test(tag.textContent)) return;

    const item = tag.parentElement;
    const reference = document.createElement("span");
    const button = document.createElement("button");
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const outline = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const hole = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    reference.className = "standard-reference";
    button.type = "button";
    button.className = "standard-reference__toggle";
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("focusable", "false");
    outline.setAttribute("d", "M3 3h7l11 11-7 7L3 10Z");
    hole.setAttribute("cx", "7");
    hole.setAttribute("cy", "7");
    hole.setAttribute("r", "1");
    icon.append(outline, hole);
    button.append(icon);
    tag.id = `reference-${tag.textContent}`;
    tag.className = "standard-reference__tag";
    tag.hidden = true;
    button.setAttribute("aria-controls", tag.id);
    const updateState = () => {
      button.setAttribute("aria-expanded", String(!tag.hidden));
      const label = tag.hidden ? "Show standard tag" : "Hide standard tag";
      button.setAttribute("aria-label", label);
      button.title = label;
    };
    updateState();
    button.addEventListener("click", () => {
      tag.hidden = !tag.hidden;
      updateState();
    });

    reference.append(button, tag);
    item.append(document.createTextNode(" "), reference);
  });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(enhanceStandardReferences);
} else {
  document.addEventListener("DOMContentLoaded", enhanceStandardReferences);
}
