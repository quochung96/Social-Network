import {makeStyles,alpha} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
          },
        color: '#8F5849',
        marginLeft: '20px',
        fontSize: '48px',
        fontFamily: 'Inter',
        [theme.breakpoints.down('sm')] : {
            flexDirection: 'column',
            margin: theme.spacing(2),
            fontSize: '36px',
        }
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    container_login: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        marginLeft: '40px',
        width: '800px',
        [theme.breakpoints.down('sm')] : {
            flexDirection: 'column',
            margin: theme.spacing(1),
            width: '200px',
        },
        [theme.breakpoints.down('md')] : {
            flexDirection: 'column',
            margin: theme.spacing(1),
            width: '400px',
            
        }
    },
    spacing: {
        marginTop: theme.spacing(10),
        [theme.breakpoints.down('md')] : {
            marginTop: theme.spacing(60),
        },
        [theme.breakpoints.down('sm')] : {
            width: '100%',
            marginTop: theme.spacing(70),
        }
    },
    forgot_password: {
        marginLeft: theme.spacing(2),
        textDecoration: 'none',
        color: '#000',
    },
    submit: {
        margin: theme.spacing(3, 2, 2),
        borderRadius: 20,
        height: '50px',
    },
    lineBreak: {
        margin: '0px 30px 5px 30px',
        [theme.breakpoints.down('sm')] : {
            flexDirection: 'row',
            margin: theme.spacing(3),
            width: '100px'
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'row',
            margin: theme.spacing(2),
            width: '100px'
        }
    },
    breakName: {
        fontSize: 22,
        color: '#A9A9A9'
    },
    btnGoogle: {
        margin: theme.spacing(2, 3, 2),
        borderRadius: 20,
        height: '40px',
    },
    span_memories: {
        color: '#000000'
    },
    img_bg_1:{
        width: '600px 100%',
        height: '100%',
        [theme.breakpoints.down('md')] : {
            width: '500px',
            marginLeft: theme.spacing(6),
        },
        [theme.breakpoints.down('sm')] : {
            width: '200px',
            marginLeft: theme.spacing(6),
        }
    },
    container_bg_3: {
        backgroundColor: "#E6E6FA",
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        width: '1750px',
        height: '700px',
        margin: theme.spacing(6,2,2),
        [theme.breakpoints.down('sm')] : {
            flexDirection: 'column',
            width: '100%',
        },
        [theme.breakpoints.down('md')] : {
            flexDirection: 'column',
            width: '100%',
            
        }
    },
    text_bg_3: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
        fontFamily: 'Inter',
    },
    img_bg_3 : {
        marginLeft: '38%',
        marginTop: '10px',
        [theme.breakpoints.down('md')]: {
            marginLeft: '20%'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '25%',
        }
    },
    btn_bg_3: {
        width: '300px',
        height: '50px',
        borderRadius: 60,
        margin: theme.spacing(4,90),
        fontSize: '18px',
        fontFamily: 'Helvetica',
    },
    padding_bg_3: {
        marginTop: theme.spacing(120),
    },
    text_bg_4: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
          },
        color: '#8F5849',
        marginLeft: '20px',
        marginTop: '10px',
        fontFamily: 'Inter',
        fontWeight: 'normal',
    },
    text_sub_bg_4: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
          },
        marginLeft: '20px',
        marginTop: '20px',
        fontFamily: 'Inter',
        fontWeight: 'normal',
    },
    btn_bg_4: {
        backgroundColor: '#9370DB',
        color: 'white',
        borderRadius: 30,
        width: '350px',
        height: '60px',
        margin: theme.spacing(4,2),
        fontSize: '20px',
        fontWeight: 'normal',
        fontFamily: 'Inter',
        '&:hover': {
            backgroundColor: alpha(theme.palette.secondary.dark, 0.5)
        }
    },
    btn_icon_bg_4: {
        marginLeft: '20px',
        width: '50px',
        height: '50px',
    },
    bg_img_5: {
        marginLeft: '10%',
        marginTop: '15%',
        width: '700px',
        height: '200px',
        backgroundColor: '#8F5849',
        opacity: '95%'
    },
    box: {
        width: '220px',
        height: '250px',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: '-180px',
        marginLeft: '20px',
        marginBottom: '140px',
        display: 'flex',
    },
    circle_num: {
        display: 'flex',
        borderRadius: 60,
        width: '30px',
        height: '30px',
        backgroundColor: '#8F5849',
        marginLeft: '15px',
        marginTop: '10px',
    },
    textCircle: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: '5px',
        marginLeft: '10px',
    },
    img_process: {
        margin: theme.spacing(6,2),
    },
    text_process: {
        display: 'flex',
        marginTop: '170px',
        marginLeft: '-160px',
        width: '180px',
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: '500',
        color: '#8F5849',
    }
}));