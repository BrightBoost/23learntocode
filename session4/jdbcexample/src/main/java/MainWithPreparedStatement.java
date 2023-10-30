import java.sql.*;

public class MainWithPreparedStatement {
    public static void main(String[] args) {
        // this is with try with resources, resources opened after try in the () are closed automatically at the end of the try block

        // connection url
        String dbUrl = "jdbc:mysql://localhost:3306/sakila?serverTimezone=UTC&useSSL=false";

        try(Connection connection = DriverManager.getConnection(dbUrl, "root", "root");
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM sakila.actor \n" +
                    "WHERE first_name = ? AND actor_id = ?");

        ) {
            // create statement


            statement.setString(1, "Nick");
            statement.setInt(2, 2);
            // execute query
            ResultSet rs = statement.executeQuery();

            // process the result set
            while(rs.next()) {
                System.out.println(rs.getInt(1));
                System.out.println(rs.getString(2));
                System.out.println(rs.getString(3));
                System.out.println(rs.getDate(4));
            }

            rs.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }





    }
}
