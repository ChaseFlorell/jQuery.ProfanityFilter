<!-- a comment-->
## **jQuery.ProfanityFilter Plug-in** ##

http://profanityfilter.chaseflorell.com

The `jQuery.ProfanityFilter` has the ability to filter out profane words on the client side.

This was built in order to allow users to "Opt-in" to profanity filtering, and offload all of the work to the client, saving the headache on the server. The `jQuery.ProfanityFilter` also attempts to use Local Storage on the client machine in order to reduce lookups at the `externalSwears` URL.

###**Usage:**###

---

Option 1:

    // Filter the word "shit" every time it shows up inside the element "SomeElement"
    $('#SomeElement').ProfanityFilter({
		customSwears: ['shit']
	});`

Option 2:

    // Filter an external array of words on the entire document  
    $(document).ProfanityFilter({
		externalSwears: '/Path/To/Json/Swears/'
	});`

Option 3:

    // Change the replacement character from an astrisk (*) to a pound sign (#)
    $(document).ProfanityFilter({
		externalSwears: '/Path/To/Json/Swears/',
		replaceWith: '#'
	});`

Option 4:

    // Combine an externl Swear list with a custom list (don't worry, we'll remove duplicates)
    $(document).ProfanityFilter({
		customSwears: ['monkeyass'],
		externalSwears: '/Path/To/Json/Swears/'
	});`


###**Bug Tracker:**###

---

Find a bug? Please create an issue here on GitHub!    
https://github.com/ChaseFlorell/jQuery.ProfanityFilter/issues


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
(The MIT License)

Copyright (c) 2011 Chase Florell

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