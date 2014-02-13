(function(global) {
    global.dojoConfig = {
        isDebug: true,
        parseOnLoad: true,
        async: 1,
        packages: [
            {
                name: 'app',
                location: localBase() + 'js/app'
            },
        ]
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