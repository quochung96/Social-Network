# Social-Network


# Overview

* Technical :
- Back-end
  + Spring boot
  + Spring security :
  + JWT : JWT 0.11.5
  + Socket IO
- Front-end:
  + React
  + Redux
  + Material-ui
  + React-router-dom
  + Google Oauth2
  
* Build : Maven Project 4.0.0

* Apache Tomcat 9.x  
* Relationship database management system : Oracle Database
* Hibernate core ORM : Hibernate 
* Integrated development environment (IDE) : IntelliJ IDEA Ultimate

# HOW TO RUN
1. Download and setup IntelliJ IDEA 
2. Download and setup Oracle 
3. Download Repository 
4. Open IntelliJ and wait for Maven download setup dependencies
5. Setup Apache Tomcat

Hit first sight, the homepage represents the functionalities of the memories website. We are on the trait to developing the website's full functionalities including sharing posts, updating the newest daily life, chatting and making small societies into a website. Inspired by Facebook, Linkedln, and many former do, we cover the best experience from those and make our own.

![1](https://user-images.githubusercontent.com/114813626/219269630-50007e23-9df4-4a46-9c8e-a35d273b5076.png)

The logging/ signup page consists of two types, one for the gmail, and account password validation withing request to backend and return back a token validation for sign in/sign up. During the token valid, the user can freely do anything until its expired

![2](https://user-images.githubusercontent.com/114813626/219269716-f3edc666-d560-408e-8411-3e7690c8401a.png)
![3](https://user-images.githubusercontent.com/114813626/219269742-3043f95b-2964-4d6c-b971-8767d883543a.png)

The post when logged in its sorted by time published, from the newest to lastest. Post are displayed whenever the user are following the user or the group interested in.

![4](https://user-images.githubusercontent.com/114813626/219269806-1c1e455b-7df9-4c81-ac38-62f9a9a9ffc7.png)

Create a new post

![5](https://user-images.githubusercontent.com/114813626/219269861-dc7d56ec-de0c-4a27-9da0-1c7753920a35.png)

Display own profile, to customize or post a new feed

![6](https://user-images.githubusercontent.com/114813626/219269922-3bce0014-6459-4a78-bd39-bb4c54e6f1aa.png)
![7](https://user-images.githubusercontent.com/114813626/219269987-c32a64f1-bcca-4707-99d9-09abfb177c55.png)

Send the request to different users, make a new follower or friend to update new feed from another. Sharing in the communities with own stories

![Friend](https://user-images.githubusercontent.com/114813626/219270098-c865298a-1038-4723-8cfe-715e20c3b3f4.png)

# PROJECT-STRUCTURE
``````bash
├───Social-Network/
├───.idea/
├───client/       (Client directory)			                                                      
│   ├───public/
│   ├───src/
│   │   ├───actions/
│   │   ├───api/
│   │   ├───assets/
│   │   ├───components/
│   │   │   ├───Auth/
│   │   │   ├───Friends/
│   │   │   ├───HomePage/
│   │   │   ├───Message/
│   │   │   ├───Navbar/
│   │   │   ├───Posts/
│   │   │   ├───Profile/
│   │   │   └───widgets/
│   │   ├───constants/
│   │   ├───reducers/
│   │   ├───App.js
│   │   ├───index.css
│   │   ├───index.js
│   │   └───theme.js
│   ├───.gitignore
│   ├───package-lock.json
│   ├───package.json
│   └───README.md
├───server/
│   ├───.idea/
│   │   ├───libraries/
│   └───memories/
│       ├───.mvn/
│       │   └───wrapper/
│       │       ├───maven-wrapper.jar
│       │       └───maven-wrapper.properties
│       ├───src/
│       │   ├───main/
│       │   │   ├───java/
│       │   │   │   └───com/
│       │   │   │       └───example/
│       │   │   │           └───memories/
│       │   │   │               ├───builder/				
│       │   │   │               │   ├───AccountBuilder.java
│       │   │   │               │   └───AuthenticationResponse.java
│       │   │   │               ├───config/       (Contains config files)
│       │   │   │               │   ├───ApplicationConfig.java
│       │   │   │               │   ├───JwtAuthenticationFilter.java
│       │   │   │               │   ├───JwtService.java
│       │   │   │               │   ├───MvcConfiguration.java
│       │   │   │               │   └───SecurityConfiguration.java
│       │   │   │               ├───controller/       (Folder for cotaining Controller)
│       │   │   │               │   ├───AccountsController.java
│       │   │   │               │   ├───CommentsController.java
│       │   │   │               │   ├───DashboardController.java
│       │   │   │               │   ├───FriendRecommendController.java
│       │   │   │               │   ├───FriendRequestController.java
│       │   │   │               │   ├───NotificationsController.java
│       │   │   │               │   ├───PhotoInPostController.java
│       │   │   │               │   ├───PostController.java
│       │   │   │               │   ├───ReactionsController.java
│       │   │   │               │   ├───ReactionTagController.java
│       │   │   │               │   ├───RelationshipsController.java
│       │   │   │               │   ├───RolesController.java
│       │   │   │               │   ├───SearchRecentsController.java
│       │   │   │               │   └───UsersController.java
│       │   │   │               ├───entity/       (Consists of Entity access classes)
│       │   │   │               │   ├───AccountsEntity.java
│       │   │   │               │   ├───CommentsEntity.java
│       │   │   │               │   ├───FriendRecommend.java
│       │   │   │               │   ├───FriendRequestEntity.java
│       │   │   │               │   ├───NotificationsEntity.java
│       │   │   │               │   ├───PhotoInPostEntity.java
│       │   │   │               │   ├───PostsEntity.java
│       │   │   │               │   ├───ReactionsEntity.java
│       │   │   │               │   ├───ReactionTagEntity.java
│       │   │   │               │   ├───RelationshipsEntity.java
│       │   │   │               │   ├───RolesEntity.java
│       │   │   │               │   ├───SearchRecentsEntity.java
│       │   │   │               │   └───UsersEntity.java
│       │   │   │               ├───model/        (Contain classes for connecting to database)
│       │   │   │               │   ├───Accounts.java
│       │   │   │               │   ├───Comments.java
│       │   │   │               │   ├───FriendRequests.java
│       │   │   │               │   ├───Notifications.java
│       │   │   │               │   ├───PhotoInPosts.java
│       │   │   │               │   ├───Posts.java
│       │   │   │               │   ├───Reactions.java
│       │   │   │               │   ├───ReactionTags.java
│       │   │   │               │   ├───Roles.java
│       │   │   │               │   ├───SearchRecents.java
│       │   │   │               │   └───Users.java
│       │   │   │               ├───repository/       (Contain repository files)	
│       │   │   │               │   ├───AccountBuilderRepository.java
│       │   │   │               │   ├───AccountsRepository.java
│       │   │   │               │   ├───CommentsRepository.java
│       │   │   │               │   ├───FriendRecommendRepository.java
│       │   │   │               │   ├───FriendRequestRepository.java
│       │   │   │               │   ├───NotificationsRepository.java
│       │   │   │               │   ├───PhotoInPostRepository.java
│       │   │   │               │   ├───PostsRepository.java
│       │   │   │               │   ├───ReactionRepository.java
│       │   │   │               │   ├───ReactionTagRepository.java
│       │   │   │               │   ├───RelationshipsRepository.java
│       │   │   │               │   ├───RolesRepository.java
│       │   │   │               │   ├───SearchRecentsRepository.java
│       │   │   │               │   └───UsersRepository.java
│       │   │   │               ├───service/        (Handle logic for controller)
│       │   │   │               │   ├───implement/
│       │   │   │               │   │   ├───AccountServiceImpl.java
│       │   │   │               │   │   ├───CommentServiceImpl.java
│       │   │   │               │   │   ├───FriendRecommendServiceImpl.java
│       │   │   │               │   │   ├───FriendRequestServiceImpl.java
│       │   │   │               │   │   ├───NotificationServiceImpl.java
│       │   │   │               │   │   ├───PhotoInPostServiceImpl.java
│       │   │   │               │   │   ├───PostServiceImpl.java
│       │   │   │               │   │   ├───ReactionServiceImpl.java
│       │   │   │               │   │   ├───ReactionTagServiceImpl.java
│       │   │   │               │   │   ├───RelationshipServiceImpl.java
│       │   │   │               │   │   ├───RoleServiceImpl.java
│       │   │   │               │   │   ├───SearchRecentServiceImpl.java
│       │   │   │               │   │   └───UserServiceImpl.java
│       │   │   │               │   └───interfaces/
│       │   │   │               │       ├───AccountService.java
│       │   │   │               │       ├───CommentService.java
│       │   │   │               │       ├───FriendRecommendService.java
│       │   │   │               │       ├───FriendRequestService.java
│       │   │   │               │       ├───NotificationService.java
│       │   │   │               │       ├───PhotoInPostService.java
│       │   │   │               │       ├───PostService.java
│       │   │   │               │       ├───ReactionService.java
│       │   │   │               │       ├───ReactionTagService.java
│       │   │   │               │       ├───RelationshipService.java
│       │   │   │               │       ├───RoleService.java
│       │   │   │               │       ├───SearchRecentService.java
│       │   │   │               │       └───UserService.java
│       │   │   │               ├───utils/
│       │   │   │               │   └───FileUploadUtil.java
│       │   │   │               └───MemoriesApplication.java
│       │   │   └───resources/        (Contain thymeleaf-webadmin)
│       │   │       ├───static/
│       │   │       │   ├───css/
│       │   │       │   ├───images/
│       │   │       ├───templates/
│       │   │       └───application.properties
│       │   └───test/									
│       │       └───java/
│       │           └───com/
│       │               └───example/
│       │                   └───memories/						
│       │                       └───MemoriesApplicationTests.java			
│       └───pom.xml       (Acronym for Project Object Model)
├───README.md
└───Script_Auth.sql       (Generate the logical backup of the Oracle database)

