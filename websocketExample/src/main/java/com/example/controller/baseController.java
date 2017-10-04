 package com.example.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class baseController {

	@RequestMapping(value="/welcome",method=RequestMethod.GET)
	public String hello() {
		return "HELLO WORLD";
	}
}
