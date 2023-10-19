package oop.comparingstuff;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        Document d1 = new Document(LocalDate.now(), "Java.txt");
        Document d2 = new Document(LocalDate.of(2022, 6, 7), "C#.txt");
        Document d3 = new Document(LocalDate.of(2023, 4, 5), "SQL.txt");

        ArrayList<Document> documents = new ArrayList<>();
        documents.add(d1);
        documents.add(d2);
        documents.add(d3);

        Collections.sort(documents);
        System.out.println(documents);
        documents.sort((doc1, doc2) -> doc1.getName().compareTo(doc2.getName()));
        System.out.println(documents);
    }
}
