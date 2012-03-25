(function ($) {
    "use strict";
    /// <summary>takes a string and repeats it "n" times.</summary>
    /// <param name="num" type="Number">times to repeat the string</param>
    /// <returns>rep = '*'.repeat(5);    // rep = '*****'</returns>
    String.prototype.repeat = function (num) {
        return new Array(num + 1).join(this);
    };

    /// <summary>Removes duplicates from concatenated strings</summary>
    /// <returns>Array</returns>
    Array.prototype.unique = function () {
        var a, // array
            i, // incremental counter
            j; // next incremental counter

        a = this.concat();
        for (i = 0; i < a.length; ++i) {
            for (j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j]){
                    a.splice(j, 1);
                }
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

        var options = $.extend({}, defaults, settings),
            localStorageIsEnabled;

        localStorageIsEnabled = function() {
              var uid = new Date(),
                  result;

              try {
                localStorage.setItem("uid", uid);
                result = localStorage.getItem("uid") === uid;
                localStorage.removeItem("uid");
                return result && localStorage;
              } catch(e) {}
        }();

        function allTextNodes(parent) {
            function getChildNodes(parent) {
                var x,
                    out = [];

                for (x = 0; x < parent.childNodes.length; x += 1) {
                    out[x] = parent.childNodes[x];
                }

                return out;
            }

            var cursor, 
            	closed = [],
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
            } catch (e) {
                return '';
            }
        }


        return this.each(function () {

            var badWords,
                i,
                nodes = allTextNodes(this),
                re,
                rep,
                x;

            if (options.externalSwears !== null) {
                if (localStorageIsEnabled) {
                    if (localStorage.getItem('localSwears') === null) {
                        // stringify the array so that it can be stored in local storage
                        localStorage.setItem('localSwears', JSON.stringify(readJsonFromController(options.externalSwears)));
                    }
                    badWords = JSON.parse(localStorage.getItem('localSwears'));
                } else {
                    badWords = readJsonFromController(options.externalSwears);
                }
                if (options.customSwears !== null) {
                    badWords = badWords.concat(options.customSwears).unique();
                }
            } else {
                if (options.customSwears !== null) {
                    badWords = options.customSwears;
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
                    rep = options.replaceWith.repeat(badWords[i].length);
                    if (re.test(nodes[x].nodeValue)) {
                        nodes[

                        x].nodeValue = nodes[x].nodeValue.replace(re, rep);
                    }
                }
            }
        });
    };
})(jQuery);