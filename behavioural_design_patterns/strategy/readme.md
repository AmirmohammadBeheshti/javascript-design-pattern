# Strategy Design Pattern

<p align="center">
  <img src="../../static/strategy.png">
</p>


The Strategy pattern is a behavioral design pattern that lets you define a family of algorithms, put each of them into separate classes, and make their objects interchangeable. In other words, it's a way to change the behavior of an object at runtime without changing its implementation.

## Real World Use Case 
Imagine that you have to get to the airport. You can catch a bus, order a cab, or get on your bicycle. These are your transportation strategies. You can pick one of the strategies depending on factors such as budget or time constraints.

## Advantages

* Open/Closed Principle. You can introduce new strategies without having to change the context.

*  You can isolate the implementation details of an algorithm from the code that uses it.

*  You can swap algorithms used inside an object at runtime.


## Why Use Strategy Pattern   

* Multiple Variants of an Algorithm:

    You have several ways of performing an operation (e.g., different sorting algorithms, different payment methods, or different discount strategies). The Strategy pattern lets you switch between these implementations dynamically.
    Example: An e-commerce platform might apply different tax calculation strategies depending on the region of the user.

* When You Want to Avoid if-else or switch Statements:

    If you have large blocks of conditional logic that decide which behavior to execute, you can replace them with a Strategy pattern, which encapsulates each algorithm into its own class.
    Example: In a game, you might have different attack strategies for different types of characters (melee, ranged, magic), and rather than using conditionals, you implement each strategy separately.

* When the Behavior of an Object Should be Easily Changeable:

    The Strategy pattern allows the behavior of an object to be easily modified at runtime by changing its strategy. This makes the system flexible, as you can swap strategies without changing the client.
    Example: A text editor might apply different compression algorithms depending on the user's selection, such as lossless or lossy compression.

* When You Want to Isolate Varying Behavior:

    You can use the Strategy pattern to separate the implementation of various algorithms from the class that uses them, promoting cleaner code and making it easier to manage or extend the algorithms independently.
    Example: An online shop's pricing mechanism might vary based on promotions, special offers, or user status (e.g., VIP discounts), and each pricing algorithm is encapsulated in a separate class.

* When You Need to Adhere to the Open/Closed Principle:
* When You Need to Adhere to the Open/Closed Principle:

    The Strategy pattern supports the Open/Closed Principle (one of the SOLID principles), meaning the system is open for extension but closed for modification. You can add new strategies (algorithms) without modifying existing code.
    Example: A transportation app calculates fares using different strategies, such as distance-based, time-based, or surge pricing. Adding new pricing strategies doesn't require modifying the existing system.