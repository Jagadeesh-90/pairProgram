package com.example.pairprogramming.services;

import com.example.pairprogramming.dto.BookDto;
import com.example.pairprogramming.entity.Book;

import java.util.List;

public interface BookService {
    List<Book> getAllBooks();

    BookDto saveBook(BookDto book);
}
