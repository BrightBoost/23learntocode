package oop.comparingstuff;

import java.time.LocalDate;

public class Document implements Comparable<Document>{
    private LocalDate created;
    private String name;

    public Document(LocalDate created, String name) {
        this.created = created;
        this.name = name;
    }

    public LocalDate getCreated() {
        return created;
    }

    public void setCreated(LocalDate created) {
        this.created = created;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public int compareTo(Document o) {
        return created.compareTo(o.created);
    }

    @Override
    public String toString() {
        return "Document{" +
                "created=" + created +
                ", name='" + name + '\'' +
                '}';
    }
}
