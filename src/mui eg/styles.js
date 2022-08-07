import { styled } from '@mui/material/styles';

const useStyles = styled((theme)=>({
container: {
//   backgroundColor:theme.palette.background.paper,
  padding:'30px'
},
icon:{
    marginRight: '20px'
},
buttons:{
    marginTop: '40px'
},
cardGrid:{
    padding: '20px',
},
card:{
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
},
cardMedia:{
    paddingTop: '56.25%'
},
cardContent:{
   flexGrow: 1
},
footer:{
    backgroundColor:theme.palette.background.paper,
    padding:'50px 0'  
}
}));
export default useStyles;