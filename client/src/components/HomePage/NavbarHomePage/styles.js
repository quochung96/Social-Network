<<<<<<< HEAD
import {makeStyles, alpha} from '@material-ui/core/styles';
=======
import {makeStyles} from '@material-ui/core/styles';
>>>>>>> 5585eb84adb6c48445f81bd496ee808ec5a97af1

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
<<<<<<< HEAD
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            height: '220px',
        },
        [theme.breakpoints.down('sm')] : {
            flexDirection: 'column',
            height: '220px',
=======
        [theme.breakpoints.down('sm')] : {
            flexDirection: 'column'
>>>>>>> 5585eb84adb6c48445f81bd496ee808ec5a97af1
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
<<<<<<< HEAD
        fontStyle: "bold",
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.light, 0.25)
        }
=======
        fontStyle: "bold"
>>>>>>> 5585eb84adb6c48445f81bd496ee808ec5a97af1
    },
    icon: {
        marginLeft: '10px',
        marginTop: '15px',
        marginRight: '30px',
<<<<<<< HEAD
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.light, 0.25)
        }
=======
>>>>>>> 5585eb84adb6c48445f81bd496ee808ec5a97af1
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