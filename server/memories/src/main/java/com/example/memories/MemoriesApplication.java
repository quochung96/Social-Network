package com.example.memories;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
		(exclude = {SecurityAutoConfiguration.class})
public class MemoriesApplication {
	public static void main(String[] args) {
		SpringApplication.run(MemoriesApplication.class, args);
	}
}
