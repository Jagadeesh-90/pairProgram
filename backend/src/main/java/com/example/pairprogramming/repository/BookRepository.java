package com.example.pairprogramming.repository;

import com.example.pairprogramming.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Integer> {

}
