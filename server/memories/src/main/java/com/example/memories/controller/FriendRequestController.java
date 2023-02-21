package com.example.memories.controller;
import com.example.memories.model.FriendRequests;
import com.example.memories.service.interfaces.FriendRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class FriendRequestController {
    @Autowired
    FriendRequestService friendRequestService;
    @GetMapping("/friendrequests")
    public ResponseEntity getAllFriendRequest(){
        return ResponseEntity.ok().body(friendRequestService.getAllFriendRequests());
    }

    @GetMapping("/friendrequests/{id}")
    public ResponseEntity getFriendRequestById(@PathVariable long id){
        return ResponseEntity.ok().body(friendRequestService.getFriendRequestById(id));
    }

    @GetMapping("/user/{userid}/friendrequests")
    public ResponseEntity getUserFriendRequest(@PathVariable long userid){
        return ResponseEntity.ok().body(friendRequestService.getFriendRequestsByUserId(userid));
    }
    @PostMapping("user/{userId}/friendrequests")
    public ResponseEntity createFriendRequest(@PathVariable long userId,@RequestBody FriendRequests friendRequests){
        return ResponseEntity.ok().body(friendRequestService.createFriendRequest(userId, friendRequests));
    }

    @PutMapping("/friendrequest/{id}")
    public ResponseEntity updateFriendRequest(@PathVariable long id,@RequestBody FriendRequests friendRequest){
        return ResponseEntity.ok().body(friendRequestService.updateFriendRequest(id, friendRequest));
    }

    @DeleteMapping("/friendrequest/{id}")
    public ResponseEntity updateFriendRequest(@PathVariable long id){
        return ResponseEntity.ok().body(friendRequestService.deleteFriendRequest(id));
    }

    @PutMapping("/friendrequest/{id}/accept")
    public ResponseEntity setAccept(@PathVariable long id){
        return ResponseEntity.ok().body(friendRequestService.acceptFriendRequest(id));
    }

    @PutMapping("/friendrequest/{id}/cancel")
    public ResponseEntity cancelFriendRequest(@PathVariable long id){
        return ResponseEntity.ok().body(friendRequestService.cancelFriendRequest(id));
    }

}
