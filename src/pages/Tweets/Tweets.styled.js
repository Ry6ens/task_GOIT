import styled from "styled-components";
import { device } from "@/styles/Media.variables";

export const Container = styled.section`
  margin: 0 auto;
  padding: 0px 16px;

  display: flex;
  flex-direction: column;
  gap: 100px;

  @media ${device.desktop} {
    padding: 0px 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
`;

export const ListItem = styled.li`
  position: relative;

  width: 380px;
  height: 460px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const OverlayLogo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Image = styled.img`
  margin-top: 28px;

  width: 308px;
  height: 168px;
`;

export const Line = styled.div`
  margin-top: 18px;

  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const OverlayIMG = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;

  width: 80px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  border-radius: 50%;
`;

export const AvatarIMG = styled.img`
  width: 62px;
  height: 62px;

  border-radius: 50%;
`;

export const TextTweets = styled.p`
  margin-top: 68px;

  font-family: var(--font-MontserratMedium);
  font-size: 20px;
  line-height: 24px;

  color: #ebd8ff;
`;

export const TextFollowers = styled.p`
  margin-top: 18px;

  font-family: var(--font-MontserratMedium);
  font-size: 20px;
  line-height: 24px;

  color: #ebd8ff;
`;
