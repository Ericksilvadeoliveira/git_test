// Quick sidenote: ES6 introduced a new feature in JavaScript called ‘modules’. These are essentially a syntax for importing and exporting code between different JavaScript files. They’re very powerful and we WILL be covering them later. They are not, however, what we’re talking about here.

// Modules are actually very similar to factory functions. The main difference is how they’re created.

// Meet a module:

const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476

//   The concepts are exactly the same as the factory function. However, instead of creating a factory that we can use over and over again to create multiple objects, the module pattern wraps the factory in an IIFE (Immediately Invoked Function Expression).

// var foo = "foo";

// (function (innerFoo) {
//     // Outputs: "foo"
//     console.log(innerFoo);
// })(foo);

// // exporting our module

// const myModule = (function() {
//     'use strict';

//     return {
//         publicMethod: function() {
//             console.log('Hey World!');
//         },

//         secondPublicMethod: function(a, b) {
//             const sum = a + b;

//             console.log(sum);
//         }
//     };
// })();

// myModule.publicMethod();
// myModule.secondPublicMethod(2, 4);

// const myOtherModule = (function() {
//     'use strict';
//     let _privateProperty = 'hey World!';

//     function _privateMethod() {
//         console.log(_privateProperty);
//     }

//     return {
//         publicMethod: function() {
//             _privateMethod();
//         }
//     };
// })();

// myOtherModule.publicMethod();
// console.log(myOtherModule._privateProperty);
// myOtherModule._privateProperty();

// Because our private properties are not returned they are not available outside of out module. Only our public method has given us access to our private methods. This gives us ability to create private state and encapsulation within our code.

// Revealing Module Pattern 

// The Revealing Module Pattern is one of the most popular ways of creating modules. Using the return statement we can return a object literal that 'reveals' only the methods or properties we want to be publicly available.

const hisModule = (function() {
    'use strict';
    const _privateProperty = 'Hello You!';
    const publicProperty = 'I am a public property';

    function _privateMethod() {
        console.log(_privateProperty);
    }

    function publicMethod() {
        _privateMethod();
    }

    return {
        publicMethod: publicMethod,
        publicProperty: publicProperty
    };
})();

hisModule.publicMethod();
console.log(hisModule.publicProperty);
console.log(hisModule._privateProperty);