import java.sql.*;

public class CustomerTableExercise {
    public static void main(String[] args) {
        String contactName = "Maria";
        String dbUrl = "jdbc:mysql://localhost:3306/Northwind?serverTimezone=UTC&useSSL=false";

        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet rs = null;

        try {
            connection = DriverManager.getConnection(dbUrl, "root", "root");
            statement = connection.prepareStatement("SELECT * FROM customers WHERE ContactName LIKE ?");
            statement.setString(1, "%" + contactName + "%");
            rs = statement.executeQuery();

            // process the result set
            while(rs.next()) {
                System.out.println(rs.getString("ContactName"));
                System.out.println(rs.getString("CompanyName"));
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
