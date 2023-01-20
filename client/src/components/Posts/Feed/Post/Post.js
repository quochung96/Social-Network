import React,{useState} from 'react';
import {Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import CommentIcon from '@mui/icons-material/Comment';
import {ButtonBase,TextField,Tooltip,Collapse,Box,Avatar,Card,CardActions,CardContent,CardHeader,CardMedia,Checkbox,IconButton,Typography} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import AuthorIcon from '../../../../assets/icons/author.png';
import AvatarIcon from '../../../../assets/icons/user.png';
import moment from 'moment';

// import {useDispatch} from 'react-redux';
// import {commentPost} from '../../../../actions/posts';

const intialComment = {comment: ''};
const Post = ({post,setCurrentId}) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  //Fetch all the comment in the specified post
  // const [comments,setComments] = useState(posts?.comments);
  //Set one comment in the post
  const [comment, setComment] = useState(intialComment);
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalComment = `${user.result.name}: ${comment}`;
    /*const newComments = await dispatch(commentPost(finalComment));
     setComments(newComments); */
    console.log(finalComment);
    // setComment('');
  }
  
  return (
    <Card sx={{ margin: 4, borderRadius: '30px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 15px' }} raised elevation = {6}>
      <CardHeader
        avatar={
          <IconButton onClick = {null}>
            <Avatar sx = {{width: '60px',height:'60px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 8px'}} alt = 'avatar-test' src = {'https://i.pinimg.com/564x/05/ed/aa/05edaa3a35fb01d6aef7b4af984784f3.jpg'}/>
          </IconButton>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={
            <Typography variant = 'h6' fontSize = '18px' fontWeight = '500'>Đam mê ngôn tình</Typography>
        }
        subheader={
            <Typography color = 'grey'>{moment(new Date()).format('LLLL')} .</Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            Bíu lên một chút thì có sao. Trông càng đáng iu hơn thôi
            <div>Tác giả: 西风八爪</div>
            <div>Dịch: -Cá-</div>
            <div>#cute #adorable</div>
        </Typography>
      </CardContent>
      <ButtonBase sx = {{display: 'flex',flexDirection: 'column'}}>
        <CardMedia
              sx = {{width: '100%', height: '100%', objectFit: 'fill'}}
              component="img"
              image="https://images.unsplash.com/photo-1575535468632-345892291673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="img-post"
          />
        <Box flexDirection='row' display = 'flex' gap = "5px" marginTop = '5px'>
          <CardMedia
              sx = {{width: '33%', height: '30%'}}
              component="img"
              image="https://images.unsplash.com/photo-1567225591450-06036b3392a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="img-post"
          />
          <CardMedia
              sx = {{width: '33%', height: '30%'}}
              component="img"
              image="https://images.unsplash.com/photo-1567225591450-06036b3392a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="img-post"
          />
          <CardMedia
              sx = {{width: '33%', height: '30%'}}
              component="img"
              image="https://images.unsplash.com/photo-1614369575919-8c030d97ceae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="img-post"
          />
        </Box>
      </ButtonBase>
      <CardActions sx = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton onClick = {handleExpandClick}>
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      <Collapse in = {expanded} timeout='auto' unmountOnExit sx = {{width: '100%', height: 'auto'}}>
        <Box marginLeft = '25px' justifyContent = 'start' display = 'flex' flexDirection = 'column'>
          <form onSubmit = {handleSubmit}>
          <Box display = 'flex' flexDirection = 'row'>
            <Tooltip title = {user?.result.name}>
                <IconButton onClick = {() => navigate('/profile')}>
                  <Avatar alt = {user?.result.name || "No Avatar"} src = {user?.result.picture || user?.result.users.avatar_url || <AvatarIcon />} />
                </IconButton>
            </Tooltip>
            <Box marginTop = '10px' width = '900px'>
              <TextField style ={{
                '& fieldset':{
                  borderRadius: '30px'
                }
              }}
                name = "comment"
                label = "Add a comment ..."
                size = 'small'
                variant = 'outlined'
                color = 'primary'
                fullWidth
                autoFocus 
                type = 'text'
                onClick = {handleChange}
              />
            </Box>
          </Box>
          </form>
          <Box display = 'flex' flexDirection = 'row'>
            <IconButton onClick = {null}>
              <Avatar alt = 'avatar-test' src = {'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/302427777_398139745838273_6720531277240145428_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0RDtr0m6RX4AX9UouHK&tn=r3tZJhtLXKQelXtx&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCTuWSbwbgdY62BD3bKxvBvO_foz1X3X73IMgfSumN2mA&oe=63C758FD'}/>
            </IconButton>
            <Box backgroundColor = 'rgba(239, 239, 240, 1)' marginTop = '10px' marginBottom = '15px' borderRadius = '40px' display ='flex' flexDirection='column' width = '40%' height = 'auto'>
              <Box marginLeft = '30px' marginTop = '15px' fontFamily = 'Inter' marginBottom = '15px'>
                <img alt = 'icon' src = {AuthorIcon} height = '20px'/>
                <span>Author</span>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '600' fontFamily = 'Inter'>Đam mê ngôn tình</Typography>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '400' fontFamily = 'Inter'>Chó thui chứ mk k thấy vậy</Typography>
              </Box>
            </Box>
          </Box>
          <Box display = 'flex' flexDirection = 'row'>
            <IconButton onClick = {null}>
              <Avatar alt = 'avatar-test' src = {'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/302427777_398139745838273_6720531277240145428_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0RDtr0m6RX4AX9UouHK&tn=r3tZJhtLXKQelXtx&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCTuWSbwbgdY62BD3bKxvBvO_foz1X3X73IMgfSumN2mA&oe=63C758FD'}/>
            </IconButton>
            <Box backgroundColor = 'rgba(239, 239, 240, 1)' marginTop = '10px' marginBottom = '15px' borderRadius = '40px' display ='flex' flexDirection='column' width = '40%' height = 'auto'>
              <Box marginLeft = '30px' marginTop = '15px' fontFamily = 'Inter' marginBottom = '15px'>
                <img alt = 'icon' src = {AuthorIcon} height = '20px'/>
                <span>Author</span>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '600' fontFamily = 'Inter'>Đam mê ngôn tình</Typography>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '400' fontFamily = 'Inter'>Chó thui chứ mk k thấy vậy</Typography>
              </Box>
            </Box>
          </Box>
          <Box display = 'flex' flexDirection = 'row'>
            <IconButton onClick = {null}>
              <Avatar alt = 'avatar-test' src = {'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/302427777_398139745838273_6720531277240145428_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0RDtr0m6RX4AX9UouHK&tn=r3tZJhtLXKQelXtx&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCTuWSbwbgdY62BD3bKxvBvO_foz1X3X73IMgfSumN2mA&oe=63C758FD'}/>
            </IconButton>
            <Box backgroundColor = 'rgba(239, 239, 240, 1)' marginTop = '10px' marginBottom = '15px' borderRadius = '40px' display ='flex' flexDirection='column' width = '40%' height = 'auto'>
              <Box marginLeft = '30px' marginTop = '15px' fontFamily = 'Inter' marginBottom = '15px'>
                <img alt = 'icon' src = {AuthorIcon} height = '20px'/>
                <span>Author</span>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '600' fontFamily = 'Inter'>Đam mê ngôn tình</Typography>
                <Typography variant = 'h4' fontSize = '14px' fontWeight = '400' fontFamily = 'Inter'>Chó thui chứ mk k thấy vậy</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
};

export default Post;