package oop;

public class Class {
    private String teacher;
    private String name;
    private String[] students;

    public Class(String teacher, String name, String[] students) {
        this.teacher = teacher;
        this.name = name;
        this.students = students;
    }

    public void teachClass(String topic) {
        System.out.println("Teaching topic: " + topic);
    }

    public void teachClass(String topic, int difficultyLevel) {
        System.out.println("Teaching topic: " + topic + " with difficulty " + difficultyLevel);
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String[] getStudents() {
        return students;
    }

    public void setStudents(String[] students) {
        this.students = students;
    }
}
