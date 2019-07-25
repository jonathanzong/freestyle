console.log('hey');

DomOutline({
  onClick: (element, event) => {
    console.log(element)
    let selector = element.nodeName + Array.from(element.classList).map((x) => '.' + x).join('') + ':nth-child(' + ($(element).index() + 1) + ')';
    while (element.nodeName !== 'BODY') {
      element = element.parentNode;
      selector = element.nodeName + ' > ' + selector;
    }
    console.log(selector);
    // const xpath = nodeToXPath(element);
    // const selector = dompath(element).toCSS();
    // console.log(selector);
    console.log($(selector));

    // const cleanSelector = selector.replace(/(\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*)+/g, '').replace(/:nth-child\(\w+\)/g, '');
    // console.log(cleanSelector);
    // console.log($(cleanSelector));

    const cssString = selector + "{ border: 1px solid purple !important; }";
    console.log(cssString);

    chrome.runtime.sendMessage({cssString});
  },
  namespace: 'freestyle-DomOutline',
  hideLabel: true
}).start();
