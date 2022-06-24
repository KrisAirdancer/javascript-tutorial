// ARGUMENTS AND PARAMETERS

const speak = function(firstName, timeOfDay) { // This adds parameters to the function
    console.log(`Good ${timeOfDay}, ${firstName}.`);
};

speak('Mello', 'day');

const speakUpgraded = function(firstName = 'Luigi', timeOfDay = 'day') { // This adds default values to the parameters to be used in the case that the user doesn't pass in any arguments
    console.log(`Good ${timeOfDay}, ${firstName}.`);
};

// speak(); // Doesn't work b/c function has no default arguments
speakUpgraded(); // Still works b/c defaults are set
speakUpgraded('Mario', 'evening'); // Still works, but uses passed arguments