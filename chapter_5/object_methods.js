// OBJECT METHODS

let user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'j.doe@mail.com',
    articles: ['Cats are awesome!', 'My cat ate my wallet!'],
    // This is how we add methods to objects.
    login: function() {
        console.log("The user logged in.");
    },
    logout: function() {
        console.log("The user logged out.");
    },
    getArticles: function() {
        
    }
};  

user.login();
user.logout();


