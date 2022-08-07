// import realImage from "./images/first.jpg"
import {AccessTime} from '@mui/icons-material';
import { ThemeProvider } from "@mui/material";
import theme from "./styles";
import {  Paper,  Grid, Typography,  Rating, Box,} from "@mui/material";
import { Link } from "react-router-dom";





const TourCards = (props) => {
    return ( 
        <>
         <Grid item xs={12} sm={6} md={3}  >
            <ThemeProvider theme={theme}>
                   
                    <Paper elevation={3} round >
                       <Link to={`/${props.id}`}><img src={props.image} style={{width:"100%", height:"5rem", }} alt="a rare pic" /> </Link> 
                        <Box paddingX={1} >
                        <Typography variant="subtitle1" component ="h2" align='left' color="textPrimary" > {props.name} </Typography>
                        <Box
                        style={{
                            display: "flex",
                            alignItems:"center",
                           
                        }}
                        >
                            <AccessTime sx={{width:'12.5px', marginRight:"5px" , marginBottom:"2px"}}/>
                          <Typography variant="body2" >{props.time} hours</Typography>  
                        </Box>
                        <Box
                        style={{
                            display: "flex",
                            alignItems:"center",
                           
                        }}
                        >
                            <Rating 
                            size= "small"
                            name="read-only"
                            value=  {props.rating}
                            readOnly
                            precision={0.5}
                            />
                            <Typography variant="body2" sx={{marginLeft:' 5px'}}>{props.rating}</Typography>  
                            <Typography variant="body2" sx={{marginLeft: "2px"}} >({props.rewiews} reviews) </Typography>  
                        </Box>
                        
                           <Typography variant="h6" > From C ${props.price}  </Typography>   
                        </Box>
                       
                        
                    </Paper>
            </ThemeProvider>
                   
        </Grid>
        </>
     );
}
 
export default TourCards;