var table = 5;             // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message

if (operator === 'multiplication') {
    // Do multiplication
    while (i < 10) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }
} else {
    // Do multiplication
    while (i < 10) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;