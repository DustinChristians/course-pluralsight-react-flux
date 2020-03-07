import { Dispatcher } from 'flux'; // Import the dispatcher from Facebook's Flux library
const dispatcher = new Dispatcher(); // Create an instance of the dispatcher
export default dispatcher; // Export the instance of the dispatcher

// This is a single dispatcher that the rest of the app can use. It's a singleton.
// There's only one dispatcher per application. The dispatcher is the central hub for
// the app. This dispatcher will hold a list of callbacks, and all our apps actions
// will be dispatched via this dispatcher. The stores will register with this dispatcher
// to say that they'd like to be informed when actions occur.
