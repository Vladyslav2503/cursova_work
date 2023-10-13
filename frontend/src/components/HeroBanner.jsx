import React from 'react';
import { Box, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import SendIcon from '@mui/icons-material/Send';

import HeroBannerImage from '../assets/images/banner.png';
import imageSrc from '../assets/images/image_3.jpg'
import imageSrcс from '../assets/images/image_2.png'


const cards = [{
  info: "YEAR + TRAINER",
  time: "7.00-23.00",
  price: 12999,
  info_one: "Unlimited workouts",
  info_two: "Gym",
  info_three: "Cardio zone, Showers",
  info_four: "Warm-up room",
  info_five: "Finnish / Infrared sauna",
  info_six: "Instructor consultation",

},
{
  info: "MOUNT",
  time: "7.00-23.00",
  price: 699,
  info_one: "Gym",
  info_two: "Cardio zone, Showers",
  info_three: "Warm-up room",
  info_four: "Instructor consultation",
  info_five: "8 training sessions",
  info_six: "",
},
{
  info: "3 MOUNT",
  time: "7.00-23.00",
  price: 2699,
  info_one: "24 training sessions",
  info_two: "Gym",
  info_three: "Cardio zone, Showers",
  info_four: "Warm-up room",
  info_five: "Group studios, Children's studios",
  info_six: "Instructor consultation",
}];


const HeroBanner = () => {
  return (

    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover', // Робить зображення повністю внутрішнього контейнера
          backgroundPosition: 'center',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#fff"
            gutterBottom
            sx={{ marginTop: "25px" }}


          >
            Welcome to FlexFlow
          </Typography>
          {/*<Typography variant="h5" align="center" color="#fff" paragraph>
            The project is about people who believed in their dreams and their abilities.
            And they created a place where honesty, perseverance, work on oneself and one's ego are valued.
      </Typography>*/}
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          > <a
            href="#exercises"
            style={{
              marginTop: '360px',
              textDecoration: 'none',
              width: '200px',
              textAlign: 'center',
              background: '#FF2625',
              padding: '14px',
              fontSize: '22px',
              textTransform: 'none',
              color: 'white',
              borderRadius: '4px',

            }}
          >
              Explore Exercises
            </a>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: "#29282d",
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography align='center' gutterBottom variant="h6" component="h2" color={"#039dff"}>
                    {card.info}
                  </Typography>
                  <Typography color={"#ffaa00"} variant="h6" component="h2" align='center'>
                    {card.price}
                    <span> grn/year</span>
                  </Typography>
                  <List sx={{ color: "#FFf" }} >
                    <ListItem >
                      <ListItemText sx={{ display: "flex", justifyContent: "center" }} primary={card.info_one} />
                    </ListItem>
                    <ListItem>
                      <ListItemText sx={{ display: "flex", justifyContent: "center" }} primary={card.info_two} />
                    </ListItem>
                    <ListItem>
                      <ListItemText sx={{ display: "flex", justifyContent: "center" }} primary={card.info_three} />
                    </ListItem>
                    <ListItem>
                      <ListItemText sx={{ display: "flex", justifyContent: "center" }} primary={card.info_four} />
                    </ListItem>
                    <ListItem>
                      <ListItemText sx={{ display: "flex", justifyContent: "center" }} primary={card.info_five} />
                    </ListItem>
                    <ListItem>
                      <ListItemText sx={{ display: "flex", justifyContent: "center" }} primary={card.info_six} />
                    </ListItem>
                  </List>
                </CardContent>
                <Button style={{background: '#FF2625', color: "#fff"}} endIcon={<SendIcon />}>
                  Pay
                </Button>
              </Card>
            </Grid>
          ))}  
        </Grid>
        
      </Container>
    </main>

  );
};

export default HeroBanner;