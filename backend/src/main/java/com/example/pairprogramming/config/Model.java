package com.example.pairprogramming.config;

import com.example.pairprogramming.dto.BookDto;
import com.example.pairprogramming.entity.Book;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;

public class Model {
    @Autowired
    private static ModelMapper modelMapper;
    static {
        modelMapper=new ModelMapper();
    }

    public static BookDto convertBookEntityToDto(Book book){
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(book, BookDto.class);
    }
    public static Book convertBookDtoToEntity(BookDto bookDto){
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(bookDto, Book.class);
    }
}
