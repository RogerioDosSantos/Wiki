# Entity Framework

**Entity Framework** is an [object-relational mapper (O/RM)](https://en.wikipedia.org/wiki/Object-relational_mapping) that enables *\.NET* developers to work with a database using *\.NET* objects, eliminating the need for most of the data-access code typically required.

---

## EF Core Power Tools

*EF Core Power Tools* is a Visual Studio extension that allows you to emulate the database using *Entity Framework*, visualize the database diagram, and preview changes before applying them.

### Installation

1. In the **Visual Studio Extension menu**, click **Add Extension**.
2. Search for **EF Core Power Tools** and press **Download**.

![](./resources/entity_framework/ef_core_power_tools.png)
![](./resources/entity_framework/ef_core_power_tools_installation.png)
![](./resources/entity_framework/ef_core_power_tools_installation_completed.png)

### Visualizing the Database Context Diagram

With *EF Core Power Tools* installed, you can create a Database Context Diagram file to graphically visualize all **tables, fields**, and their relationships.

![](./resources/entity_framework/ef_core_db_context_model_diagram.png)

> ?? **Note:** This diagram is built based on the *Entity Framework interfaces configuration* (*IEntities interfaces*).

To add the Database Context Diagram to your project:

1. **Right Click** your project
2. Select **EF Core Power Tools**
3. Click **Add DbContextModel Diagram**

![](./resources/entity_framework/ef_core_db_context_model_diagram_add.png)

#### Error When Creating the Diagram

If you encounter an error when creating the diagram:

![](./resources/entity_framework/ef_core_db_context_model_diagram_error.png)

You can manually fix the XML code. For example, the error above occurred because *Visual Studio* expected the property *TenantId* to be without quotes:

![](./resources/entity_framework/ef_core_db_context_model_diagram_error_fix.png)

#### Enabling the Legend on the Diagram

Go to **Filters** and select **Legend**:

![](./resources/entity_framework/ef_core_db_context_model_diagram_legend.png)

---

## Database Migration File

To update the database configuration, *Entity Framework* uses a migration file executed during project initialization. To create a migration file with your changes:

1. In *Visual Studio*, go to **Tools** > **NuGet Package Manager** > **Package Manager Console**

    ![](./resources/entity_framework/package_console_manager.png)

2. Select the project for the migration file:

    ![](./resources/entity_framework/package_console_manager_project.png)

3. Add a migration using the Package Manager Console:

    ```shell
    add-migration <name_of_your_migration>
    ```

    Or using dotnet CLI:

    ```shell
    dotnet ef migrations add <description_of_the_migration> --project <project_file_path>
    ```

    ![](./resources/entity_framework/add_migration_command.png)

---

## Temporal Tables

*Entity Framework* allows you to save the history of table content changes so they can be consulted or restored later. This is done through [Temporal Tables](https://learn.microsoft.com/en-us/ef/core/providers/sql-server/temporal-tables).

- [Temporal Tables Introduction Video](https://www.youtube.com/watch?v=i5kjiZ4tBnI)

---

## References

- [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)
- [Entity Framework Best Practices - Video](https://www.youtube.com/watch?v=qkJ9keBmQWo)

---

