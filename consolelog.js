// Q1: Function to capture and log a click event
function captureAndLogClick(event) {
    const timestamp = new Date().toISOString();
    const elementType = event.target.tagName.toLowerCase();
    
    // Q2: Determine the event object category
    let eventObject = 'unknown';

    // Basic categorization based on HTML tags
    if (elementType === 'a') {
        eventObject = 'link';
    } else if (elementType === 'button') {
        eventObject = 'button';
    } else if (elementType === 'img') {
        eventObject = 'image';
    } else if (['input', 'select', 'textarea'].includes(elementType)) {
        // Special check for dropdowns (select tags)
        eventObject = elementType === 'select' ? 'drop_down' : 'input_field';
    } else if (['h1', 'h2', 'h3', 'p', 'span'].includes(elementType)) {
        eventObject = 'text';
    } else if (elementType === 'li') {
        eventObject = 'list_item';
    }
    
    // Q3: Print the output in the specified format
    console.log(
        `Q ${timestamp}, type_of_event (click), event_object (${eventObject})`
    );
}

// Attach the function to the document for global click capture
document.addEventListener('click', captureAndLogClick);


// Q4: Function to capture and log a page view
function captureAndLogPageView() {
    const timestamp = new Date().toISOString();
    const eventObject = 'page';
    
    // Q5: Print the page view output
    console.log(
        `Q: ${timestamp}, type_of_event (view), event_object (${eventObject})`
    );
}

// The 'load' event fires when the entire page, including resources, has loaded.
window.addEventListener('load', captureAndLogPageView);

// Alternatively, use 'DOMContentLoaded' if you only need the HTML structure to be ready.
// window.addEventListener('DOMContentLoaded', captureAndLogPageView);

// --- Explanation and Consolidation (Conceptual Q1-Q5 done above) ---
console.log('--- Event Tracker Initialized ---');
console.log('Click anywhere on the page to see Q output.');
console.log('Refresh the page to see Q5 output.');