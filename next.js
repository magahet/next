// Send each DOM mutation through a filtering function.
const obs = new window.MutationObserver(mutations => mutations.map(matchAddedNodes))

// Send each added node through the matching and clicking function.
const matchAddedNodes = mutation => mutation.addedNodes.forEach(matchAndClick)


function isHidden(el) {
  return (el.offsetParent === null)
}

// Try matching a node for the "skip" button and click on positive match.
const matchAndClick = node => {
  if (typeof node.querySelectorAll !== 'function') {
    return
  }

  for (const b of node.querySelectorAll('button')) {
    if (b.matches('[data-purpose="go-to-next-button"]')) {
     if ( !isHidden(b) ) {
          console.log('YO!!!')
          b.click()
      }
    }
  }

  for (const a of node.querySelectorAll('a')) {
    if (a.textContent.includes('Play Next')) {
      a.click()
    }
  }
}

// Observe the DOM for changes.
obs.observe(document.documentElement, { childList: true, subtree: true });
