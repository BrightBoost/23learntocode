package com.hca.insurancecompany.dao;

import com.hca.insurancecompany.model.Account;

import java.util.List;

public interface AccountDao {

    // create
    void addAccount(Account account);

    // read
    List<Account> getAccounts();
    Account getAccountById(long id);

    // update
    void updateAccount(Account account);

    // delete
    void deleteAccount(long id);

}
