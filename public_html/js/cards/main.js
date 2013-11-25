define(["dojo/topic", "dojox/mvc/getStateful", "dojo/Stateful",
    "dojox/fx/flip", "dojo/_base/config"],
        function(topic, getStateful, Stateful, fx, config) {

            return function() {
                // public
                var self = this;
                self.model = {};
                self.control = {};

                // construct
                console.debug('CardsMain initializing...');
                initModel();
                initControllers();
                topic.subscribe("card.turn", self.control.card.onclick);

                function initModel() {
                    var cardText = "Card text"
                    self.model = getStateful({value: 'value1', displayedCard: {text: cardText}});
                }

                function initControllers() {
                    self.control.card = {
                        onclick: function(elem) {
                            console.debug('Card click');
                            var prevText = self.model.get('displayedCard').get('text');
                            self.model.get('displayedCard').set({text: prevText + " Changed card text"});
                        }
                    };

                }

            }

        });
