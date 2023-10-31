package datamanagerexample;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class NorthwindDataManager {

    private DataSource dataSource;

    public NorthwindDataManager(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public List<Product> getAllProducts() {
        // create list of products
        List<Product> products = new ArrayList<>();

        // get connection, statement, results
        try(Connection connection = dataSource.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM products");
            ResultSet rs = preparedStatement.executeQuery();
            ) {
            // turn the results into products
            while(rs.next()) {
                Product product = new Product(rs.getInt("productId"), rs.getString("productName"), rs.getDouble("unitPrice"));
                // add product to the list
                products.add(product);
            }

        } catch(SQLException e) {
            e.printStackTrace();
        }

        // return the list
        return products;
    }
}
