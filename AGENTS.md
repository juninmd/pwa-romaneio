```markdown
# AGENTS.md Guidelines

These guidelines are designed to ensure high-quality, maintainable, and effective code for the AGENTS repository. Adherence to these principles is crucial for long-term project stability and scalability.

## 1. DRY (Don't Repeat Yourself)

*   All code should have single, well-defined responsibilities.
*   Avoid duplicating logic and functionality.
*   Refactor duplicated code into reusable components.
*   Leverage existing libraries and modules whenever possible.

## 2. KISS (Keep It Simple, Stupid)

*   Prioritize simplicity in design and implementation.
*   Avoid unnecessary complexity.
*   Strive for readability and easy understanding.
*   Keep code concise and to the point.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/module should have one, and only one, reason to change.
*   **Open/Closed Principle:**  The system should be extensible through addition of new features without modifying existing code.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients shouldn't be forced to implement interfaces they don't use.
*   **Dependency Inversion Principle:** High-level modules should not depend on low-level modules; they should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement functionality that is explicitly required.
*   Avoid adding features that are not currently needed.
*   Focus on delivering working code first.  Refactoring can come later.

## 5. Code Style & Formatting

*   **Indentation:** Use 2 spaces for indentation.
*   **Line Length:** Maximum 120 characters per line.
*   **Naming Conventions:** Follow established naming conventions (e.g., camelCase for variables, PascalCase for classes, etc.).
*   **Comments:** Add clear and concise comments explaining complex logic, design decisions, and potential edge cases.
*   **Code Formatting:** Use a code formatter (e.g., `black` or `autopep8`) to enforce consistent formatting.

## 6. Test Coverage Requirements

*   **Minimum:** 80% coverage.
*   **Types of Tests:**
    *   Unit Tests:  Each function/class should be thoroughly tested.
    *   Integration Tests:  Tests should validate interactions between multiple components.
    *   End-to-End Tests: Tests should simulate real-world scenarios.
*   **Test Data:** Utilize realistic test data.  Avoid using hardcoded data.

## 7. File Size Limit

*   Maximum File Size: 180 lines of code.

## 8. Development Practices

*   **Code Reviews:**  All code changes must be reviewed by at least one other developer before merging.
*   **Version Control:** Use Git for version control.
*   **Documentation:**  Document changes and rationale for new code.
*   **Error Handling:** Implement robust error handling and logging.
*   **Security:** Prioritize security considerations throughout the development process.

## 9.  Specific Considerations - AGENTS (Placeholder - Adapt as needed)

*   **Data Structures:**  Specify data structures explicitly (e.g., using `dataclass` for classes).
*   **Algorithms:** Outline any key algorithms used and their rationale.
*   **Error Reporting:** Clearly define error reporting mechanisms.
*   **API Design:**  Consider API design principles (e.g., REST principles).

## 10.  Guidelines for specific modules (Illustrative - adjust as necessary):

*   **Network Module:**  Follow best practices for network communication.  Minimize network dependencies.
*   **Data Processing Module:** Use appropriate data types and algorithms.
*   **Agent Management Module:**  Ensure clear and consistent contract definitions.

These guidelines are intended as a living document and may be updated as the project evolves.  Continuous monitoring and adaptation are crucial for maintaining high-quality code.
```