import java.sql.*;

public class MainExceptions {
    public static void main(String[] args) throws SQLException {
        String dbUrl = "jdbc:mysql://localhost:3306/sakila?serverTimezone=UTC&useSSL=false";

        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet rs = null;

        try {
            connection = DriverManager.getConnection(dbUrl, "root", "root");
            statement = connection.prepareStatement("SELECT * FROM country");
            rs = statement.executeQuery();

            // process the result set
            while(rs.next()) {
                System.out.println(rs.getString("country"));
            }
        } catch(SQLException e) {
            e.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (statement != null) {
                try {
                    statement.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

        }

    }
}
