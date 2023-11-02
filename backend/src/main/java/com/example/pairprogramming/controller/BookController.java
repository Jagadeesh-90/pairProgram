package com.example.pairprogramming.controller;

import com.example.pairprogramming.dto.BookDto;
import com.example.pairprogramming.entity.Book;
import com.example.pairprogramming.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
@CrossOrigin("*")
public class BookController {
    @Autowired
    private BookService bookService;
    @GetMapping("")
    public List<Book> getAllBooks(){
        List<Book> books=bookService.getAllBooks();
        return books;
    }

    @PostMapping("")
    public BookDto saveBook(@RequestBody BookDto book){
        return bookService.saveBook(book);
    }
}
