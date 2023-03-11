package com.example.memories.controller;
import com.example.memories.exeption.PhotoNotFoundException;
import com.example.memories.model.PhotoInPosts;
import com.example.memories.service.interfaces.PhotoInPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.apache.commons.io.IOUtils;
import java.io.IOException;
import java.io.InputStream;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class PhotoInPostController {
    @Autowired
    PhotoInPostService photoInPostService;
    @GetMapping("/user/{userId}photoinposts")
    public ResponseEntity getAllPhotoByUserId(Long userId) throws PhotoNotFoundException{
        return ResponseEntity.ok().body(photoInPostService.getAllPhotoByUserId(userId));
    }
    @GetMapping("/photoinposts/{id}")
    public ResponseEntity getPhotoById(@PathVariable Long id) throws PhotoNotFoundException{
        return ResponseEntity.ok().body(photoInPostService.getPhotoById(id));
    }
    @PutMapping("/photoinposts/{id}")
    public ResponseEntity updatePhoto(@PathVariable Long id, @RequestBody PhotoInPosts photoInPosts) throws PhotoNotFoundException {
        return ResponseEntity.ok().body(photoInPostService.updatePhoto(id, photoInPosts));
    }
    @PostMapping(value = "/{postId}/photoinposts", consumes={ MediaType.MULTIPART_FORM_DATA_VALUE }, produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity createPhotoinposts(@PathVariable Long postId, @ModelAttribute(name = "photoinposts") PhotoInPosts photoInPosts, @RequestParam(value = "image") MultipartFile multipartFile)throws IOException {
        return ResponseEntity.ok().body(photoInPostService.createPhotoInPost(postId, photoInPosts, multipartFile));
    }
    @DeleteMapping("/photoinposts/{id}")
    public ResponseEntity deletePhoto(@PathVariable Long id) throws PhotoNotFoundException {
        return ResponseEntity.ok().body(photoInPostService.deletePhotoInPost(id));
    }

    @GetMapping(value = "/get-image-with-media-type",produces = MediaType.IMAGE_JPEG_VALUE
    )
    public @ResponseBody byte[] getImageWithMediaType() throws IOException {
        InputStream in = getClass().getResourceAsStream("/static/Post-img/1000/flower2.png");
        assert in != null;
        return IOUtils.toByteArray(in);
    }

}
