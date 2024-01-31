import { Card, Grid } from '@mui/material';
// import mainRoom from '../../../../assets/images/mainroom.png';

import Banner1 from '../../../../assets/images/mainBanner1.png';
import Banner2 from '../../../../assets/images/mainBanner2.png';
import Banner3 from '../../../../assets/images/mainBanner3.png';

const { Container, Box } = require('@mui/system');
const IntroduceContent = () => {
  return (
    <Grid>
      <Container>
        <Card>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              py: 4.5,
              padding: '20px',
              height: '220px',
              backgroundColor: 'grey.50',
              margin: '20px'
            }}
          >
            <img src={Banner1} alt="설명이미지1" />
          </Box>
        </Card>
      </Container>
      <Container>
        <Card>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              py: 4.5,
              height: '100%',
              backgroundColor: 'grey.50',
              margin: '20px'
            }}
          >
            <img src={Banner2} alt="설명이미지2" />
          </Box>
        </Card>
      </Container>
      <Container>
        <Card>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              py: 4.5,
              height: '200px',
              backgroundColor: 'grey.50',
              margin: '20px'
            }}
          >
            <img src={Banner3} alt="설명이미지3" />
          </Box>
        </Card>
      </Container>
    </Grid>
  );
};

export default IntroduceContent;
