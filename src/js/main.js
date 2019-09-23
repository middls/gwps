import * as serviceWorker from "./tools/serviceWorker";
import ready from "./tools/dom/ready";

// Import Components

// Factories class based plugins
// Example
// Accordion(".accordion");

// Simple functional plugins
// Example
// Demo();

// DOMContentLoaded
ready(function() {
    
});

// If you want your app to work offline and load faster, you can change
// `unregister()` to `register()` below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

export {

}