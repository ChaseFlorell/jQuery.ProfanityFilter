<!-- a comment-->
## **jQuery.profanityFilter plug-in** ##

[demo](https://chaseflorell.github.io/jQuery.ProfanityFilter/demo/)

The `jQuery.profanityFilter` has the ability to filter out profane words on the client side.

This was built in order to allow users to "Opt-in" to profanity filtering, and offload all of the work to the client, saving the headache on the server. The `jQuery.profanityFilter` also attempts to use Local Storage on the client machine in order to reduce lookups at the `externalSwears` URL.

***Obvious warning:*** *The `swearWord` lists as well as code examples contain material that many will find offensive. (But that's the point!)*
*note: localization support provided by shutterstock's [List of Dirty, Naughty, Obscene, and Otherwise Bad Words](https://github.com/shutterstock/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words)*

###**Usage:**###

---

Option 1:

    // Filter the word "shit" every time it shows up inside the element "SomeElement"
    $('#SomeElement').profanityFilter({
        customSwears: ['shit']
    });

Option 2:

    // Filter an external array of words on the entire document
    $(document).profanityFilter({
        externalSwears: '/Path/To/Json/Swears/'
    });

Option 3:

    // Change the replacement character from an astrisk (*) to a pound sign (#)
    $('#SomeElement').profanityFilter({
        externalSwears: '/Path/To/Json/Swears/',
        replaceWith: '#'
    });

Option 4:

    // Change the replacement from astrisks (*) to random words
    $('#SomeElement').profanityFilter({
        externalSwears: '/Path/To/Json/Swears/',
        replaceWith: ['fiddle', 'fun', 'stupendous']
    });

Option 5:

    // Combine an externl Swear list with a custom list (don't worry, we'll remove duplicates)
    $('#SomeElement').profanityFilter({
        customSwears: ['monkeyass'],
        externalSwears: '/Path/To/Json/Swears/'
    });

Option 6:

    // Don't filter anything. Useful in conjunction with the profaneText callback (which only
    // fires when profanity exists).
    // Ex. Check if the element contains profanity and throw an alert.
    $('#SomeElement').profanityFilter({
        customSwears: ['shit'],
        filter: false,
        profaneText: function(data) {
            alert('That is vulgar!');
            console.log(data);
        }
    });


###**Get It:**###

 - bower `> bower install jQuery.ProfanityFilter`

###**Bug Tracker:**###

---

Find a bug? Please create an issue here on GitHub!
https://github.com/ChaseFlorell/jQuery.profanityFilter/issues


###**Dependencies**###

----

This plugin requires:

 - [jQuery](http://jquery.com/) (tested 1.7.1)

###**Author:**###

---

Chase Florell

 - http://github.com/ChaseFlorell
 - http://twitter.com/ChaseFlorell

###**Copyright and License**###

---

Copyright (c) 2012 Chase Florell

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
