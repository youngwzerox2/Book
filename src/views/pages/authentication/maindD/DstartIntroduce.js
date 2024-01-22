import { Card, Grid, Typography } from '@mui/material';
// import mainRoom from '../../../../assets/images/mainroom.png';
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
              height: '200px',
              backgroundColor: 'grey.50',
              margin: '20px'
            }}
          >
            <Typography>
              모든 사람은 본인만의 취향이 있지만 그날의 기분, 상황에 따라 다른 작품을 선택합니다. 오늘 하루에 있었던 기뻤던 일, 슬펐던 일을
              멩이와 대화해보세요. 감정 분석 알고리즘을 통해 현재 감정을 추측한 결과와 사용자님의 취향을 함께 고려하여 지금 이 순간에 딱
              맞는 도서를 추천해드릴게요.
            </Typography>
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
            <Typography>
              나와 비슷한 취향의 유저, 비슷한 연령대의 유저들은 어떤 책을 읽을까 궁금하시지 않았나요? 리드미에서는 다른 사용자들이 어떤 책을
              추천하고, 어떻게 평가했는지 볼 수 있어요. 멩이와 함께 도서관에 방문해보세요.
            </Typography>
          </Box>
        </Card>
      </Container>
    </Grid>
  );
};

export default IntroduceContent;
