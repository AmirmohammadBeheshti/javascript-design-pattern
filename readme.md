# Design Patterns Implementation

### Overview

This repository contains implementations of various design patterns in software engineering. Design patterns are standard solutions to common problems in software design, making code more flexible, reusable, and maintainable. By providing these implementations, the goal is to offer a practical reference for developers to understand and apply these patterns in their own projects.   

### Design Patterns Included

#### Creational Patterns

* ``Singleton``: Ensures a class has only one instance and provides a global point of access to it.
* ``Factory Method``: Defines an interface for creating an object but lets subclasses alter the type of objects that will be created.
* ``Builder``: Separates the construction of a complex object from its representation, allowing the same construction process to create various representations.
* ``Prototype``: Creates new objects by copying an existing object, known as the prototype.


#### Structural Patterns
* ``Adapter``: Allows incompatible interfaces to work together by converting the interface of a class into another interface expected by clients.
* ``Composite``: Composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions uniformly.
* ``Decorator``: Adds additional responsibilities to an object dynamically, providing a flexible alternative to subclassing for extending functionality.
* ``Facade``: Provides a simplified interface to a complex subsystem, making it easier to use.
* ``Flyweight``: Reduces the cost of creating and managing a large number of similar objects by sharing common parts of the state between them.
* ``Proxy``: Provides a surrogate or placeholder for another object to control access to it.

#### Behavioral Patterns
* ``Chain of Responsibility``: Passes a request along a chain of handlers, allowing multiple objects to handle the request without the sender needing to know which object will handle it.
* ``Command``: Encapsulates a request as an object, allowing for parameterization of clients with queues, requests, and operations.
* ``Interpreter``: Defines a representation for a language’s grammar and an interpreter that uses the representation to interpret sentences in the language.
* ``Iterator``: Provides a way to access elements of a collection sequentially without exposing the underlying representation.
* ``Mediator``: Reduces coupling between classes by using a mediator object to handle communication between them.
* ``Memento``: Captures and externalizes an object’s internal state without violating encapsulation, allowing the object to be restored to this state later.
* ``Observer``: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
* ``State``: Allows an object to alter its behavior when its internal state changes, appearing to change its class.
* ``Strategy``: Defines a family of algorithms, encapsulates each one, and makes them interchangeable, allowing the algorithm to vary independently from clients that use it.
* ``Template`` Method: Defines the skeleton of an algorithm in a method, deferring some steps to subclasses without changing the algorithm’s structure.
* ``Visitor``: Separates an algorithm from the objects on which it operates, allowing new operations to be added without changing the objects’ classes.