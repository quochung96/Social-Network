import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    inner_container: {
        backgroundColor: '#644DF5',
        width: '100%',
        height: '60px'
    },
    profile: {
        marginLeft: '70px',
        marginTop: '20px',
        '& .MuiAvatar-root': {
            width: '50px',
            height: '50px',
        },
    },
    listItem: {
        marginLeft: '-10px'
    }
}));