import { Card, Grid, Typography } from '@mui/material';

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
              height: '200px',
              backgroundColor: 'grey.200'
            }}
          >
            <Typography>설명문구1</Typography>
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
              py: 4.5,
              height: '200px',
              backgroundColor: 'grey.200'
            }}
          >
            <Typography>설명문구2</Typography>
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
              py: 4.5,
              height: '200px',
              backgroundColor: 'grey.200'
            }}
          >
            <Typography>설명문구3</Typography>
          </Box>
        </Card>
      </Container>
    </Grid>
  );
};

export default IntroduceContent;
