## **jQuery.ProfanityFilter Plug-in** ##

The `jQuery.ProfanityFilter` has the ability to filter out profane words on the client side.

This was built in order to allow users to "Opt-in" to profanity filtering, and offload all of the work to the client, saving the headache on the server.

###**Usage Options**###

Option 1:

    // Filter the word "shit" every time it shows up inside the element "SomeElement"
    $('#SomeElement').ProfanityFilter({
		customSwears: ['shit']
	});`

Option 2:

    // Filter an external array of words on the entire    
    $(document).ProfanityFilter({
		externalSwears: '/Path/To/Json/Swears/'
	});`

Option 3:

    // Change the replacement character
    $(document).ProfanityFilter({
		externalSwears: '/Path/To/Json/Swears/',
		replace: '_'
	});`

Option 4:

    // Combine an externl Swear list with a custom list
    $(document).ProfanityFilter({
		customSwears: ['monkeyass'],
		externalSwears: '/Path/To/Json/Swears/'
	});`

**Mentions:**  
The `jQuery.ProfanityFilter` attempts to use Local Storage on the client machine in order to reduce lookups at the `externalSwears` URL.