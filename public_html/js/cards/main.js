define(["dojo/topic", "dojox/mvc/getStateful", "dojo/Stateful",
    "dojox/fx/flip", "dojo/_base/config"],
        function(topic, getStateful, Stateful, fx, config) {

            return function() {
                // public
                self = this;
                self.model = {};
                self.control = {};

                // construct
                console.debug('CardsMain initializing...');
                initModel();
                initControllers();
                topic.subscribe("card.turn", self.control.card.onclick);

                function initModel() {
                    self.model = getStateful({value: 'value1', displayedCard: {text: "Card text"}});
                }

                function initControllers() {
                    self.control.card = {
                        onclick: function(elem) {
                            console.debug('Card click');
                            self.model.get('displayedCard').set({text: "Changed card text"});
                        }
                    };

                }

            }

        });
