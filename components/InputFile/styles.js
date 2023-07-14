import styled from 'styled-components';


export const StyledLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("https://www.shareicon.net/data/2017/05/09/885771_camera_512x512.png");
  background-size: 100% 100%;
  opacity: 0.3;
  position: absolute;
  z-index: 1;
  top: 0px;
  &:hover {
    cursor: pointer;
  }
`
export const StyledFileInput = styled.input`
  display: none;
`