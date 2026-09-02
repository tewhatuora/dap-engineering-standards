/*
 * mkdocs-glightbox only wraps <img> tags at build time, so client-rendered
 * Mermaid SVGs are never picked up. Bind them to GLightbox's inline content API.
 */

// Material renders Mermaid into a closed shadow root, which is unreadable from
// the outside. Force open mode so the SVG can be cloned into the lightbox.
// Must run before Material mounts Mermaid (it loads mermaid async from a CDN).
(function forceOpenShadowRoots() {
  const nativeAttachShadow = Element.prototype.attachShadow;
  Element.prototype.attachShadow = function (init) {
    return nativeAttachShadow.call(this, Object.assign({}, init, { mode: "open" }));
  };
})();

function getMermaidMarkup(el) {
  const root = el.shadowRoot || el;
  // Keep ids intact: Mermaid's generated <style> rules are id-scoped to the SVG.
  return root.querySelector("svg") ? root.innerHTML : null;
}

function openMermaidLightbox(el) {
  const markup = getMermaidMarkup(el);
  if (!markup) {
    return;
  }

  // The mkdocs-glightbox `width`/`height` settings only reach <img> anchors,
  // so this separate instance has to be sized explicitly.
  GLightbox({
    elements: [{ content: `<div class="mermaid-lightbox">${markup}</div>` }],
    width: "90%",
    height: "auto",
    touchNavigation: false,
    loop: false,
  }).open();
}

function bindMermaidLightbox() {
  if (typeof GLightbox === "undefined") {
    return;
  }

  document.querySelectorAll("div.mermaid").forEach((el) => {
    if (el.dataset.lightboxBound || !getMermaidMarkup(el)) {
      return; // not rendered yet
    }

    el.dataset.lightboxBound = "1";
    el.classList.add("mermaid-zoomable");
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", "Enlarge diagram");

    el.addEventListener("click", () => openMermaidLightbox(el));
    el.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMermaidLightbox(el);
      }
    });
  });
}

// Mermaid renders asynchronously, so watch for diagrams appearing after load.
new MutationObserver(bindMermaidLightbox).observe(document.documentElement, {
  childList: true,
  subtree: true,
});

// document$ is provided by Material and re-fires on instant navigation.
document$.subscribe(bindMermaidLightbox);
