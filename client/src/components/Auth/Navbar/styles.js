import {makeStyles} from '@mui/styles';

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
  },

  imageText: {
    marginLeft: '10px',
    marginTop: '5px',
  },
}));