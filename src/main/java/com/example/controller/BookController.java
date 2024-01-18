package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.Book;
import com.example.userservice.UserBookServiceImpl;

@RestController
@RequestMapping("book")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class BookController {

    @Autowired
    private UserBookServiceImpl bookService;

    // *** SELECT ***********************************************************
    // 특정 도서 정보 출력
	@GetMapping("/selectByNum")
	public Book selectByNum(@RequestParam(name = "bookIsbn13") String bookIsbn13) {
		try {
			System.out.println("[BookController/selectByNum] 요청");
			Book result = bookService.selectByNum(bookIsbn13);
			System.out.println("[BookController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
