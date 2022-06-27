# javascript-tutorial
My code from The Net Ninja's JavaScript Udemy course. https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/

## Chapters

- Chapter 1: Introduction to the course
- Chapter 2: JavaScript Basics (syntax, types, etc.)
- Chapter 3: Control Flow Basics (loops and conditionals)

## Notes

- VSCode Extensions
	- Live Server - Allows you to preview a webiste in your browser.
	- Mateiral Icon Theme - Makes the files in the file dock look better.
	- Monokai++ - A theme for VSCode text.
- `let`, `const` & `var`
    - `const` makes a variable immutable.
    - `let` declares a mutable variable in block scope.
    - `var` declares a mutable variable in global scope.
        - `var` is not used as often anymore. `const` and `let` are considered better practice.
- **Types in JavaScript**
    - **Number:** 1, 2, 3, etc.
    - **String:** "hello world:
    - **Boolean:** true/false
    - **Null:** Has no value.
    - **Undefined:** For variables that have not yet been defined.
    - **Object:** Data structures such as arrays, etc.
    - **Symbol:** Used with objects, but aren't objects.
- JavaScript is a "loosely-typed" language.
    - Java and C# are strongly-typed.
- Function != Method
    - Methods are associated with objects while functions are not.
    - More [here](https://stackoverflow.com/questions/155609/whats-the-difference-between-a-method-and-a-function) 
- Order of Operations
    - PEMDAS = Parentheses, Exponents, Multiplication, Division, Addition, then Subtraction
- Functions
    - A block of code that runs as a single unit. The function can be called by name.
- `this` Keyword
    - When the 'this' keyword is used in a method call, the 'this' keyword gets set to the object that that method was called on.
    - What `this` refers to dependsd on the context: ([source](https://www.w3schools.com/js/js_this.asp#:~:text=The%20JavaScript%20this%20keyword%20refers%20to%20the%20object,a%20function%2C%20this%20refers%20to%20the%20global%20object.))
        - In an object method, `this` refers to the object.
        - Alone, outside a method (method != function), `this` refers to the global object.
        - In a function, `this` refers to the global object.
        - In a function, in strict mode, `this` is undefined.
        - In an event, `this` refers to the element that received the event.
        - Methods like `call()`, `apply()`, and `bind()` can refer `this` to any object.
    - `this` and Regular vs Arrow Functions
        - In regular functions (methods), `this` is set to the object that the method is called on.
        - In arrow functions, `this` is not reset to the object the method was called on. Instead, it retains the value that it had when the method was invoked (called).
        - eg. For the class `user`,
            - `let user = {...login: function() {...this...}...};`, `this` is set to the `user` class (object) that houses `login`
            - `let user = {...login: () => {...this...}...};`, `this` retains the value it had before `login` was called.
- Primative vs Reference Types
    - Primative Types:
        - numbers
        - strings
        - booleans
        - null
        - undefined
        - symbols
    - Reference Types:
        - all types of objects
            - object literals
            - arrays
            - functions
            - dates
            - all other objects
    - Primative types are stored on the stack
    - Reference types are stored on the heap
        - A pointer to the object on the heap is stored on the stack (this pointer is stored in a variable)
    - 