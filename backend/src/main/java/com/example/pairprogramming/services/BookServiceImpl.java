package com.example.pairprogramming.services;

import com.example.pairprogramming.config.Model;
import com.example.pairprogramming.dto.BookDto;
import com.example.pairprogramming.entity.Book;
import com.example.pairprogramming.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    private BookRepository bookRepository;
    @Override
    public List<Book> getAllBooks() {
        List<Book> books=bookRepository.findAll();
        return books;
    }

    @Override
    public BookDto saveBook(BookDto book) {
        return Model.convertBookEntityToDto(bookRepository.save(Model.convertBookDtoToEntity(book)));
    }
}
