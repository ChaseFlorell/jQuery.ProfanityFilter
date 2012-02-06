(function ($) {

    /// <summary>takes a string and repeates it "n" times.</summary>
    /// <param name="num" type="Number">times to repeat the string</param>
    /// <returns>rep = '*'.repeat(5);    // rep = '*****'</returns>
    String.prototype.repeat = function (num) {
        return new Array(num + 1).join(this);
    };

    /// <summary>Removes duplicates from concatonated strings</summary>
    /// <returns>Array</returns>
    Array.prototype.unique = function () {
        var a = this.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j])
                    a.splice(j, 1);
            }
        }

        return a;
    };

    /// <summary>Default settings for profanityFilter plugin</summary>
    var defaults = {
        replaceWith: '*',
        customSwears: null,
        externalSwears: null
    };


    /// <summary>jQuery plugin used to filter profanity on the attached element</summary>
    /// <param name="settings">user overridden settings</param>
    /// <returns>text from an element but blots out the swear words</returns>
    $.fn.profanityFilter = function (settings) {

        var settings = $.extend({}, defaults, settings);

        function allTextNodes(parent) {
            function getChildNodes(parent) {
                var x, out = [];
                for (x = 0; x < parent.childNodes.length; x += 1) {
                    out[x] = parent.childNodes[x];
                }

                return out;
            }

            var cursor, closed = [],
                open = getChildNodes(parent);

            while (open.length) {
                cursor = open.shift();
                if (cursor.nodeType === 1) {
                    open.unshift.apply(open, getChildNodes(cursor));
                }
                if (cursor.nodeType === 3) {
                    closed.push(cursor);
                }
            }
            return closed;
        }

        function readJsonFromController(file) {
            var request = new XMLHttpRequest();
            request.open('GET', file, false);
            request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            request.send(null);
            try {
                return JSON.parse(request.responseText);
            }
            catch (e) {
                return '';
            }
        }

        function localStorageIsEnabled() {
            try {
                var uid = new Date();
                localStorageIsEnabled = window.localStorage;
                localStorageIsEnabled.setItem(uid, uid);
                if (localStorageIsEnabled.getItem(uid) != uid) {
                    localStorageIsEnabled = false;
                }
            }
            catch (e) { }
        }


        return this.each(function () {
            var x, i, re, rep, badWords, nodes = allTextNodes(this);

            if (settings.externalSwears !== null) {
                if (localStorageIsEnabled) {
                    if (localStorage.getItem('localSwears') === null) {
                        // stringify the array so that it can be stored in local storage
                        localStorage.setItem('localSwears', JSON.stringify(readJsonFromController(settings.externalSwears)));
                    }
                    badWords = JSON.parse(localStorage.getItem('localSwears'));
                } else {
                    badWords = readJsonFromController(settings.externalSwears);
                }
                if (settings.customSwears !== null) {
                    badWords = badWords.concat(settings.customSwears).unique();
                }
            } else {
                if (settings.customSwears !== null) {
                    badWords = settings.customSwears;
                }
            }

            // GET OUT, there are no Swears set either custom, external OR local.
            if (badWords === null) {
                return;
            }

            // We've got an array of swears, let's proceed with removing them from the element.
            for (x = 0; x < nodes.length; x += 1) {
                for (i = 0; i < badWords.length; i += 1) {
                    re = new RegExp('\\b' + badWords[i] + '\\b', 'gi');
                    rep = settings.replaceWith.repeat(badWords[i].length);
                    if (re.test(nodes[x].nodeValue)) {
                        nodes[

                        x].nodeValue = nodes[x].nodeValue.replace(re, rep);
                    }
                }
            }
        });
    };
})(jQuery);