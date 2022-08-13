# Code Design

## Important design to consider in the code

1.  When designing a new class or revising existing ones, try to describe what the class does in one sentence. If there are multiple "and" or "or" conjunctions in a sentence, the class is likely violating the Single Responsibility Principle and needs to be redesigned or refactored.
2.  When you instantiate an object with `new()` keyword, you should also consider other approaches: delegate object instantiation to DI-container, implement a factory, retrieving the pre-created object from the object pool etc. `new()` is a glue that create tight coupling between classes.
3.  When extending the behavior of an existing object by changing its code, consider whether you are violating the Open-Closed principle. Consider keeping the behavior you want to add separate from the existing object by implementing the decorator pattern, extension methods, or aspect-oriented programming techniques.
4.  Make sure the class you implement doesn't depend on low-level abstractions. For example, some `IOrderService` that is responsible for implementing business use cases should not depend on `ISmtpServer` directly. There should be at least one more `IMailService` abstraction between `IOrderService` and `ISmtpServer.`
5.  The tight coupling between classes can greatly complicate their reusability and overall maintainability of the system. To mitigate this, use interfaces, dependency injection, mediator pattern, publish/subscribe mechanism, and other techniques to achieve loose coupling between components.
6.  Injecting the same group of interfaces into many different classes may indicate that there is a missing abstraction problem. For example, interfaces `IPdfReader` and `IPdfWriter` should be grouped under higher-level abstraction like `IPdfProvider` to make them easier for clients to use.
7.  All dependencies of a class should be injected into its constructor (explicit dependencies). The class should not use or should minimize the use of implicit dependencies: instantiating dependencies directly in methods or calling static classes.
8.  When there are many overloaded constructors in a class, they can be replaced with static factory methods. The main benefit is that a static factory method can have a unique, self-descriptive name, unlike a constructor.
9.  Consider abstracting your code from dependencies that provide non-deterministic results, such as `DateTime`, to make it easier to unit test and generally make method/function outputs more predictable.
10. Consider replacing all primitive types (e.g. string) that represent domain concepts (e.g. customer email) with value objects to avoid the Primitive Obsession problem. Value objects can encapsulate validation logic and make the code much readable.
11. Consider refactoring if-else statements to [different patterns](https://levelup.gitconnected.com/treat-if-else-as-a-code-smell-until-proven-otherwise-3bd2c4c577bf) depending on the case: table-driven methods, strategy pattern, template method pattern, state pattern, factory pattern etc.
12. Whenever possible, use immutable data types instead of mutable ones to minimize concurrency issues and side effects in the application.
13. Use pure functions (their output depend only on input parameters; they don't modify external state of the system) as much as possible to have a predictable and maintainable code.
14. Choose a data structure according to the [asymptotic complexities](https://www.bigocheatsheet.com/) of its Insert, Update, Delete and other operations and your data usage scenario.
15. Consider splitting the method/function into smaller ones if the list of input parameters is long, if it has many lines of code, or if you can't describe what the function does in one sentence without conjunctions.
16. If a only single instance of a class must exist for the lifetime of the application, consider registering that object as a singleton in the dependency injection container instead of implementing a singleton pattern based on a static field.
17. When you need to implement logic to create a deep copy of a complex object graph, consider using [serialization/deserialization](https://levelup.gitconnected.com/5-ways-to-clone-an-object-in-c-d1374ec28efa). Other approaches, such as implementing a clone method in each class involved in cloning process, can be quite a repetitive task.
18. Avoid singleton stateful objects in your application to avoid concurrency issues due to concurrent access to an object from multiple threads. If the state is needed in a singleton, implement critical sections or other thread synchronization constructs.
19. Don't inject an instance that has per-request lifetime into a singleton to avoid a problem called captive dependency.
20. When copying and pasting code, implementing some quick workaround due to lack of time, business pressure, etc., always create a tech debt ticket into the issue tracking system.

