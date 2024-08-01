# Builder Design Pattern

<p align="center">
  <img src="../../static/builder.png">
</p>

The Builder Pattern is a design pattern in software engineering used to create complex objects step-by-step. It separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

## Key Concepts of the Builder Pattern

* **Director:** This is the component responsible for controlling the building process. It uses a builder to construct an object by calling specific steps in a particular sequence. The director is optional and can be omitted if the client can handle the sequence itself.      
A Director can offer reusable methods for constructing different variations of an object. This can be useful when you need to create multiple types of objects with a similar construction process but with different parameters.       
he Director can enforce consistency and ensure that certain default values or steps are applied. This can help prevent errors and ensure that objects are created correctly.

* **Builder Interface:** Defines all the construction steps needed to build a product. This interface typically includes methods for creating different parts of the product.

* **Concrete Builder:** Implements the Builder interface to create and assemble the parts of the product. Each Concrete Builder is responsible for a specific representation of the object. It keeps track of the object it creates and provides a method to retrieve the final product.

* **Product:** The final object that is being built. It is usually a complex object that requires a step-by-step process to create.

## Builder useCase 

* Complex Document: Building documents with various sections.
* User Profile: Constructing user profiles with multiple optional attributes.
* Complex Query: Creating complex database queries with various clauses.