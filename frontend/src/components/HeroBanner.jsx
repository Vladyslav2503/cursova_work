import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import GroupsIcon from '@mui/icons-material/Groups';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import imageSrc from '../assets/images/image_3.jpg'
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ShowerIcon from '@mui/icons-material/Shower';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

const carders = [
  {
    icon: <FitnessCenterIcon style={{ fontSize: "60px" }} />,
    mainText: "QUALITY EQUIPMENT",
    secondText: "Flex Flow Gym is equipped with the best equipment"
  },
  {
    icon: <FactCheckIcon style={{ fontSize: "60px" }} />,
    mainText: "HEALTHY EATING PLAN",
    secondText: "We will make an individual meal plan for you"
  },
  {
    icon: <ShowerIcon style={{ fontSize: "60px" }} />,
    mainText: "SHOWER EQUIPMENT",
    secondText: "What you need after an active workout"
  },
  {
    icon: <MonitorHeartIcon style={{ fontSize: "60px" }} />,
    mainText: "INDIVIDUAL APPROACH",
    secondText: "Attention to your needs"
  }
];

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

  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  return (

    <main style={{padding: "0"}}>
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
                <Button style={{ background: '#FF2625', color: "#fff" }} endIcon={<SendIcon />}>
                  Pay
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid marginTop={"100px"} marginBottom={"100px"} container >
        <Grid item xs={12} sm={4} >
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <CardMedia
              component="div"
              sx={{
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative',
              }}
              image="https://pridegym.com.ua/wp-content/uploads/2020/01/info-box-img-1.jpg"
            >
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'opacity 0.5s', // Додаємо перехід для властивості opacity
                }}
              >
                <GroupsIcon sx={{ fontSize: '70px', color: '#fff', opacity: hovered ? 1 : 1, transition: "all 1s ease-out" }} />
                <Typography variant="h5" component="div" sx={{ color: 'white', mt: 2, opacity: hovered ? 1 : 1, transition: "all 1s ease-out" }}>
                  Strength training
                </Typography>
                <Typography variant="h5" component="div" sx={{ color: 'white', mt: 2, opacity: hovered ? 1 : 0, transition: "all 1s ease-out" }}>
                  Improve your body strength. Join our individual training sessions and quickly get in shape.
                </Typography>

              </Container>
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
          >
            <CardMedia
              component="div"
              sx={{
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative',
              }}
              image="https://pridegym.com.ua/wp-content/uploads/2020/03/info-box-img-2-1.jpg"
            >
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'opacity 0.5s', // Додаємо перехід для властивості opacity
                }}
              >
                <FitnessCenterIcon sx={{ fontSize: '70px', color: '#fff', opacity: hovered1 ? 1 : 1, transition: "all 1s ease-out" }} />
                <Typography variant="h5" component="div" sx={{ color: 'white', mt: 2, opacity: hovered1 ? 1 : 1, transition: "all 1s ease-out" }}>
                  PERSONAL TRAINER
                </Typography>
                <Typography variant="h5" component="div" sx={{ color: 'white', mt: 2, opacity: hovered1 ? 1 : 0, transition: "all 1s ease-out" }}>
                  Stay motivated. Our personal trainers will help you choose the perfect workout.
                </Typography>

              </Container>
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
          >
            <CardMedia
              component="div"
              sx={{
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative',
              }}
              image="https://pridegym.com.ua/wp-content/uploads/2020/03/info-box-img-3-1.jpg"
            >
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <SportsGymnasticsIcon sx={{ fontSize: '70px', color: '#fff', opacity: hovered2 ? 1 : 1, transition: "all 1s ease-out" }} />
                <Typography variant="h5" component="div" sx={{ marginTop: "300px", color: 'white', mt: 2, opacity: hovered2 ? 1 : 1, transition: "all 1s ease-out" }}>
                  CARDIO TRAINING
                </Typography>
                <Typography variant="h5" component="div" sx={{ color: 'white', mt: 2, opacity: hovered2 ? 1 : 0, transition: "all 1s ease-out" }}>
                  Get your best body. Our trainers will build your perfect cardio workout.
                </Typography>
              </Container>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 8,
          pb: 6,
          backgroundColor: "#010101"
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#fff"
            gutterBottom
          >
            SET HIGH GOALS!
          </Typography>
          <Typography variant="h5" align="center" color="#fff" paragraph>
            Once you start training, we'll make sure you get the best fitness program. Our experts and the latest sports equipment are a winning combination.
          </Typography>

        </Container>
      </Box>
      <Box
        sx={{
          pt: 8,
          pb: 6,
          pl: 18,
          pr: 18,
          backgroundColor: "#010101"
        }}
      >
        <Container sx={{ backgroundColor: "#010101", py: 8 }} >
          {/* End hero unit */}
          <Grid container spacing={6}>
            {carders.map((carder) => (
              <Grid item key={carder} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: "center", color: "#fff", bgcolor: "#010101" }}
                >

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography display={"flex"} justifyContent={"center"} paddingBottom={"30px"}>
                      {carder.icon}
                    </Typography>
                    <Typography display={"flex"} justifyContent={"center"} paddingBottom={"20px"} >
                      {carder.mainText}
                    </Typography>
                    <Typography display={"flex"} justifyContent={"center"} align={"center"}>
                      {carder.secondText}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>

  );
};

export default HeroBanner;

{/*
<Card
sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}

>
<CardMedia
  component="div"
  sx={{
    // 16:9

    height: "500px",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

  }}
  image="https://source.unsplash.com/random?wallpapers"
>
  <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',

    }}
  >
    <GroupsIcon sx={{ fontSize: '70px', color: '#fff' }} />
    <Typography variant="h5" component="div" sx={{ color: 'white', mt: 2 }}>
      Силові тренування
    </Typography>
  </Container>
</CardMedia>
</Card>*/}