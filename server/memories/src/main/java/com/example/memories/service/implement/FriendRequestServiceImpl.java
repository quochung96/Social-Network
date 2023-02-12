package com.example.memories.service.implement;

import ch.qos.logback.core.joran.util.beans.BeanUtil;
import com.example.memories.entity.FriendRequestEntity;
import com.example.memories.entity.UsersEntity;
import com.example.memories.model.FriendRequests;
import com.example.memories.repository.FriendRequestRepository;
import com.example.memories.repository.UsersRepository;
import com.example.memories.service.interfaces.FriendRequestService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FriendRequestServiceImpl implements FriendRequestService {
    @Autowired
    FriendRequestRepository friendRequestRepository;
    @Autowired
    UsersRepository usersRepository;
    @Override
    public List<FriendRequests> getAllFriendRequests() {
        List<FriendRequestEntity> friendRequestEntities = friendRequestRepository.findAll();

        List<FriendRequests> friendRequests = friendRequestEntities.stream().map(
                data -> new FriendRequests(
                        data.getReqId(),
                        data.getMutalCount(),
                        data.getSendUser(),
                        data.getReceiveUser(),
                        data.getIsAccepted(),
                        data.getIsArchived(),
                        data.getCreateAt(),
                        data.getUpdateAt()
                        )
        ).collect(Collectors.toList());
        return friendRequests;
    }

    @Override
    public FriendRequests getFriendRequestById(long id) {
        Optional<FriendRequestEntity> friendRequestEntity = friendRequestRepository.findById(id);
        if(friendRequestEntity.isPresent()) {
            FriendRequests friendRequests = new FriendRequests();
            BeanUtils.copyProperties(friendRequestEntity.get(), friendRequests);
            return friendRequests;
        }
        return null;
    }

    @Override
    public List<FriendRequests> getFriendRequestsByUserId(long userId) {
        UsersEntity user = usersRepository.findById(userId).get();
        List<FriendRequestEntity> friendRequestEntities = friendRequestRepository.findAllBySendUser(user).get();

        List<FriendRequests> friendRequests = friendRequestEntities.stream().map(
                data -> new FriendRequests(
                        data.getReqId(),
                        data.getMutalCount(),
                        data.getSendUser(),
                        data.getReceiveUser(),
                        data.getIsAccepted(),
                        data.getIsArchived(),
                        data.getCreateAt(),
                        data.getUpdateAt()
                )
        ).collect(Collectors.toList());
        return friendRequests;
    }

    @Override
    public FriendRequests createFriendRequest(long userId, FriendRequests request) {
        FriendRequestEntity friendRequestEntity= new FriendRequestEntity();
        request.setCreateAt(new Date());
        request.setUpdateAt(new Date());
        request.setSendUser(usersRepository.findById(userId).get());
        BeanUtils.copyProperties(request, friendRequestEntity);
        friendRequestRepository.save(friendRequestEntity);
        return request;
    }

    @Override
    public FriendRequests updateFriendRequest(long id, FriendRequests request) {
        FriendRequestEntity friendRequestEntity= friendRequestRepository.findById(id).get();
        friendRequestEntity.setUpdateAt(new Date());
        friendRequestEntity.setIsAccepted(request.getIsAccepted());
        friendRequestRepository.save(friendRequestEntity);

        FriendRequests updateFriendRequestsResponse = new FriendRequests();
        BeanUtils.copyProperties(friendRequestEntity, updateFriendRequestsResponse);
        return updateFriendRequestsResponse;
    }

    @Override
    public FriendRequests deleteFriendRequest(long id) {
        FriendRequestEntity friendRequestEntity = friendRequestRepository.findById(id).get();
        FriendRequests friendRequests = new FriendRequests();
        BeanUtils.copyProperties(friendRequestEntity, friendRequests);
        friendRequestRepository.deleteById(id);
        return friendRequests;
    }

    @Override
    public boolean acceptFriendRequest(long id) {
        FriendRequestEntity friendRequestEntity= friendRequestRepository.findById(id).get();
        friendRequestEntity.setIsAccepted(1);
        friendRequestEntity.setIsArchived(1);
        friendRequestRepository.save(friendRequestEntity);
        return true;
    }

    @Override
    public boolean cancelFriendRequest(long id) {
        FriendRequestEntity friendRequestEntity= friendRequestRepository.findById(id).get();
        friendRequestEntity.setIsAccepted(1);
        friendRequestEntity.setIsArchived(1);
        friendRequestRepository.save(friendRequestEntity);
        return true;
    }
}
