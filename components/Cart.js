import styled from "styled-components";
import Center from "./Center";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
const Bg = styled.div`
  // background-color: #fff;
  color: black;
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  padding: 20px; /* Adjust the padding as needed */
  box-sizing: border-box;
  z-index: 1; /* Adjust the z-index as needed */
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  padding-top: 50px;
`;

const Paragraph = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperButton = styled.div`
  display: flex;
  gap: 5px;
`;

const NewVideo = styled.video`
  height: auto;
  width: 100%;
  // border-radius: 10px;
  box-shadow: #a0e9ff 0px 7px 29px 0px;
`;

const Top = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export default function Cart() {
  return (
    <>
      <Top>
        <NewVideo
          autoPlay
          loop
          muted
          src="https://www.etechcube.com/wp-content/uploads/2021/07/Add-a-heading_2-1.mp4"
        ></NewVideo>
        {/* <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Pro Anywhere</Title>
              <Paragraph>
                If you use a package manager like yarn that supports the
                "resolutions" package.json field, we also highly recommend you
                add an entry to it as well corresponding to the major version
                range. This helps avoid an entire class of problems that arise
                from multiple versions of styled-components being installed in
                your project.
              </Paragraph>
              <WrapperButton>
                <PrimaryBtn>Read More</PrimaryBtn>
                <SecondaryBtn>Add to Cart</SecondaryBtn>
              </WrapperButton>
            </div>  
            
          </Column>
        </Wrapper>
      </Center>
    </Bg> */}
      </Top>
    </>
  );
}
