# OLE DB #

## Connection Strings ##

### Microsoft Access (2013 / 2010 / 2007)###

#### Standard Security ####

````
Provider=Microsoft.ACE.OLEDB.12.0;Data Source=<file path>;Persist Security Info=False;
````

#### With database password ####

````
Provider=Microsoft.ACE.OLEDB.12.0;Data Source=<file path>;Jet OLEDB:Database Password=<password>;
````

### CSV Files ###  

````
Provider=Microsoft.Jet.OleDb.4.0; Data Source=<file path>;Extended Properties="Text;HDR=YES;FMT=Delimited"
````

Connect to a CSV file indicated on the <file path>. 

Note: On your SQL statment use the <file name> as your table. E.g.: `SELECT * FROM [<file name>]`

### SQL Server 2000 ###

#### Standard Security ####

````
Provider=sqloledb;Data Source=<server address>;Initial Catalog=<database>;User Id=<user name>;Password=<password>;
````

### SQL Server 7.0 ###

#### Standard Security ####

````
Provider=sqloledb;Data Source=<server address>;Initial Catalog=<database>;User Id=<username>;Password=<password>;
````

#### Trusted connection ####

````
Provider=sqloledb;Data Source=<server name>\<instance name>;Initial Catalog=<database>;Integrated Security=SSPI;
````

## Implementation examples ##

### C# ###

```csharp
Dataset GetDataset(String name, String connection_string, String sql_statement)
{ 
  var connection = new OleDbConnection(connection_name);
  connection.Open();
  var adapter = new OleDbDataAdapter(sql_statement, connection);
  var dataset = new DataSet(name);
  adapter.Fill(dataset);                    
  return dataset;
}
````
    
