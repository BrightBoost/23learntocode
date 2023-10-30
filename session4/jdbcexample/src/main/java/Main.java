import javax.sql.DataSource;
import java.sql.*;

public class Main {
    public static void main(String[] args) {
        // this is with the original try catch statement, you need a try catch in the finally

        // connection url
        String dbUrl = "jdbc:mysql://localhost:3306/sakila?serverTimezone=UTC&useSSL=false";
        Connection connection = null;
        try {
            // open connection
            connection = DriverManager.getConnection(dbUrl, "root", "root");

            // create statement
            Statement statement = connection.createStatement();

            // execute query
            String query = "SELECT * FROM country";
            ResultSet rs = statement.executeQuery(query);

            // process the result set
            while(rs.next()) {
                System.out.println(rs.getString("country"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            if(connection != null) {
                // close the connection
                try {
                    connection.close();
                } catch (SQLException e) {
                    throw new RuntimeException(e);
                }
            }

        }
    }
}
