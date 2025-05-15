document.addEventListener('DOMContentLoaded', () => {

    // --- Change Text Content ---
    // Get references to the paragraph and button
    const myParagraph = document.getElementById('myParagraph');
    const changeTextBtn = document.getElementById('changeTextBtn');

    // Add an event listener to the button
    changeTextBtn.addEventListener('click', () => {
        // Change the text content of the paragraph
        myParagraph.textContent = 'The paragraph text has been changed dynamically!';
    });

    // --- Modify CSS Styles ---
    // Get references to the div and button
    const styleDiv = document.getElementById('styleDiv');
    const changeStyleBtn = document.getElementById('changeStyleBtn');

    // Add an event listener to the button
    changeStyleBtn.addEventListener('click', () => {
        // Modify the inline styles of the div
        styleDiv.style.backgroundColor = 'purple';
        styleDiv.style.color = 'yellow';
        styleDiv.style.width = '200px';
        styleDiv.style.height = '100px';
        styleDiv.textContent = 'Styled!'; // Also change the text inside
    });

    // --- Add and Remove Elements ---
    // Get references to the list and buttons
    const itemList = document.getElementById('itemList');
    const addItemBtn = document.getElementById('addItemBtn');
    const removeItemBtn = document.getElementById('removeItemBtn');

    let itemCounter = 2; // To keep track of item numbers

    // Add an event listener for adding an item
    addItemBtn.addEventListener('click', () => {
        itemCounter++; // Increment counter for new item
        // Create a new list item element
        const newItem = document.createElement('li');
        // Set the text content for the new item
        newItem.textContent = 'New Item ' + itemCounter;
        // Append the new item to the unordered list
        itemList.appendChild(newItem);
    });

    // Add an event listener for removing the last item
    removeItemBtn.addEventListener('click', () => {
        // Get all list items within the list
        const items = itemList.querySelectorAll('li');

        // Check if there are any items to remove
        if (items.length > 0) {
            // Get the last list item
            const lastItem = items[items.length - 1];
            // Remove the last item from its parent (the ul)
            itemList.removeChild(lastItem);
        } else {
            // Alert the user if there are no items to remove
            alert('No items left to remove!');
        }
    });

}); // End of DOMContentLoaded
