const ARTICLE_SELECTOR = ".md-content__inner.md-typeset";
const DISCLOSURE_SELECTOR = "details.section-disclosure";

function findSectionHeadings(article) {
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

  const pageSummary = article.querySelector(":scope > h2#summary");
  const standardsContainer = article.querySelector(":scope > h2#standards");
  if (!pageSummary || !standardsContainer) return [];

  const standardHeadings = [];
  let element = standardsContainer.nextElementSibling;

  while (element && element.tagName !== "H2") {
    if (element.tagName === "H3") standardHeadings.push(element);
    element = element.nextElementSibling;
  }

  return standardHeadings;
}

function revealFragment(article) {
  if (!window.location.hash) return;

  const target = article.querySelector(window.location.hash);
  const disclosure = target?.closest(DISCLOSURE_SELECTOR);

  if (disclosure) disclosure.open = true;
}

function createSectionDisclosure(heading, nextHeading) {
  const disclosure = document.createElement("details");
  const summary = document.createElement("summary");
  const content = document.createElement("div");
  let element = heading.nextElementSibling;

  disclosure.className = "section-disclosure";
  disclosure.open = true;
  summary.className = "section-disclosure__summary";
  heading.classList.add("section-disclosure__title");
  content.className = "section-disclosure__content";

  heading.before(disclosure);
  disclosure.append(summary, content);
  summary.append(heading);

  while (element && element !== nextHeading && element.tagName !== "H2") {
    const nextElement = element.nextElementSibling;
    content.append(element);
    element = nextElement;
  }
}

function enhanceSectionDisclosures() {
  const article = document.querySelector(ARTICLE_SELECTOR);

  if (!article || article.dataset.sectionDisclosures === "true") return;

  const headings = findSectionHeadings(article);
  if (headings.length === 0) return;

  article.dataset.sectionDisclosures = "true";
  headings.forEach((heading, index) => createSectionDisclosure(heading, headings[index + 1]));

  revealFragment(article);
}

if (typeof document$ !== "undefined") {
  document$.subscribe(enhanceSectionDisclosures);
} else {
  document.addEventListener("DOMContentLoaded", enhanceSectionDisclosures);
}

window.addEventListener("hashchange", () => {
  const article = document.querySelector(ARTICLE_SELECTOR);
  if (article) revealFragment(article);
});