import styled from "styled-components";
import Center from "./Center";
const MiddleDiv = styled.div`
  height: 200px;
`;

export const PhotoMiddle = () => {
  return (
    <MiddleDiv>
      <Center>
        <img
          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP_tests/HP_asset_white_bg.png"
          alt="not found"
          width="100%"
          height="180"
        />
      </Center>
    </MiddleDiv>
  );
};
