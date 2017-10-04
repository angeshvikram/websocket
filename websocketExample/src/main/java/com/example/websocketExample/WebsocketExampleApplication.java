package com.example.websocketExample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages= {"com.example.controller","com.example.wsBLI","com.example.Config"})
public class WebsocketExampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebsocketExampleApplication.class, args);
	}
}
