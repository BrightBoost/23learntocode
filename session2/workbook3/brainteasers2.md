1. **Krusty Krab Profit Calculator**: Mr. Krabs needs a function that takes the number of Krabby Patties sold and the number of customers. One Krabby Patty costs 3.95. The function returns the total profit for the day.

2. **Squidward's Day Off Scheduler**: Write a function that takes Squidward's daily activities as an array of objects, with each object containing the name of the activity and the number of hours it takes. Also, take a number representing the total hours Squidward has free. Return an array of activities that Squidward can fit into his day off, without exceeding the available hours.

3. **Patrick's Rock Lifting**: Patrick loves to lift rocks, and he's decided to make it a daily workout routine! He starts with a rock that has an initial weight and adds more weight to it every day. Write a function that takes the following parameters:

`initialWeight`: The initial weight of the rock (in kilograms).
`dailyWeights`: An array of weights (in kilograms) that Patrick adds to the rock each day. The array's length represents the number of days Patrick has been training.
`weightLimit`: The maximum weight (in kilograms) that Patrick can lift. When the rock's weight exceeds this limit, Patrick can't lift it anymore.
The function should return the day on which the rock's weight exceeds the given limit. If the rock never exceeds the weight limit, return a message like "Patrick can lift the rock for all the given days!".

4. **Jellyfish Jam Detector**: SpongeBob loves to dance to jellyfish jams, and he's looking for a specific tune that really gets the jellyfish moving! Write a function that takes the following parameters:

   - `notes`: A string containing a sequence of musical notes (e.g., "CDEFGABC"). Each note can be a letter from "A" to "G", and the sequence represents the music.
   - `pattern`: A string containing the specific pattern of notes that constitutes the jellyfish jam SpongeBob is looking for (e.g., "CDE").

   The function should return a message indicating whether the pattern was found in the notes and, if so, the starting position of the pattern within the notes. If the pattern is not found, return a message like `"Jellyfish jam not detected!"`.

5. **Bubble Blower**: SpongeBob is blowing bubbles with different shapes. Write a function that takes a shape as a string (e.g., "circle", "square") and returns a string description of how SpongeBob blows that bubble. (Hint: use an array of objects.)

6. **Mermaid Man and Barnacle Boy's Adventure Simulator**: Write a function that simulates an adventure with Mermaid Man and Barnacle Boy. The function should take an array of challenges, where each challenge is an object with properties like `name`, `difficulty`, and `requiredPower`. Based on the heroes' abilities, which you can define as constants in your code, the function should return an array of outcomes (e.g., "success" or "failure"). Include an explanation of the logic that determines success or failure for each challenge.

7. **Sandy's Science Experiment**: Sandy is conducting science experiments with different chemicals. Write a function that takes an object representing an experiment's parameters, such as `chemicalA`, `chemicalB`, `temperature`, and `pressure`. Define a scientific formula (it can be fictional) and return the outcome based on the given parameters. Include comments in your code explaining the logic of the experiment.

8. **Plankton's Plan Decoder**: Write a function that takes a string of Plankton's secret plans encoded using a simple cipher (e.g., shifting each letter by a fixed number of positions in the alphabet). The function should return the decoded plan. Additionally, write another function that takes a plain text plan and returns the encoded version using the same cipher. Include examples and explanations of the encoding and decoding process.

9. **Gary's Snail Trail**: Gary the snail leaves a trail as he moves. Write a function that takes an array of directions (e.g., `["left", "right", "up", "down"]`) and a starting position (e.g., `{ x: 0, y: 0 }`). The function should return an array representing Gary's path, with each element containing the new coordinates after moving in the given direction. Include boundary conditions to ensure Gary doesn't move outside a defined grid.

10. **Krusty Krab Order Organizer**: During rush hours, the Krusty Krab gets very busy. Write a function that takes an array of orders, where each order is an object with properties like `menuItem`, `quantity`, `customerType`, and `specialRequest`. Define a set of priority rules (e.g., prioritizing larger orders, certain menu items, or VIP customers) and return a sorted array of orders based on those rules. Include comments explaining the priority logic and how the sorting is achieved.
