package com.example.memories.service.implement;

import com.example.memories.entity.FriendRequestEntity;
import com.example.memories.entity.UsersEntity;
import com.example.memories.model.FriendRequests;
import com.example.memories.repository.repositoryJPA.FriendRequestRepository;
import com.example.memories.repository.repositoryJPA.UsersRepository;
import com.example.memories.service.interfaces.FriendRequestService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
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
    public List<FriendRequests> getFriendRequestsBySendUserId(long userId) {
        UsersEntity user = usersRepository.findById(userId).get();
        List<FriendRequestEntity> friendRequestEntities = friendRequestRepository.findAllBySendUser(user).get();

        List<FriendRequests> friendRequests = friendRequestEntities.stream().map(
                data -> new FriendRequests(
                        data.getReqId(),
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
    public List<FriendRequests> getFriendRequestsByReceiveUserId(long userId) {
        UsersEntity user = usersRepository.findById(userId).get();
        List<FriendRequestEntity> friendRequestEntities = friendRequestRepository.findAllByReceiveUser(user).get();

        List<FriendRequests> friendRequests = friendRequestEntities.stream().map(
                data -> new FriendRequests(
                        data.getReqId(),
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
        request.setReceiveUser(usersRepository.findById(userId).get());
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
        friendRequestEntity.setIsAccepted(0);
        friendRequestRepository.save(friendRequestEntity);
        return true;
    }
}
