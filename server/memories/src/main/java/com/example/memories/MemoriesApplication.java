package com.example.memories;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.socket.config.annotation.EnableWebSocket;

@SpringBootApplication
@EnableWebSocket
public class MemoriesApplication {
	public static void main(String[] args) {
		SpringApplication.run(MemoriesApplication.class, args);
	}
}
