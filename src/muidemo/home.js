import {  Grid, Typography, Box, AppBar, Toolbar, InputBase, Input, InputLabel} from "@mui/material";
import {SearchOutlined , Navigation} from '@mui/icons-material';
import { Link } from "react-router-dom";
const Homer = () => {
    return (  
        <>
     <AppBar position="static" sx={{maxWidth: "100%"}}>
            <Toolbar>
                    <Navigation/>
                     <Link style={{textDecoration:'none',  color:'#fff'}} to={`/`}><Typography variant="h5" > tourmonkey</Typography></Link>  

                <Box sx={{
                    display:"flex",
                    justify:"spaceBetween",
                    alignItems: "flexend",
                   
                }}  
                >  
                
                        <InputLabel sx={{lineHeight:'50px'}}>
                            <SearchOutlined 
                            size= "small"
                            sx={{ marginLeft:"900px"}}
                            />
                            <InputBase placeholder="search..." sx={{marginBottom:"10px"}}/>
                        </InputLabel>
                        
                </Box>
                </Toolbar>
            
            
     </AppBar>
        
        </>

    );
}
 
export default Homer;