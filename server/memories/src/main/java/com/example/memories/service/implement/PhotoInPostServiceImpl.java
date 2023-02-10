package com.example.memories.service.implement;

import com.example.memories.entity.PhotoInPostEntity;
import com.example.memories.model.PhotoInPosts;
import com.example.memories.repository.PhotoInPostRepository;
import com.example.memories.repository.PostsRepository;
import com.example.memories.repository.UsersRepository;
import com.example.memories.service.interfaces.PhotoInPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PhotoInPostServiceImpl implements PhotoInPostService {
    @Autowired
    private final UsersRepository usersRepository;
    @Autowired
    private final PhotoInPostRepository photoInPostRepository;
    @Autowired
    private final PostsRepository postsRepository;
    @Override
    public List<PhotoInPosts> getAllPhoto() {
        List<PhotoInPostEntity> photoInPostEntities = photoInPostRepository.findAll();
        List<PhotoInPosts> photoinposts = photoInPostEntities.stream().map(
                photoinpost -> new PhotoInPosts(
                        photoinpost.getPhotoId(),
                        photoinpost.getIsHighlight(),
                        photoinpost.getPhotoUrl(),
                        photoinpost.getCreateAt(),
                        photoinpost.getUpdateAt()
                )
        ).collect(Collectors.toList());
        return photoinposts;
    }

    @Override
    public PhotoInPosts createPhotoInPost(PhotoInPosts photoInPosts) {
        PhotoInPostEntity newPhotoInPost = new PhotoInPostEntity();
        photoInPosts.setIsHighLight(0);
        photoInPosts.setCreateAt(new Date());
        photoInPosts.setUpdateAt(new Date());
        BeanUtils.copyProperties(photoInPosts, newPhotoInPost);
        photoInPostRepository.save(newPhotoInPost);
        return photoInPosts;
    }

    @Override
    public PhotoInPosts updatePhoto(Long id, PhotoInPosts photoInPosts) {
        PhotoInPostEntity newPhotoInPost = photoInPostRepository.findById(id).get();
        newPhotoInPost.setUpdateAt(new Date());
        newPhotoInPost.setPhotoUrl(photoInPosts.getPhotoUrl());
        photoInPostRepository.save(newPhotoInPost);

        PhotoInPosts updatePhoto = new PhotoInPosts();
        BeanUtils.copyProperties(newPhotoInPost, updatePhoto);
        return updatePhoto;
    }

    @Override
    public PhotoInPosts getPhotoById(Long id) {
        PhotoInPostEntity photoInPostEntity = photoInPostRepository.findById(id).get();
        PhotoInPosts photoInPosts = new PhotoInPosts();
        BeanUtils.copyProperties(photoInPostEntity, photoInPosts);
        return photoInPosts;
    }

    @Override
    public Boolean deletePhotoInPost(Long id) {
        photoInPostRepository.deleteById(id);
        return true;
    }
}
