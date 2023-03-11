package com.example.memories.controller;
import com.example.memories.exeption.InvalidRequestException;
import com.example.memories.exeption.NotificationNotFoundException;
import com.example.memories.model.Notifications;
import com.example.memories.service.interfaces.NotificationService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class NotificationsController {
    @Autowired
    NotificationService notificationService;
    @GetMapping("/notifications")
    public ResponseEntity<List<Notifications>>getAllNotification(BindingResult result){
        if (result.hasErrors()){
            throw new InvalidRequestException("Invalid Request Exception", result);
        }
        @Valid List<Notifications> notificationsList = notificationService.getAllNotification();
        return ResponseEntity.ok().body(notificationsList);
    }
    @GetMapping("/notifications/{id}")
    public ResponseEntity getNotificationById(@PathVariable @Min(value = 1, message = "Id must be greater than or equal to 1") Long id, BindingResult result) throws NotificationNotFoundException {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body("Validation error: " + result.getAllErrors());
        }
        Notifications notification = notificationService.getNotificationById(id);
        return ResponseEntity.ok().body(notification);
    }
    @GetMapping("{userId}/notifications")
    public ResponseEntity<List<Notifications>> getNotificationByUserId(@PathVariable Long userId, BindingResult result) throws NotificationNotFoundException
    {
        if (result.hasErrors()){
            throw new InvalidRequestException("Invalid Request Exception", result);
        }
        @Valid List<Notifications> notificationsList = notificationService.getAllNotiByUserId(userId);
        return ResponseEntity.ok().body(notificationsList);
    }
    @PutMapping("/notifications/{id}")
    public ResponseEntity updateNotification(@PathVariable Long id, @Valid @RequestBody Notifications notification, BindingResult result) throws NotificationNotFoundException{
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body("Validation error: " + result.getAllErrors());
        }
        Notifications updatedNotification = notificationService.updateNotification(id, notification);
        return ResponseEntity.ok(updatedNotification);
    }
    @PostMapping("/{userId}/{postId}/notifications")
    public ResponseEntity createNotification(@PathVariable Long userId, Long postId, @Valid @RequestBody Notifications notification, BindingResult result) throws Exception
    {
        if (result.hasErrors()){
            return ResponseEntity.badRequest().body("Validaion error: " + result.getAllErrors());
        }
        return ResponseEntity.ok().body(notificationService.createNotification(userId, postId, notification));
    }
    @DeleteMapping("/notifications/{id}")
    public ResponseEntity deleteNotification(@PathVariable @Min(value = 1, message = "Id must be greater than or equal to 1") Long id, BindingResult result) throws NotificationNotFoundException{
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body("Validaion error: " + result.getAllErrors());
        }
        return ResponseEntity.ok().body(notificationService.deleteNotificationById(id));
    }
}
