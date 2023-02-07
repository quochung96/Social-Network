package com.example.memories.controller;
import com.example.memories.model.Notifications;
import com.example.memories.service.interfaces.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class NotificationsController {
    @Autowired
    NotificationService notificationService;
    @GetMapping("/notifications")
    public ResponseEntity getAllNotification() {return ResponseEntity.ok().body(notificationService.getAllNotification());}
    @GetMapping("/notifications/{id}")
    public ResponseEntity getNotifcationbyId(@PathVariable Long id){
        return ResponseEntity.ok().body(notificationService.getNotiById(id));
    }
    @PutMapping("/notifications/{id}")
    public ResponseEntity updateNotification(@PathVariable Long id, @RequestBody Notifications notification){
        return ResponseEntity.ok().body(notificationService.updateNotification(id, notification));
    }
    @PostMapping("/{userId}/{postId}/notifications")
    public ResponseEntity createNotification(@PathVariable Long userId, Long postId, @RequestBody Notifications notification)
    {
        return ResponseEntity.ok().body(notificationService.createNotification(userId, postId, notification));
    }
    @DeleteMapping("/notifications/{id}")
    public ResponseEntity deleteNotification(@PathVariable Long id){
        return ResponseEntity.ok().body(notificationService.deleteNotiById(id));
    }
}
