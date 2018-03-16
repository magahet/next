
// Send each DOM mutation through a filtering function.
const obs = new MutationObserver(mutations => mutations.map(matchAddedNodes));

// Send each added node through the matching and clicking function.
matchAddedNodes = mutation => mutation.addedNodes.forEach(matchAndClick);

// Try matching a node for the "skip" button and click on positive match.
matchAndClick = node => {
  if (typeof node.querySelectorAll !== 'function') {
    return
  }
  for (const a of node.querySelectorAll("a")) {
    if (a.textContent.includes("Play Next")) {
      a.click();
    }
  }
}

// Observe the DOM for changes.
obs.observe(document.documentElement, { childList: true, subtree: true });
