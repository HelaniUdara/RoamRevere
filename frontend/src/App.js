import React from 'react';
import { Container, Grow, Grid} from '@mui/material';
import travel from './images/travel.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import { CustomAppBar, CustomTitle, CustomLogo } from './AppStyles.js';

const App = () => {
  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <CustomAppBar position="static" color="inherit">
        <CustomTitle variant="h2">RoamRevere</CustomTitle>
        <CustomLogo src={travel} alt="Travel"  height="60"/>
      </CustomAppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;