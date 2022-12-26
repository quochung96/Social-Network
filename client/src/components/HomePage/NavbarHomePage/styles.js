import {makeStyles, alpha} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 30,
        margin: '30px 0',
        display: 'flex',
        height: '120px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            height: '220px',
        },
        [theme.breakpoints.down('sm')] : {
            flexDirection: 'column',
            height: '220px',
        }
    },
    heading: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontSize: '2em',
        fontWeight: 300,
    },
    image: {
        marginLeft: '10px',
        marginTop: '5px',
        marginRight: '10px',
      },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
        },
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
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
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.light, 0.25)
        }
    },
    icon: {
        marginLeft: '10px',
        marginTop: '15px',
        marginRight: '30px',
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.light, 0.25)
        }
    },
    iconText: {
        marginLeft: '35px',
        textDecoration: 'none',
    },
    line: {
        margin: '30px 50px 20px 50px'
    },
    btn: {
        marginLeft: '40px',
        borderRadius: 20, 
    }
}))