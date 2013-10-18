(function(window) {
    window.dojoConfig = {
        async: 1,
        packages: [localPackage('js', 'app')]
    };

    /* To include local package when not relative to dojo root, example: dojoConfig = {packages: [localPackage('js', 'package/subpackage')]}
     @param srcRoot path of source root relative to html file url
     @param name of the package and also path to the package within srcRoot path
     @return element into array of dojoConfig packages - {name, location}
     */
    function localPackage(srcRoot, name) {
        var retLoc = location.pathname.replace(/\/[^/]*$/, '') + '/';
        if (srcRoot) {
            retLoc += srcRoot + '/';
        }
        return {
            name: name,
            location: retLoc + name
        };
    }
})(window);