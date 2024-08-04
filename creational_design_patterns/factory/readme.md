# Factory Design Pattern 


The Factory Pattern is a creational design pattern used to create objects in a way that abstracts the instantiation process. It defines an interface for creating an object but lets subclasses alter the type of objects that will be created. This pattern is particularly useful when you need to create different instances of objects at runtime without specifying the exact class of the object that will be created.    


## Simple example for this design pattern 

Imagine you have a bakery. You need to produce different types of bread (like white, whole wheat, and rye). Instead of directly creating each bread type yourself, you create a "bread maker" (the factory) that knows how to make different types of bread based on your instructions.

## When to Use the Factory Pattern

* When you need to create objects based on conditions or configurations.
* When you want to hide the creation logic of objects.
* When you want to make your code more flexible and extensible. 

## UseCase 

* Creating different types of database connections (MySQL, PostgreSQL, etc.).
* Creating different types of user interfaces (web, mobile, desktop).
* Creating different types of logging mechanisms (console, file, database).