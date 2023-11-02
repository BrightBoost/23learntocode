package com.hca.model;

import java.util.Objects;

public class Student {
    private Long id;
    private String lastName;
    private String firstName;
    private String major;

    public Student(Long id, String lastName, String firstName, String major) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.major = major;
    }

    public Student(String lastName, String firstName, String major) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.major = major;
    }

    public Student() { }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", lastName='" + lastName + '\'' +
                ", firstName='" + firstName + '\'' +
                ", major='" + major + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return Objects.equals(id, student.id) && Objects.equals(lastName, student.lastName) && Objects.equals(firstName, student.firstName) && Objects.equals(major, student.major);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, lastName, firstName, major);
    }
}
