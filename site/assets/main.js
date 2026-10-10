// Staggered entrance fallback for browsers without native sibling-index()
// Guides: guides/ui-behaviors/dynamic-sibling-animations.md
// Modern Web Guidance requires checking CSS.supports before adding custom properties via JS.

if (!CSS.supports("animation-delay: calc(sibling-index() * 0.1s)")) {
  const bio = document.getElementById("bio");
  if (bio) {
    [...bio.children].forEach((el, index) => {
      el.style.setProperty("--sibling-index", index + 1);
    });
  }
}
