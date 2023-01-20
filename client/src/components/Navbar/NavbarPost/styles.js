import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 30,
        margin: '30px 0',
        display: 'flex',
    },
    header_middle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_option: {
        padding: theme.spacing(3,2),
        cursor: 'pointer',
        '&:hover': {
            borderRadius: '20px',
            backgroundColor: 'whitesmoke',
        },
    },
    header_right: {
        display: 'flex',
        alignItems: 'center'
    },
    header_info: {
        display: 'flex',
        alignItems: 'flex-end',
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