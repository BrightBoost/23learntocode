package com.hca.insurancecompany;

import com.hca.insurancecompany.model.Account;
import com.hca.insurancecompany.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Scanner;

@SpringBootApplication
public class InsuranceCompanyApplication implements CommandLineRunner {

	private AccountService accountService;

	@Autowired
	public InsuranceCompanyApplication(AccountService accountService) {
		this.accountService = accountService;
	}

	public static void main(String[] args) {
		SpringApplication.run(InsuranceCompanyApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		boolean done = false;
		Scanner scanner = new Scanner(System.in);
		while(!done) {
			System.out.println("Add(1) or show all(2)");
			int choice = scanner.nextInt();
			scanner.nextLine();

			switch(choice) {
				case 1:
					System.out.println("Business Name:");
					String businessName = scanner.nextLine();
					System.out.println("Address:");
					String address = scanner.nextLine();
					System.out.println("Contact:");
					String contact = scanner.nextLine();
					System.out.println("Phone:");
					String phone = scanner.nextLine();
					System.out.println("Email:");
					String email = scanner.nextLine();
					accountService.addAccount(new Account(0, businessName, address, contact, phone, email, null));
					break;
				case 2:
					accountService.getAllAccounts().forEach(System.out::println);
					break;
				default:
					done = true;
			}
		}

	}
}
