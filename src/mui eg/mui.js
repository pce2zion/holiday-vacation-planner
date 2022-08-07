import { Typography, AppBar, Button, Card, CardActions, CardContent, Grid, CardMedia, CssBaseline, Toolbar, Container} from '@mui/material';
import {PhotoCamera} from '@mui/icons-material';

import useStyles from './styles';


function Mui() {
   const classes = useStyles();

  const carde = [1,2,3,4,5,6,7,8,9]
  return (
    <>
    <CssBaseline/>
    <AppBar position = "relative">
      <Toolbar>
        <PhotoCamera  className={classes.icon}/>
        <Typography variant= "h6">Photo Album</Typography>
      </Toolbar>
    </AppBar>

    <main>
      <div className= {classes.container}>
        <Container  maxWidth= "sm" style={{marginTop: '100px'}}>
           <Typography variant= "h2" align ="center" color="textPrimary" gutterBottom>
            Photo Album
           </Typography> 
           <Typography variant= "h5"align ="center" color="textSecondary" paragraph >Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Commodi quibusdam accusamus natus totam fuga sit tenetur. Deleniti, praesentium? Alias
            facere voluptatem culpa, velit aut adipisci sed minima officia soluta iste?
            </Typography>

            <div  className={classes.buttons}>
             <Grid container spacing={2} justify ="center" style={{marginLeft: '60px'}}>
              <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos 
                  </Button> 
              </Grid>
              <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary action 
                  </Button> 
              </Grid>
              
             </Grid> 

            </div>


        </Container>

      </div>
      <Container maxWidth= 'md'>
        <Grid container spacing={4}  className={classes.cardGrid}>
          {carde.map((card)=>{
            return  <Grid item key={card} xs={12} sm={6} md={4}>
              <Card  className={classes.card}>
                <CardMedia
                 className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title = "image title"
                />
                <CardContent  className={classes.CardContent}>
                  <Typography variant='h5' gutterBottom>
                    Heading
                  </Typography>
                  <Typography >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eveniet 
                  
                  </Typography>
                </CardContent>
                <CardActions>
                <Button size='small' color='primary'>View </Button> 
                <Button size='small' color='primary'>Edit </Button> 
                </CardActions>
  
              </Card>
  
            </Grid>
  
          })}
          
        </Grid>
      </Container>
    </main>
    <footer  className={classes.footer}>
      <Typography variant= 'h6' align='center' gutterBottom>
         Footer
      </Typography>
      <Typography variant= 'subtitle1' align='center' gutterBottom color='textSecondary'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             </Typography>
    </footer>
     
    </>
  );
}

export default Mui;

