package com.example.memories.service.interfaces;

import com.example.memories.model.FriendRequests;

import java.util.List;

public interface FriendRequestService {
    List<FriendRequests> getAllFriendRequests();
    FriendRequests getFriendRequestById(long id);
    List<FriendRequests> getFriendRequestsBySendUserId(long userId);
    List<FriendRequests> getFriendRequestsByReceiveUserId(long userId);
    FriendRequests createFriendRequest(long userId, FriendRequests request);
    FriendRequests updateFriendRequest(long id, FriendRequests request);
    FriendRequests deleteFriendRequest(long id);
    boolean acceptFriendRequest(long id);
    boolean cancelFriendRequest(long id);
}
