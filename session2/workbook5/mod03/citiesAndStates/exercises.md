### 1. **State Dropdown List**
**Objective**: Create a dropdown list of all states. 

*Instructions*:
- Fetch all states from the `/api/states` endpoint.
- Use the fetched data to populate a dropdown (`<select>`) element with options (`<option>`) for each state. Display the state name but use the state code as the value.
  
---

### 2. **Display Cities For Selected State**
**Objective**: Display a list of cities for a state when it is selected from the dropdown list created in exercise 1.

*Instructions*:
- Add an event listener to the state dropdown list.
- When a state is selected, fetch cities for that state from the `/api/cities_in_state/:id` endpoint using the state code.
- Display the list of cities in a div or unordered list (`<ul>`).
  
---

### 3. **City Search Box**
**Objective**: Create a search box where users can type a city's name and see which states have a city with that name.

*Instructions*:
- Create an input box for city name and a button to trigger the search.
- Add an event listener to the button.
- When the button is clicked, filter the city data to find cities with matching names and display the state names in a result div or list.

---

### 4. **State Info Card**
**Objective**: Create a "card" that displays information about a selected state.

*Instructions*:
- Create a div that acts as a card with placeholders for state name and a list of cities.
- When a state is selected from the dropdown (from exercise 1), update the card to show the state name and a list of its cities.

---

### 5. **City and State Filter Table**
**Objective**: Create a table that displays all cities and their states. Include a filter box to narrow down the table based on city or state name.

*Instructions*:
- Fetch all cities and display them in a table format with their respective state.
- Above the table, have two input boxes: one for city name and one for state name.
- As a user types in these boxes, filter the table to only show rows that match the input criteria.

---

### 6. **Dynamic Breadcrumbs**
**Objective**: Create a navigation breadcrumb based on user interactions. Add a dropdown for state, and a dropdown for city. The dropdown for city needs to be populated when a state gets selected.

*Instructions*:
- Start with a simple "Home > States" breadcrumb.
- When a state is selected, update the breadcrumb to "Home > States > [Selected State]".
- When a city within that state is selected or viewed, update it further to "Home > States > [Selected State] > [Selected City]".

---


### 7. **Interactive Map (Advanced)**
**Objective**: Use an SVG map of the US. When a state on the map is clicked, display its cities.

*Instructions*:
- Find or create an SVG map of the US with each state as a clickable area.
- Attach click event listeners to each (or three if you're lazy) state on the map.
- When a state is clicked, fetch cities for that state and display them in a list (or on the map itself if you're really unstoppable).