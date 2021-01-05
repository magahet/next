// Send each DOM mutation through a filtering function.
const obs = new window.MutationObserver(mutations => mutations.map(matchAddedNodes))

// Send each added node through the matching and clicking function.
const matchAddedNodes = mutation => mutation.addedNodes.forEach(matchAndClick)

function isHidden(el) {
  return (el.offsetParent === null)
}

var clicked = false

// Try matching a node for the "skip" button and click on positive match.
const matchAndClick = node => {
  if (typeof node.querySelector !== 'function') {
    return
  }

  if (clicked) {
    return
  }

  // udemy next button
  nextButton = node.querySelector('div[data-purpose="go-to-next-button"]')
  if (nextButton && !isHidden(nextButton)) {
    console.log('Clicked Next')
    nextButton.click()
    clicked = true
    setTimeout(() => clicked = false, 10000)
  }

  // udacity next button
  for (const a of node.querySelectorAll('a')) {
    if (a.textContent.includes('Play Next')) {
      console.log('Clicked Next')
      a.click()
      clicked = true
      setTimeout(() => clicked = false, 10000)
    }
  }
}

// Observe the DOM for changes.
obs.observe(document.documentElement, { childList: true, subtree: true });
