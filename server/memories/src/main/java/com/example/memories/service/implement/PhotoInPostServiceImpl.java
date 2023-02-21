package com.example.memories.service.implement;

import com.example.memories.entity.PhotoInPostEntity;
import com.example.memories.model.PhotoInPosts;
import com.example.memories.repository.repositoryJPA.PhotoInPostRepository;
import com.example.memories.repository.repositoryJPA.PostsRepository;
import com.example.memories.repository.repositoryJPA.UsersRepository;
import com.example.memories.service.interfaces.PhotoInPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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

    private static final Path CURRENT_FOLDER = Paths.get(System.getProperty("user.dir"));


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
    public PhotoInPosts createPhotoInPost(Long postId, PhotoInPosts photoInPosts, MultipartFile multipartFile) throws IOException{
        PhotoInPostEntity newPhotoInPost = new PhotoInPostEntity();
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        photoInPosts.setPhotoUrl(fileName);
        photoInPosts.setCreateAt(new Date());
        photoInPosts.setUpdateAt(new Date());;
        BeanUtils.copyProperties(photoInPosts, newPhotoInPost);

        //photoInPostRepository.save(newPhotoInPost);

        String uploadDir = "post-photos/" + photoInPosts.getPhotoId();
        System.out.println(Files.exists(CURRENT_FOLDER.resolve(Paths.get("static")).resolve(Paths.get("images"))));
        //FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);

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
