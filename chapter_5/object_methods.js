// OBJECT METHODS

let user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'j.doe@mail.com',
    articles: [{ title: 'Cats are awesome!', likes: 20 },
               { title: 'My cat ate my wallet!', likes: 353},
               { title: '10 things to make with Marmite', likes: 56}],
    // This is how we add methods to objects.
    login: function() {
        console.log("The user logged in.");
    },
    logout: function() {
        console.log("The user logged out.");
    },
    getArticles: function() {
        // In this scope, 'this' refers to the user object.
        console.log('This user has written the following articles:');
        this.articles.forEach( article => {
            console.log(article);
        });
    }
};  // Note the use of a colon for the object.

user.login();
user.logout();

user.getArticles();

console.log(user.articles);

console.log(this); // This is referencing the global object known as the Window object. This statement prints the contents of the Window object to the console.


// When the 'this' keyword is used in a method call, the 'this' keyword gets set to the object that that method was called on.


// We can rewrite the above functions in any of the following ways.

let foo = {
    // The following three declarations are equivalent (aside from the use of `this`).
    login_1: function() {
        // Do something
    },
    login_2() { // Can still use `this` normally.
        // Do something
    },
    foo_3: () => { // Note the stipulation for the use of `this` when using this format.
        // Do something
    }
};
