console.log('hey');

DomOutline({
  onClick: (element, event) => {
    console.log(element)
    // const xpath = nodeToXPath(element);
    const selector = UTILS.cssPath(element);
    console.log(selector);
    console.log($(selector));

    const cleanSelector = selector.replace(/(\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*)+/g, '');
    console.log(cleanSelector);
    console.log($(cleanSelector));

    const cssString = cleanSelector + "{ border: 1px solid purple; }";
    console.log(cssString);

    chrome.runtime.sendMessage({cssString});
  },
  namespace: 'freestyle-DomOutline',
  hideLabel: true
}).start();
