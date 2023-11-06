package com.hca.insurancecompany.model;

public class InsurancePolicy {

    private long id;
    private String policyNumber;
    private double insuredAmount;
    private double deductibleAmount;

    public InsurancePolicy() {

    }

    public InsurancePolicy(long id, String policyNumber, double insuredAmount, double deductibleAmount) {
        this.id = id;
        this.policyNumber = policyNumber;
        this.insuredAmount = insuredAmount;
        this.deductibleAmount = deductibleAmount;
    }

    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }

    public double getInsuredAmount() {
        return insuredAmount;
    }

    public void setInsuredAmount(double insuredAmount) {
        this.insuredAmount = insuredAmount;
    }

    public double getDeductibleAmount() {
        return deductibleAmount;
    }

    public void setDeductibleAmount(double deductibleAmount) {
        this.deductibleAmount = deductibleAmount;
    }

    @Override
    public String toString() {
        return "InsurancePolicy{" +
                "policyNumber='" + policyNumber + '\'' +
                ", insuredAmount='" + insuredAmount + '\'' +
                ", deductible=" + deductibleAmount +
                '}';
    }
}
