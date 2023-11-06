package com.hca.insurancecompany.model;

import java.util.List;

public class Account {
    private long id;
    private String businessName;
    private String address;
    private String mainContactPerson;
    private String phone;
    private String email;
    private List<InsurancePolicy> insurancePolicies;

    private Account() {

    }
    public Account(long id, String businessName, String address, String mainContactPerson, String phone, String email, List<InsurancePolicy> insurancePolicies) {
        this.id = id;
        this.businessName = businessName;
        this.address = address;
        this.mainContactPerson = mainContactPerson;
        this.phone = phone;
        this.email = email;
        this.insurancePolicies = insurancePolicies;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMainContactPerson() {
        return mainContactPerson;
    }

    public void setMainContactPerson(String mainContactPerson) {
        this.mainContactPerson = mainContactPerson;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<InsurancePolicy> getInsurancePolicies() {
        return insurancePolicies;
    }

    public void setInsurancePolicies(List<InsurancePolicy> insurancePolicies) {
        this.insurancePolicies = insurancePolicies;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", businessName='" + businessName + '\'' +
                ", address='" + address + '\'' +
                ", mainContactPerson='" + mainContactPerson + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", insurancePolicies=" + insurancePolicies +
                '}';
    }
}
