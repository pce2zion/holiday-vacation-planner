import { Autocomplete, Container, Rating, Grid, Typography, CssBaseline, Box, AppBar, Toolbar, InputBase, Input, InputLabel} from "@mui/material";
import TourCard from "./tour";
import TourCards from "./tour2";
import Traveldata from "./traveldata";



const datal= Traveldata.data.Niagara;
const travelEl = datal.map(datum=>{
    return <TourCard
            key={datum.id}
            id = {datum.id}
            name= {datum.name}
           image= {datum.url}
            time= {datum.time}
            rating= {datum.rating}
            rewiews= {datum.rewiews}
            price= {datum.price}
    />
})
const datar = Traveldata.data. LasVegs;
const travelAl= datar.map(datum=>{
    return <TourCards
            key={datum.id}
            id = {datum.id}
            name= {datum.name}
           image= {datum.url}
            time= {datum.time}
            rating= {datum.rating}
            rewiews= {datum.rewiews}
            price= {datum.price}
    />
})

const Muidemo = () => {
    
    return ( 
            <>
            <CssBaseline/>
                    <Container  maxWidth='md' sx={{marginTop: "30px"}}>
                    <Typography variant="h4" align='left' color="textPrimary" gutterBottom> Top Niagara Falls Tours </Typography>
                        <Grid container spacing={3} >
                         { travelEl}
                        </Grid>

                        <Typography variant="h4" align='left' color="textPrimary" gutterBottom sx={{marginTop: "50px"}}> Top LasVegas Tours </Typography>
                        <Grid container spacing={3} >
                         { travelAl}
                        </Grid>
                    </Container>
            </>
     );
}
 
export default Muidemo;