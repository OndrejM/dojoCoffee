define(["dojo/topic","dojox/fx/flip", "dojo/on", "./main", "dojo/when", "dojo/parser", "dojo/query", "dojo/dom-class",
    "dojo/domReady!", "dojo/ready", "widgets/Card"],
        function(topic, fx, on, Main, when, parser, $, $cls) {
            return function() {
                self = this;
                this.start = start;

                function start(callback) {
                    var main = new Main();
                    this.model = main.model;
                    console.log('this', this);
                    when(parser.parse(), function() {
                        console.debug('CardsMain starting');
                        callback();
                    }, function(err) {
                        console.error(err);
                    });
                }
                
                this.card = {
                    postCreate: function() {
                        var elem = this.domNode;
                        topic.subscribe("card.turn", function() {
                            $cls.toggle(elem, "red");
                            $cls.toggle(elem, "blue");
                            fx.flip({node: elem}).play();
                        });
                        on(elem, "turn", function() {
                           topic.publish("card.turn", this); 
                        });
                        on(elem, "click", function() {
                            on.emit(this, "turn", {
                                bubbles: false,
                                cancelable: false
                            });
                        });
                    }
                };
            };
        });