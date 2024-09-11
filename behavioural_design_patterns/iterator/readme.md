# Iterator Design Pattern 

The Iterator pattern is a design pattern that allows sequential access to elements in a collection, without exposing its underlying representation. It provides a way to access the elements of an aggregate object sequentially without exposing the underlying details.

<p align="center">
  <img src="../../static/iterator.png">
</p>

## Use Case: Iterating through Products in Different Categories

### Scenario
In an e-commerce platform like Amazon, products are categorized (e.g., Electronics, Clothing, Home Appliances). A user might browse products in a specific category or compare products across multiple categories. The platform might store products in various ways (arrays, databases, external APIs), and the user needs to browse them without worrying about their internal structure.

### Problem

The UI needs to allow users to easily browse products in different categories without exposing how the products are retrieved or stored (e.g., a local array, a remote API, or database queries).