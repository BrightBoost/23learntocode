import java.sql.*;

public class MainTryWithResources {
    public static void main(String[] args) {
        // this is with try with resources, resources opened after try in the () are closed automatically at the end of the try block

        // connection url
        String dbUrl = "jdbc:mysql://localhost:3306/sakila?serverTimezone=UTC&useSSL=false";

        try(Connection connection = DriverManager.getConnection(dbUrl, "root", "root")) {
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
        }





    }
}
