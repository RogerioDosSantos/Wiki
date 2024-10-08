# Entity Framework

The *Entity Framework* servers an [object-relational mapper (O/RM)](https://en.wikipedia.org/wiki/Object-relational_mapping), enabling *.NET* developers to work with a *database* using *.NET* objects, and eliminating the need for most of the data-access code it usually need to write.

## EF Core Power Tools 

This is a *Visual Studio* plugin extension that among other allows you to emulate the database using the *Entity Framework*. With this tool you can visualize the database diagram and vizualise your changes before you apply it.

### Installation

- On the *Visual Studio Extension menu*. Click on add extension 

- Search for EF Core Power Tools and press download 

![]( https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/entity_framework/ef_core_power_tools.png )

- Close the all *Visual Studio instances*. Make sure that everything is closed including any debug console.

- The VSIX windown press modify

![]( https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/entity_framework/ef_core_power_tools_installation.png )

- The following will appear once the installation is completed 

![]( https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/entity_framework/ef_core_power_tools_installation_completed.png )

### Vizualizing the Database Context Diagram 

With the *EF Core Power Tools* installed, you can create a Database Context Diagram file that will allow you to graphically visualize all *Tables, Fields* and the relationship among them.

![]( https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/entity_framework/ef_core_db_context_model_diagram.png )

Note: This diagram is build based on the *Entity Framework interfaces configuration* (*IEntities interfaces*)

To add the *Database Context Diagram* into your project, *Right Click* in your *Project* >> *EF Core Power Tools* >> Add DbContextModel Diagram

![]( https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/entity_framework/ef_core_db_context_model_diagram_add.png )

#### Error when creating the diagram 

If you face an error when creating the diagram:

![]( https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/entity_framework/ef_core_db_context_model_diagram_error.png )

You can manually fix the *XML* code. For example the error above happened because *Visual Studio* was expecting the property *TenantId* to be without *quotes*

![]( https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/entity_framework/ef_core_db_context_model_diagram_error_fix.png )

#### Enabling the legend on the Diagram 

Go to the *Filters* and select *Legend*

![]( https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/entity_framework/ef_core_db_context_model_diagram_legend.png )

## Database Migration File

To update the database configuration the *Entity Framework* uses a migration file that is executed during the initialization of your project. To create a migration file with your changes execute the following:

- On *Visual Studio* go to *Tools* >> *NuGet Package Manager* >> *Package Manager Console* 

![]( https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/entity_framework/package_console_manager.png )

- Select the project that the migration file will be created 

![]( https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/entity_framework/package_console_manager_project.png )

- Execute the command 

```shell
add-migration <name_of_your_migration>
```

or if you are using dotnet

```shell
dotnet ef migrations add <description_of_the_migration> --project <project_file_path>
```

![]( https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/entity_framework/add_migration_command.png )

## Temporal Tables

*Entity Framework* allows you to save the history change of a table content so it can be conslted and/or restored later. This is done trough [Temporal Tables](https://learn.microsoft.com/en-us/ef/core/providers/sql-server/temporal-tables).

- [Temporal Tables Introduction Video](https://www.youtube.com/watch?v=i5kjiZ4tBnI)

## References 

- [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)
- [Entity Framework Best Practices - Video](https://www.youtube.com/watch?v=qkJ9keBmQWo)

