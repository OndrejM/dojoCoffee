define(["dojo/when", "dojo/parser", "dojox/mvc/getStateful", "dojo/Stateful", "dojo/query", "dojo/dom-class"
    , "dojox/fx/flip", "dojo/_base/config"
    , "dojo/domReady!", "dojo/ready", "widgets/Card"], 
function(when, parser, getStateful, Stateful, $, $cls, fx, config) {
    var global = this;
    console.log('INIT');
    if (config.isDev()) {
        console.log('Main started...');
    }
    initModel();
    when(parser.parse(), function() {
        initCard();
    }, function(err) {
        console.log(err);
    });
    
    function initModel() {
        var model = getStateful({value: 'value1', displayedCard : {text : "Card text"}});
        global.model = model;
    }
    
    function initCard() {
        $('#card').on("click", function(e) {
            var elem = e.target;
            $cls.toggle(elem, "red");
            $cls.toggle(elem, "blue");
            fx.flip({node: elem}).play();
            global.model.get('displayedCard').set({text: "Changed card text"});
        });
    }
});
