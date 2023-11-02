package com.hca.service;

import com.hca.dao.RegistrationDAO;
import com.hca.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RegistrationService {
    private RegistrationDAO registrationDAO;

    @Autowired
    public RegistrationService(RegistrationDAO registrationDAO) {
        this.registrationDAO = registrationDAO;
    }
    public Long registerStudent(Student student) throws
            Exception {
        if (this.registrationDAO.findById(student.getId())
                != null) {
            throw new Exception("The student already exists.");
        }
        return registrationDAO.persistStudent(student);
    }

    public Student getStudent(Long id) {
        return this.registrationDAO.findById(id);
    }

}
