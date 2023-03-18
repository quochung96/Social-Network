package com.example.memories.controller;

import com.example.memories.model.Message;
import com.example.memories.service.interfaces.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class MessageController {
    @Autowired
    public MessageService messageService;
    @GetMapping("/messages")
    public ResponseEntity<List<Message>> getAllMessage(){
        return ResponseEntity.ok().body(messageService.getAllMessage());
    }
    @GetMapping("/messages/{id}")
    public ResponseEntity<Message> createMessage(@PathVariable long id,@RequestBody Message message) throws Exception{
        return ResponseEntity.ok().body(messageService.createMessage(id,message));
    }
    @PutMapping("/messages/{id}")
    public ResponseEntity<Message> updateMessage(@PathVariable long id,@RequestBody Message message)throws Exception{
        return ResponseEntity.ok().body(messageService.updateMessage(id,message));
    }
    @DeleteMapping("/messages/{id}")
    public ResponseEntity<Boolean> deleteMessage(@PathVariable long id) throws Exception{
        return ResponseEntity.ok().body(messageService.deleteMessage(id));
    }
}
