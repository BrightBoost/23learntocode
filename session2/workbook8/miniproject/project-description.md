## **Robot Pet Adoption Center: Exercise Guide**

### **Objective**:
Create a website where users can view available robot pets, adopt them, and add new robot pets to the adoption center.

### **Frontend**:

#### **1. HTML**:
- **Header**:
  - Create a header with a navbar
  
- **Main Content => Optional: do it SPA style**:
  - A list/grid/table view to display available robot pets with:
    - Robot Image
    - Robot Name
    - Software Version
    - Special Functionality (e.g., singing, dancing, etc.)
    - "Adopt" button
  - A form to add a new robot pet with fields for:
    - Robot Name
    - Software Version
    - Special Functionality
    - Bonus: Image Upload

#### **2. CSS**:
- Use a futuristic or tech-inspired design.
- Make use of gradients, sleek fonts, and robotic icons.
- Hover effects for the "Adopt" button.
- Responsive design to ensure the website looks good on all devices.

#### **3. JavaScript**:
- Use `fetch` to:
  - **GET** all robot pets from the server and display them on the website.
  - **DELETE** a robot pet when the "Adopt" button is clicked.
  - **POST** a new robot pet when the form is submitted.

### **Backend** (Node Server):

#### **Provided Functions**:
- `GET /robots` to fetch all robot pets.
- `GET /robots/:id` to fetch a specific robot pet.
- `DELETE /robots/:id` to adopt (delete) a robot pet.

#### **Bonus**: 
1. (Bonus) Implement the **POST** endpoint to add a new robot pet:
   - `POST /robots` to add a new robot pet to the list.
2. Turn your project into a Single Page Application.

### **Other bonus ideas**:
- Implement a search functionality to find robot pets by name or functionality.
- Add a **PUT** endpoint to update robot pet details and implement it on the frontend.
- Integrate some sort of AI API, for example to chat with the pet or that can generate a random robot image when adding a new robot without an image. 


