package com.hca.insurancecompany.dao;

import com.hca.insurancecompany.model.InsurancePolicy;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class SimpleInsurancePolicyDao implements InsurancePolicyDao {

    private BasicDataSource basicDataSource;

    @Autowired
    public SimpleInsurancePolicyDao(BasicDataSource basicDataSource) {
        this.basicDataSource = basicDataSource;
    }

    @Override
    public void addInsurancePolicy(InsurancePolicy insurancePolicy) {
    }

    @Override
    public List<InsurancePolicy> getInsurancePolicies() {
        return null;
    }

    @Override
    public InsurancePolicy getInsurancePolicyById(long id) {
        return null;
    }

    @Override
    public void updateInsurancePolicy(InsurancePolicy insurancePolicy) {

    }

    @Override
    public void deleteInsurancePolicy(long id) {

    }
}
