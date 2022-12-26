import { makeStyles } from '@material-ui/core/styles';

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

  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
}));