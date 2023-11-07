package com.hca.insurancecompany.dao;

import com.hca.insurancecompany.model.Account;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Component
public class SimpleAccountDao implements AccountDao {

    private BasicDataSource basicDataSource;

    @Autowired
    public SimpleAccountDao(BasicDataSource basicDataSource) {
        this.basicDataSource = basicDataSource;
    }
    @Override
    public void addAccount(Account account) {
        try(Connection connection = basicDataSource.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO accounts (businessName, address, mainContactPerson, phone, email) VALUES(?, ?, ?, ?, ?)");
        ) {
            preparedStatement.setString(1, account.getBusinessName());
            preparedStatement.setString(2, account.getAddress());
            preparedStatement.setString(3, account.getMainContactPerson());
            preparedStatement.setString(4, account.getPhone());
            preparedStatement.setString(5, account.getEmail());

            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Account> getAccounts() {
        List<Account> accounts = new ArrayList<>();
        try(Connection connection = basicDataSource.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM accounts");
            ResultSet rs = preparedStatement.executeQuery();
                ) {
            while(rs.next()) {
                accounts.add(new Account(rs.getInt("id"),
                        rs.getString("businessName"),
                        rs.getString("address"),
                        rs.getString("mainContactPerson"),
                        rs.getString("phone"),
                        rs.getString("email"),
                        new ArrayList<>()
                ));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        // return list
        return accounts;
    }

    @Override
    public Account getAccountById(long id) {
        try(Connection connection = basicDataSource.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM accounts");
            ResultSet rs = preparedStatement.executeQuery();
        ) {
            while(rs.next()) {
                if(rs.getInt("id") == id) {
                    return new Account(rs.getInt("id"),
                            rs.getString("businessName"),
                            rs.getString("address"),
                            rs.getString("mainContactPerson"),
                            rs.getString("phone"),
                            rs.getString("email"),
                            new ArrayList<>()
                    );
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        // return null when no account found
        return null;
    }

    @Override
    public void updateAccount(Account account) {
        // tbd
    }

    @Override
    public void deleteAccount(long id) {

    }
}
