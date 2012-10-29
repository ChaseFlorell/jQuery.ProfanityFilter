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
	});

Option 3:

    // Change the replacement character from an astrisk (*) to a pound sign (#)
    $(document).ProfanityFilter({
		externalSwears: '/Path/To/Json/Swears/',
		replaceWith: '#'
	});

Option 4:

    // Change the replacement from astrisks (*) to random words
    $(document).ProfanityFilter({
        externalSwears: '/Path/To/Json/Swears/',
        replaceWith: ['fiddle', 'fun', 'stupendous']
    });

Option 5:

    // Combine an externl Swear list with a custom list (don't worry, we'll remove duplicates)
    $(document).ProfanityFilter({
		customSwears: ['monkeyass'],
		externalSwears: '/Path/To/Json/Swears/'
	});


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

You can use this however the heck you want. If you like it, say thanks.