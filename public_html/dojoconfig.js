(function(global) {
    global.dojoConfig = {
        async: 1,
        packages: [
            {
                name: 'app',
                location: localBase() + 'js/app'
            },{
                name: 'cards',
                location: localBase() + 'js/cards'
            },{
                name: 'widgets',
                location: localBase() + 'js/widgets'
            },{
                name: 'widgets/common',
                location: localBase() + 'js/widgets/common'
            },{
                name: 'coffee',
                location: 'https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.7.1/'
            }
        ],
        aliases:[
            ['coffee/coffee-script','coffee/coffee-script.min'],
            ['cs', 'app/cs'],
            ['dojoConfig', 'dojo/_base/config']
        ],
        'environment': 'dev',
        isDev : function() {
            return this.environment === "dev";
        },
        cs : {
            loadAsJS : true
        }
    };

    /* To build path to local package when not relative to dojo.js file.
     * Returns base path computed from this script path (alternatively browser location path)
     @return Base path to local packages, to be prefixed before location in dojo package config
     */
    function localBase() {
        if (window.dojoLocalBaseFromJSLocation) {
            var scripts = document.getElementsByTagName("script"),
                src = scripts[scripts.length-1].src;
            return src.replace(/\/[^/]*$/, '') + '/';
        } else {
            return window.location.pathname.replace(/\/[^/]*$/, '') + '/';
        }
    }
})(window);