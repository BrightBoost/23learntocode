
**Objective:** Create a webpage that allows the user to filter characters from "The Office" by department or manager, view their images, choose their favorite characters, and (bonus) add their favorite quotes.

### Step 1: Setup HTML

1. Create a basic HTML structure, including the head and body.
2. Include a title for the page: "The Office: Character Selector."
3. Inside the body, create three dropdowns:
   - The first dropdown is for departments (e.g., Sales, Accounting, etc.).
   - The second dropdown is for characters' names. It will be dynamically populated based on the department selected.
   - The third dropdown is for managers, allowing for another way to filter characters.
4. Create checkboxes next to each name for users to select their favorite characters.
5. Create a div to display an image of the selected character.

### Step 2: Style with CSS

1. Add styles to make the webpage visually appealing.
2. Style the dropdowns, checkboxes, and div containing the image.
3. Include any other styling elements to provide a consistent theme related to "The Office."

### Step 3: Implement JavaScript

Here's sample data you can use:
```javascript
const officeData = {
  departments: {
    'Sales': ['Jim Halpert', 'Dwight Schrute', 'Stanley Hudson'],
    'Accounting': ['Angela Martin', 'Oscar Martinez', 'Kevin Malone'],
    'Customer Service': ['Kelly Kapoor'],
    'Quality Assurance': ['Creed Bratton'],
  },
  managers: {
    'Michael Scott': ['Jim Halpert', 'Dwight Schrute', 'Angela Martin', 'Oscar Martinez', 'Kevin Malone', 'Kelly Kapoor', 'Creed Bratton'],
    'Jim Halpert': ['Stanley Hudson'], // Acting as Manager
    // Additional managers can be added here
  },
  images: {
    'Jim Halpert': 'path/to/jim.jpg',
    'Dwight Schrute': 'path/to/dwight.jpg',
    'Stanley Hudson': 'path/to/stanley.jpg',
    'Angela Martin': 'path/to/angela.jpg',
    'Oscar Martinez': 'path/to/oscar.jpg',
    'Kevin Malone': 'path/to/kevin.jpg',
    'Kelly Kapoor': 'path/to/kelly.jpg',
    'Creed Bratton': 'path/to/creed.jpg',
    // Additional image paths can be added here
  },
  quotes: {
    'Jim Halpert': [],
    'Dwight Schrute': [],
    'Stanley Hudson': [],
    'Angela Martin': [],
    'Oscar Martinez': [],
    'Kevin Malone': [],
    'Kelly Kapoor': [],
    'Creed Bratton': [],
    // Additional characters can be added to the quotes object here
  }
};
```

1. **Populate the Department Dropdown:**
   - Create an object or array to hold the departments and characters.
   - Dynamically populate the department dropdown using the keys of this object.

2. **Dynamically Populate Character Dropdown Based on Department:**
   - Write a function to listen for a change in the department dropdown.
   - Clear and populate the character dropdown based on the department selected.

3. **Add Manager Filtering:**
   - Create an object or array to hold managers and their corresponding characters.
   - Write a function to listen for a change in the manager dropdown.
   - Filter the character dropdown based on the selected manager.

4. **Display Character Image:**
   - Create an object holding the character names and paths to their images.
   - Write a function to listen for a change in the character dropdown.
   - Display the image of the selected character in the designated div.

5. **Bonus: Allow Users to Select Favorite Characters:**
   - Add checkboxes next to the character names.
   - Write a function to store the selections, possibly in local storage or a temp array.

6. **Bonus: Create a "Show Favorites" Button:**
   - Add a button that, when clicked, displays a list of the user's favorite characters, along with their images.

### Step 4: Test

1. Thoroughly test the webpage to ensure that all elements work as expected.
2. Ensure that the filtering functions correctly for both departments and managers.
3. Test the functionality for selecting and displaying favorite characters.

## BONUS BONUS

### Step 5: Add Character Quotes

#### HTML Changes:
1. Add a text input box below the character dropdown for users to enter a quote.
2. Include a "Add Quote" button next to the text input box.
3. Create a div or section to display the character's quotes.

#### CSS Changes:
1. Style the text input box, "Add Quote" button, and the quote display area to make them visually appealing.

#### JavaScript Changes:

1. **Store Quotes:**
   - Create an object to store quotes for each character (e.g., `quotes = { 'Jim Halpert': [], 'Dwight Schrute': [], ... }`).

2. **Add Quote Functionality:**
   - Write a function that triggers when the "Add Quote" button is clicked.
   - Retrieve the quote from the text input box and the selected character from the character dropdown.
   - Add the quote to the corresponding character's array in the quotes object.

3. **Display Quotes:**
   - Modify the function for character selection (from Step 3.4 in the previous instructions) to include displaying the character's quotes.
   - Clear and populate the quote display area with the selected character's quotes each time a new character is chosen.

### Step 6: Additional Testing

1. Test the "Add Quote" functionality to ensure that quotes are added to the correct character's array.
2. Check that quotes are displayed correctly when a character is selected.
3. Try adding multiple quotes for different characters and ensure everything functions smoothly.

