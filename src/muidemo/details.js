import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Traveldata from "./traveldata";
import { Typography, Grid,BottomNavigation ,Box,Paper, Container, AccordionDetails} from "@mui/material";
import ControlledAccordions from "./accordian";
import QuiltedImageList from "./collage";
import TransitionsModal from "./modal";

const element = Traveldata.data.Niagara;


const Detail = (props) => {

    const {id} = useParams()

    return ( 
        <>
        <Container maxWidth='md' sx={{marginTop: "30px"}}>
          <Grid Container>
              <Grid item xs={12} sm={6} md={3} >
                    
                    <Typography variant="h4" align='left' color="textPrimary" gutterBottom> {element[id].name}</Typography>

                    <Box display ='flex' >
                    <img style={{width: "70%", height: '300px', marginRight:"10px"}} src={element[id - 1].url}/>
                    <QuiltedImageList />
                    </Box>

                      <Typography variant="h6" align='left' color="textPrimary" gutterBottom marginTop={5}> About this ticket </Typography>
                      <Typography variant="body2" align='left' color="textPrimary" gutterBottom> Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Vel illum, et aut officia odit fugiat rem laborum debitis eius dolorum corporis,
                        reprehenderit voluptate aliquam non explicabo voluptas rerum ab iusto! </Typography>

                      <Box marginTop={3}>
                          <Typography variant="subtitle2" align='left' color="textPrimary"
                            gutterBottom> Frequently asked questions 
                            </Typography>
                            <ControlledAccordions/>
                      </Box>

                      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                      <BottomNavigation>
                          <TransitionsModal/>
                      </BottomNavigation>
                      </Paper>
              </Grid>

          </Grid>
        
         
        </Container>
        
        </>
     );
}
 
export default Detail;