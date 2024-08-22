# Composit Design Pattern 

<p align="center">
  <img src="../../static/composite.png">
</p>


The composite pattern is a structural design pattern that allows you to treat a group of objects as a single object. It's particularly useful when you have hierarchical structures, like **trees** or **graphs**.         

Here's a simple explanation using a real-world example:       

**Imagine a company structure**
* At the top, you have the CEO.
* Under the CEO, there are departments (like Sales, Marketing, Engineering).
* Each department has teams (e.g., Sales Team A, Sales Team B).
* Each team has individual employees.

Using the composite pattern, you can represent all of these entities (CEO, departments, teams, and employees) as objects that share a common interface. T


**Key Concepts of the Composite Pattern:**
* **Component:** This is the base interface or abstract class for all objects in the composition. It declares the common operations that can be performed on both simple and complex objects.

* **Leaf:** A "leaf" is an individual object that **doesn’t have any children**. It implements the operations declared in the Component interface.

* **Composite:** This class represents complex objects that may have children. **It stores child components** and implements operations that involve children, often delegating the work to its children.