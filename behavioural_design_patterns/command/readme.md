# Command Design Pattern 

The Command design pattern is a behavioral design pattern used to encapsulate a request as an object, allowing for parameterization of clients with queues, logging, undo functionality, and operations on remote objects. This pattern decouples the sender of the request from the object that performs the action, promoting loose coupling.

<p align="center">
  <img src="../../static/command.png">
</p>


## Use case  

* **ndo/Redo functionality**: Commands can store the state required to reverse operations.
* **Task Scheduling**: Commands can be queued and executed later.

## Key Components:

* **Command Interface**: Declares an interface for executing operations. Example: execute().
* **Concrete Command**: Implements the Command interface, defining the binding between an action and a receiver. It delegates the work to the receiver.
* **Receiver**: The object that performs the actual work when the command is executed.
* **Invoker**: Triggers the command execution, unaware of how the command works internally.
* **Client**: Creates concrete command objects and sets up the invoker with the commands.