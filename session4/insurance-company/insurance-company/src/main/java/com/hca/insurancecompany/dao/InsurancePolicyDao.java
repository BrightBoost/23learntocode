package com.hca.insurancecompany.dao;

import com.hca.insurancecompany.model.Account;
import com.hca.insurancecompany.model.InsurancePolicy;

import java.util.List;

public interface InsurancePolicyDao {
    void addInsurancePolicy(InsurancePolicy insurancePolicy);

    // read
    List<InsurancePolicy> getInsurancePolicies();
    InsurancePolicy getInsurancePolicyById(long id);

    // update
    void updateInsurancePolicy(InsurancePolicy insurancePolicy);

    // delete
    void deleteInsurancePolicy(long id);
}
