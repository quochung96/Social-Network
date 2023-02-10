package com.example.memories.service.interfaces;

import com.example.memories.model.PhotoInPosts;

import java.util.List;

public interface PhotoInPostService {
    public List<PhotoInPosts> getAllPhoto();
    PhotoInPosts createPhotoInPost(PhotoInPosts photoInPosts);
    PhotoInPosts updatePhoto(Long id, PhotoInPosts photoInPosts);
    PhotoInPosts getPhotoById(Long id);
    Boolean deletePhotoInPost(Long id);
}
