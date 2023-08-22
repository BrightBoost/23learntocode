## Basic Exercises

1. **Fetching a single user every time**

    - Create a new HTML page with a button element.
    - Attach a click event listener to the button.
    - Inside the click event listener, use `fetch` to get data from the following endpoint: `https://jsonplaceholder.typicode.com/users/1`.
    - When the fetch call is successful, log the data to the console.

2. **Fetching data based on user input**

    - Create a new HTML page with an input box and a button element.
    - Attach a click event listener to the button.
    - When the button is clicked, get the value from the input box.
    - Use `fetch` to get data from this endpoint, replacing `:id` with the input value: `https://jsonplaceholder.typicode.com/users/:id`.
    - When the fetch call is successful, display the user's name on the page.

3. **Displaying a list of users**

    - Create a new HTML page with a select element.
    - On window load, use `fetch` to get data from this endpoint: `https://jsonplaceholder.typicode.com/users`.
    - When the fetch call is successful, loop through the data and create a options of user names with id values.
    - **Bonus**: On change of the select, fetch the details of that user (yes you have the details already, but it's a good exercise) and populate a table. 
    - **Bonus**: Continue with the advanced exercise 1.



## Advanced Exercises

1. **Fetching and displaying posts by user**

    - Create a new HTML page with a dropdown list of users.
    - On window load, use `fetch` to get a list of users from `https://jsonplaceholder.typicode.com/users`.
    - Populate the dropdown with the user names.
    - Attach a change event listener to the dropdown.
    - When the dropdown changes, use `fetch` to get posts by the selected user from `https://jsonplaceholder.typicode.com/posts?userId=:id`.
    - Display the titles of the posts on the page.



2. **Fetching and displaying post comments**
    - If you did Advanced Exercise 1 and that was easy, please move on to the next exercise.
    - Create a new HTML page with a dropdown list of posts.
    - On window load, use `fetch` to get a list of posts from `https://jsonplaceholder.typicode.com/posts`.
    - Populate the dropdown with the post titles.
    - Attach a change event listener to the dropdown.
    - When the dropdown changes, use `fetch` to get comments for the selected post from `https://jsonplaceholder.typicode.com/comments?postId=:id`.
    - Display the comments on the page.


3. **Fetching and displaying user, post, and comments**

    - Create a new HTML page with a dropdown list of users and a div element for displaying data.
    - On window load, use `fetch` to get a list of users from `https://jsonplaceholder.typicode.com/users`.
    - Populate the dropdown with the user names.
    - Attach a change event listener to the dropdown.
    - When the dropdown changes, use `fetch` to get posts by the selected user from `https://jsonplaceholder.typicode.com/posts?userId=:id`.
    - For each post, use `fetch` to get comments from `https://jsonplaceholder.typicode.com/comments?postId=:id`.
    - Display the user's name, post titles, and comments for each post in the div element.


