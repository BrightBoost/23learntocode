package codealongbankingapp.data;

import codealongbankingapp.models.Account;
import codealongbankingapp.models.CheckingAccount;
import codealongbankingapp.models.SavingsAccount;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FileManager {
    private static List<Account> accounts;
    private static String filepath = "accounts.txt";

    public static void saveAllAccounts(List<Account> accountList, String filepath) {
        try {
            FileWriter fw = new FileWriter(filepath);
            for (Account account : accountList) {
                fw.write(String.format("%d | %s | %.2f | %s \n", account.getAccountNumber(), account.getAccountHolder(), account.getBalance(), account.getAccountType()));
            }
            fw.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static void grabAllAccounts() {
        try {
            BufferedReader bw = new BufferedReader(new FileReader(filepath));
            String input;
            while ((input = bw.readLine()) != null) {
                String[] params = input.split(Pattern.quote("|"));
                List<String> paramsList = Stream.of(params).map(param -> param.trim()).collect(Collectors.toList());
                if (params[3].equalsIgnoreCase("savings")) {
                    SavingsAccount savingsAccount = new SavingsAccount(Long.parseLong(paramsList.get(0)), paramsList.get(1), Double.parseDouble(paramsList.get(2)), paramsList.get(3), Double.parseDouble(paramsList.get(4)), Double.parseDouble(paramsList.get(5)), Double.parseDouble(paramsList.get(6)));
                    accounts.add(savingsAccount);
                } else {
                    CheckingAccount checkingAccount = new CheckingAccount(Long.parseLong(paramsList.get(0)), paramsList.get(1), Double.parseDouble(paramsList.get(2)), paramsList.get(3));
                    accounts.add(checkingAccount);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
