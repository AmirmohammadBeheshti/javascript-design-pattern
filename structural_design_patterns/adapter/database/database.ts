// Problem => Migrate From SQL database to NoSQL database

interface Database {
    connect(connectionString: string): void;
    disconnect(): void;
    query(sqlQuery: string): Promise<any>;
  }
  
  class SQLDatabase implements Database {
    connect(connectionString: string): void {
      console.log("Connect To SQL database");
    }
    disconnect(): void {
        console.log("Disconnect From SQL Database ");
    }
  
      query(sqlQuery: string): Promise<any> {
          console.log("Execute Query On SQL Database");
          return Promise.resolve([])
      }
  }
  
  class NoSQLDatabase {
    connectToDatabase(uri: string): void {
      console.log("Connect To NoSQL Database ");
    }
  
    closeConnection(): void {
      console.log("Close Connection From NoSQL Database");
    }
  
    find(collectionName: string, query: object): Promise<any[]> {
      console.log("Execute Query On SQL Database");
      return Promise.resolve([])
    }
  }
  
  class DatabaseAdapter implements Database {
  
    constructor(private NoSqlDatabase: NoSQLDatabase){}
  
    disconnect(): void {
      this.NoSqlDatabase.closeConnection()
    }
  
    query(sqlQuery: string): Promise<any> {
      // Basic example: Convert SQL-like query string to NoSQL format
      const collectionName = this.extractCollectionName(sqlQuery);
      const queryObject = this.convertSqlToNoSqlQuery(sqlQuery);
  
      return this.NoSqlDatabase.find(collectionName, queryObject);
    }
  
    private extractCollectionName(sqlQuery: string): string {
  
      const match = sqlQuery.match(/FROM\s+(\w+)/i);
      return match ? match[1] : "defaultCollection";
    }
  
    private convertSqlToNoSqlQuery(sqlQuery: string): object {
      // Convert SQL query to NoSQL query object
      return {};
    }
  
    connect(connectionString: string): void {
      this.NoSqlDatabase.connectToDatabase(connectionString)
    }
  }
  
  
  const noSqlDatabase = new NoSQLDatabase()
  
  const databaseAdapter = new DatabaseAdapter(noSqlDatabase)
  
  databaseAdapter.connect("no sql connection string")