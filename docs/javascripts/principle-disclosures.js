function findPrincipleHeadings(article) {
  const legacyContainer = article.querySelector(":scope > h2#principles");

  if (legacyContainer) {
    const headings = [];
    let element = legacyContainer.nextElementSibling;

    while (element && element.tagName !== "H2") {
      if (element.tagName === "H3") headings.push(element);
      element = element.nextElementSibling;
    }

    return headings;
  }

  const headings = Array.from(article.querySelectorAll(":scope > h2")).filter((heading) => {
    let hasSummary = false;
    let hasReasoning = false;
    let hasStandards = false;
    let element = heading.nextElementSibling;

    while (element && element.tagName !== "H2") {
      if (element.tagName === "H3" && /^summary(?:_\d+)?$/.test(element.id)) hasSummary = true;
      if (element.tagName === "H3" && /^reasoning(?:_\d+)?$/.test(element.id)) hasReasoning = true;
      if (element.tagName === "H3" && /^standards(?:_\d+)?$/.test(element.id)) hasStandards = true;
      element = element.nextElementSibling;
    }

    return hasSummary && (hasStandards || hasReasoning);
  });

  if (headings.length > 0) return headings;

  const standardsContainer = article.querySelector(":scope > h2#standards");
  const standardHeadings = [];
  let element = standardsContainer?.nextElementSibling;

  while (element && element.tagName !== "H2") {
    if (element.tagName === "H3") standardHeadings.push(element);
    element = element.nextElementSibling;
  }

  return standardHeadings;
}

function revealFragment(article) {
  if (!window.location.hash) return;

  const target = article.querySelector(window.location.hash);
  const disclosure = target?.closest("details.principle-disclosure");

  if (disclosure) disclosure.open = true;
}

function enhancePrinciplePage() {
  const article = document.querySelector(".md-content__inner.md-typeset");

  if (!article || article.dataset.principleDisclosures === "true") return;

  const headings = findPrincipleHeadings(article);
  if (headings.length === 0) return;

  article.dataset.principleDisclosures = "true";

  headings.forEach((heading, index) => {
    const disclosure = document.createElement("details");
    const summary = document.createElement("summary");
    const title = document.createElement("span");
    const content = document.createElement("div");
    const nextHeading = headings[index + 1];

    disclosure.className = "principle-disclosure";
    disclosure.open = true;
    summary.className = "principle-disclosure__summary";
    title.id = heading.id;
    title.textContent = heading.textContent;
    content.className = "principle-disclosure__content";

    summary.append(title);
    disclosure.append(summary, content);
    heading.before(disclosure);

    let element = heading.nextElementSibling;
    heading.remove();

    while (element && element !== nextHeading && element.tagName !== "H2") {
      const nextElement = element.nextElementSibling;
      content.append(element);
      element = nextElement;
    }
  });

  revealFragment(article);
}

if (typeof document$ !== "undefined") {
  document$.subscribe(enhancePrinciplePage);
} else {
  document.addEventListener("DOMContentLoaded", enhancePrinciplePage);
}

window.addEventListener("hashchange", () => {
  const article = document.querySelector(".md-content__inner.md-typeset");
  if (article) revealFragment(article);
});