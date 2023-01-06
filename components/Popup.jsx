import React, { useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Icons } from "styles/Icons";
import Label from "./Label";
import { H4Box } from "./H4";
import Ingredients from "./Ingredients";
import ButtonsPopup from "./ButtonsPopup";
import ButtonsPopupButton from "./ButtonsPopupButton";
import SubtitleTwo from "./SubtitleTwo";

// TODO: реализовать клик вне popup
const Popup = () => {
  const [closePopup, setClosePopup] = useState(false);

  return (
    <PopupOverlay closePopup={closePopup}>
      <PopupBox>
        <PopupBtnClose onClick={() => setClosePopup(!closePopup)} />
        <Label>New</Label>
        <PopupImgBox>
          <PopupImg src={"/images/pizza-1.png"} alt="img" />
        </PopupImgBox>
        <PopupContent>
          <PopupTitle>
            <PopupTitleIcon />
            Пепперони по-деревенски
          </PopupTitle>
          <PopupInfo />
          <Ingredients />
          <ButtonsPopup mb={16}>
            <ButtonsPopupButton text={"Традиционное"} active />
            <ButtonsPopupButton text={"Тонкое"} />
          </ButtonsPopup>
          <ButtonsPopup mb={24}>
            <ButtonsPopupButton text={"20 см"} active />
            <ButtonsPopupButton text={"28 см"} />
            <ButtonsPopupButton text={"33 см"} />
          </ButtonsPopup>
          <SubtitleTwo mb={16}>Добавьте в пиццу</SubtitleTwo>
        </PopupContent>
      </PopupBox>
    </PopupOverlay>
  );
};

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(25, 25, 25, 0.4);
  z-index: 10;
  display: ${(props) => (props.closePopup ? "none" : "flex")};
  padding: ${rem(70)};
`;

const PopupBox = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.white};
  max-width: ${rem(1070)};
  width: 100%;
  min-height: ${rem(680)};
  margin: auto;
  border-radius: ${(props) => rem(props.theme.radius.popup)};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const PopupBtnClose = styled.button`
  width: ${rem(32)};
  height: ${rem(32)};
  position: absolute;
  top: 0;
  right: ${rem(-62)};
  background: url("${Icons("close-popup")}") no-repeat center center;
  cursor: pointer;
`;

const PopupImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${rem(520)};
`;

const PopupImg = styled.img`
  width: 100%;
  max-width: ${rem(450)};
`;

const PopupContent = styled.div`
  position: relative;
  padding: ${rem(32)} ${rem(20)} ${rem(20)};
`;

const PopupTitle = styled(H4Box)`
  display: flex;
  align-items: center;
  margin-right: ${rem(20)};
  margin-bottom: ${rem(16)};
`;

const PopupTitleIcon = styled.i`
  display: inline-flex;
  width: ${rem(24)};
  height: ${rem(24)};
  background: url("${Icons("fire-active")}") no-repeat 0 0;
  background-size: contain;
  margin-right: ${rem(8)};
  flex-shrink: 0;
`;

const PopupInfo = styled.button`
  position: absolute;
  top: ${rem(34)};
  right: ${rem(20)};
  width: ${rem(24)};
  height: ${rem(24)};
  background: url("${Icons("info")}") no-repeat 0 0;
  background-size: contain;
  cursor: pointer;
`;

export default Popup;
