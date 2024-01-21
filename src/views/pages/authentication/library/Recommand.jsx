// Textarea 사이즈 옵션
// import TextareaAutosize from 'react-textarea-autosize';
// main 배경 이미지
import { Button } from '@mui/material';
import theimg from '../../../../assets/images/bookcaseB_meng_Basic.png';
// import { width } from '@mui/system';
// -------------------------------------------------------------------------------
// ===========================|| FIREBASE - REGISTER ||=========================== //
// jquery 쓰려고 npm install jquery 함.
// import $ from 'jquery'; g하면 걍 쓸 수 잇음.

// npm install image-map
import ImageMap from 'image-map';
import { useEffect } from 'react';
// -------------------------------------------------------------------------------
const MainPage = () => {
  useEffect(() => {
    ImageMap('img[useMap]'); // imageMap 삽입코드
  }, []);

  return (
    <>
      <>
        {/* <img src={theimg} alt="tlqkf" useMap="#image-map" /> */}
        <img src={theimg} alt="책장" useMap="#image-map" />

        <map name="image-map">
          <area target="_self" alt="멩이1" title="멩이1" role="presentation" coords="234,110,41" shape="circle" />
          <area target="_self" alt="멩이2" title="멩이2" role="presentation" coords="360,109,40" shape="circle" />
          <area target="_self" alt="멩이3" title="멩이3" role="presentation" coords="489,110,39" shape="circle" />
          <area target="_self" alt="멩이4" title="멩이4" role="presentation" coords="234,275,38" shape="circle" />
          <area target="_self" alt="멩이5" title="멩이5" role="presentation" coords="360,278,39" shape="circle" />
          <area target="_self" alt="멩이6" title="멩이6" role="presentation" coords="489,277,39" shape="circle" />
          <area target="_self" alt="멩이7" title="멩이7" role="presentation" coords="236,438,39" shape="circle" />
          <area target="_self" alt="멩이8" title="멩이8" role="presentation" coords="361,439,39" shape="circle" />
          <area target="_self" alt="멩이9" title="멩이9" role="presentation" coords="489,439,41" shape="circle" />
          <area target="_self" alt="멩이10" title="멩이10" role="presentation" coords="234,603,39" shape="circle" />
          <area target="_self" alt="멩이11" title="멩이11" role="presentation" coords="360,602,41" shape="circle" />
          <area target="_self" alt="멩이12" title="멩이12" role="presentation" coords="489,602,39" shape="circle" />
        </map>

        <Button
          variant="contained"
          color="primary"
          sx={{ position: 'absolute', top: '92%', left: '44%' }}
          onClick={() => {
            location.reload();
          }}
        >
          뒤로가기
        </Button>
      </>
    </>
  );
};

export default MainPage;
