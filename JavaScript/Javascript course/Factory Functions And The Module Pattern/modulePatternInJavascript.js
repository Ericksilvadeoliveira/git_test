// Additional example of creating and using a module pattern

// Declaring module dependencies

// I like to treat modules as closed entities. Meaning, they reside within themselves and nothing more is needed for them to exist. But sometimes you may want to work with, for example, DOM or window global object.

// To achieve that, module may have dependencies. Let’s try to write a function that will write a message to our requested HTML element.


const documentMock = (() => ({
    querySelector: (selector) => ({
        innerHTML: null,
    }),
}))();

const formatter = (function(doc) {
    //3* the argument (DOC) (see comment 3*//
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const MakeUppercase = (text) => {
        log("Making Uppercase");
        return text.toUpperCase();
    };

    
    const writeToDOM = (selector, message) => {
        // document.querySelector(selector).innerHTML = message;

        // It works out of the box (assuming that we have an element with id target in our DOM). Sounds great, but document is available only when the DOM is accessible. Running the code on a server would produce an error. So, how to make sure that we’re good to go?

        // One of the options is to check whether document exists.

        // cheking

        if (!!doc && "querySelector" in doc) {

            //3* And this pretty much takes care of everything, but I don’t like it. Now the module really depends on something from the outside. It’s „I will go only if my friend will go too” scenario. It has to be like this?

            // No, of course not.

            // We can declare our module’s dependencies and inject them as we go.

            //At the top, there is now an argument to our function

            doc.querySelector(selector).innerHTML = message;
        }
    }

    return {
        MakeUppercase,
        writeToDOM,
    }

})(document || documentMock);

formatter.writeToDOM(".target", 'Tengo lengo tengo');

// read comments inside the module



