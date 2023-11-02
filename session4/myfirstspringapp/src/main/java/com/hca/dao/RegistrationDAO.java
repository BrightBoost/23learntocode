package com.hca.dao;

import com.hca.model.Student;

public interface RegistrationDAO {
    public Long persistStudent(Student student);
    public Student findById(Long id);
}
