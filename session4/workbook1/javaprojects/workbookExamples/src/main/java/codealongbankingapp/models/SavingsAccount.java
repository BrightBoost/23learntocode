package codealongbankingapp.models;

import java.util.ArrayList;

public class SavingsAccount extends Account {
    private double interestRate;
    private double minimumBalance;
    private double interestEarned;

    public SavingsAccount(long accountNumber, String accountHolder, double balance, String accountType, double interestRate, double minimumBalance, double interestEarned) {
        super(accountNumber, accountHolder, balance, accountType);
        this.interestRate = interestRate;
        this.minimumBalance = minimumBalance;
        this.interestEarned = interestEarned;
    }

    public double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(double interestRate) {
        this.interestRate = interestRate;
    }

    public double getMinimumBalance() {
        return minimumBalance;
    }

    public void setMinimumBalance(double minimumBalance) {
        this.minimumBalance = minimumBalance;
    }

    public double getInterestEarned() {
        return interestEarned;
    }

    public void setInterestEarned(double interestEarned) {
        this.interestEarned = interestEarned;
    }
}
