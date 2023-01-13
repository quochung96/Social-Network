import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 30,
        margin: '30px 0',
        display: 'flex',
        alignItems: 'center',
    },
    imageText: {
        marginLeft: '10px',
    },
    menuText: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '1em',
        fontWeight: 300,
        color: "#000042",
        fontStyle: "bold",
        marginLeft: '10px'
    },
    icon: {
        marginLeft: '10px',
        marginTop: '15px',
        marginRight: '30px',
        width: '50%',
        height:'50%',
        objectFit: 'cover',
        objectPosition: 'bottom',
        [theme.breakpoints.down('sm')]: {
            width: '40%',
          },
    },
    iconText: {
        textDecoration: 'none',
    },
    header_middle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: theme.spacing(24),

    },
    header_option: {
        padding: theme.spacing(2,3),
        cursor: 'pointer',
        '&:hover': {
            borderRadius: '20px',
            backgroundColor: 'whitesmoke',
        }
    },
    emphasis: {
        display: 'flex',
        width: '60px',
        height: '5px',
        marginLeft: theme.spacing(1),
    },
    header_right: {
        marginLeft: theme.spacing(12),
        display: 'flex',
        alignItems: 'center'
    },
    header_info: {
        display: 'flex',
        alignItems: 'center',
        '& .MuiAvatar-root': {
            width: '60px',
            height: '60px',
            margin: '10px'
        },
        '& .MuiButtonBase-root': {
            width: '50px',
            height: '50px',
            margin: '0px 25px',
            backgroundColor: 'whitesmoke',
            color: '#000'
        }
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
      },
}));