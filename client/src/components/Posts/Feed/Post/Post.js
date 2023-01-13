import {Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Box,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 4, borderRadius: '30px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 15px' }}>
      <CardHeader
        avatar={
          <IconButton onClick = {null}>
            <Avatar sx = {{width: '60px',height:'60px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 8px'}} alt = 'avatar-test' src = {'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/302427777_398139745838273_6720531277240145428_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0RDtr0m6RX4AX9UouHK&tn=r3tZJhtLXKQelXtx&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCTuWSbwbgdY62BD3bKxvBvO_foz1X3X73IMgfSumN2mA&oe=63C758FD'}/>
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
            <Typography color = 'grey'>1d .</Typography>
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
      <CardMedia
            sx = {{width: '100%', height: '80%'}}
            component="img"
            image="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/319725518_1201453870449380_4939254796156173931_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PuAtfnfELn0AX9pqa9Z&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCgT4qnzGPm2vwHl_100aaAix3Sj-FoOdCDk_FYq4xLQQ&oe=63C5BD66"
            alt="img-post"
        />
      <Box flexDirection='row' display = 'flex' gap = "5px" marginTop = '5px'>
        <CardMedia
            sx = {{width: '33%', height: '30%'}}
            component="img"
            image="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/318483557_711796603501300_171189916219086490_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AZR3vrrD8ksAX8NsPHS&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfBYtKjkuMB3VmnHf4xVO1rysUpXP3AIOR40bChh7zwWgw&oe=63C5B4ED"
            alt="img-post"
        />
        <CardMedia
            sx = {{width: '33%', height: '30%'}}
            component="img"
            image="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/318782736_512703647509533_6678652259994110515_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XrhFe8e-bNEAX-Yx4C6&tn=r3tZJhtLXKQelXtx&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfDXs6zZDBAbcTdwyaxwQuyP1o_Z0KvOhGdaAOylOkM5nQ&oe=63C7921C"
            alt="img-post"
        />
         <CardMedia
            sx = {{width: '33%', height: '30%'}}
            component="img"
            image="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/319751954_564625088343109_6231228366034823076_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zftZeongR_8AX_e2NM6&tn=r3tZJhtLXKQelXtx&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfB-OvqjLzbpPZvnvuLMoCkPTAuq2jB8yLi-_jGYcgLVtQ&oe=63C65CE3"
            alt="img-post"
        />
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;