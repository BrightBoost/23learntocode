### Part 1: Create the Classes

1. **Create a `Laptop` class.**
    - It should have at least one property (e.g., `brand`) and a method (e.g., `printDetails()` that prints the details of the laptop).

2. **Create a `Chihuahua` class.**
    - It should have at least one property (e.g., `name`) and a method (e.g., `bark()` that prints a barking sound).
   

### Part 2: Create Specific Bags

3. **Create a `LaptopBag` class.**
    - It should have a property `content` that can hold a `Laptop` object

4. **Create a `ChihuahuaBag` class.**
    - It should have a property `content`  that can hold a `Chihuahua` object

5. **In your `main` method in another class, do the following:**
    - Instantiate a `LaptopBag` and add `Laptop` objects to it.
    - Instantiate a `ChihuahuaBag` and add `Chihuahua` objects to it.


### Part 3: Generic Bag

6. **Create a generic `Bag<T>` class.**
    - This class should be able to store any type of object.
    - It should have a method to add an object to the bag and, if you like, methods to remove an object from the bag and to print all objects.


### Part 4: Instantiation and Usage

7. **In your `main` method or another test class, do the following:**
    - Instantiate a `Bag<Laptop>` and add a `Laptop` to it.
    - Instantiate a `Bag<Chihuahua>` and add a `Chihuahua` to it.
