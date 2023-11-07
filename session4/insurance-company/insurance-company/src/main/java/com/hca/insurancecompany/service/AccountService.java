package com.hca.insurancecompany.service;

import com.hca.insurancecompany.dao.AccountDao;
import com.hca.insurancecompany.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class AccountService {
    private AccountDao accountDao;

    @Autowired
    public AccountService(AccountDao accountDao) {
        this.accountDao = accountDao;
    }

    public List<Account> getAllAccounts() {
        return accountDao.getAccounts();
    }

    public Account getAccountById(long id) {
        Account account = this.accountDao.getAccountById(id);
        if(account == null) {
            throw new NoSuchElementException("No account was found");
        } else {
            return account;
        }
    }

    public void addAccount(Account account) {
        accountDao.addAccount(account);
    }
}
