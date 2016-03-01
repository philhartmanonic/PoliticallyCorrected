var elements = document.getElementsByTagName('*');

var mapObj = {
    dignity:"\"dignity\"",
    Dignity:"\"Dignity\"",
    credibility:"\"credibility\"",
    Credibility:"\"Credibility\"",
    credible:"\"credible\"",
    Credible:"\"Credible\"",
    reputation:"\"reputation\"",
    Reputation:"\"Reputation\"",
    respect:"\"respect\"",
    Respect:"\"Respect\"",
    party:"band of wretched thieves and cannibals",
    Party:"Band of Wretched Thieves and Cannibals"
};

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/dignity|Dignity|credibility|Credibility|credible|Credible|reputation|Reputation|respect|Respect|party|Party/gi, function(matched){
                return mapObj[matched];
            });

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}