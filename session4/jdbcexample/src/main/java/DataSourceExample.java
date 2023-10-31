import org.apache.commons.dbcp2.BasicDataSource;

import java.sql.*;

public class DataSourceExample {
    public static void main(String[] args) {

        try (BasicDataSource basicDataSource = new BasicDataSource()) {

            basicDataSource.setUrl("jdbc:mysql://localhost:3306/sakila");
            basicDataSource.setUsername(args[0]);
            basicDataSource.setPassword(args[1]);

            try (Connection connection = basicDataSource.getConnection();
                 PreparedStatement statement = connection.prepareStatement("SELECT * FROM sakila.actor \n" +
                         "WHERE first_name = ? AND actor_id = ?");

            ) {
                // create statement
                statement.setString(1, "Nick");
                statement.setInt(2, 2);
                // execute query
                try (ResultSet rs = statement.executeQuery()) {

                    // process the result set
                    while (rs.next()) {
                        System.out.println(rs.getInt(1));
                        System.out.println(rs.getString(2));
                        System.out.println(rs.getString(3));
                        System.out.println(rs.getDate(4));
                    }
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
