import styled from 'styled-components';

// ------------ v1 ---------------
export const HeroHeader = styled.div`
  background-image: url(${ props => props.bgImage}) !important;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 15em;
  text-align: center;
  padding-top: 10%;

  @media (max-width: 64em) {
    top: 10%;
    width: 120%;
    margin-left: -10%;
  }

  @media (max-width: 50em) {
    top: 20%;
    width: 160%;
    margin-left: -30%;
  }

`

// ------------- v2 ----------------
export const HHeader = styled.div`
  text-align: center;
  min-height: 20em;
  position: relative;
  overflow: hidden;
  ${'' /* position: absolute;
  top: 100px;
  left: 0px; */}
  margin:0;
  padding:0;
`
export const HeroHeaderImageContainer = styled.div`
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(${ props => props.bgImage});
  background-size: 100%;
  margin: 0;
  padding: 0;
`
export const HeroHeaderImg = styled('image')`
  position: absolute;
  transition: all .5s ease-in-out;
  width: 120%;
  left: 50%;
  top: 50%;
  margin-top: -5%;
  margin-left: -50%;
  margin-right: 0;
  margin-bottom: 0;

  @media (min-width: 50em) {
    top: 10%;
    margin-top: -5%;
  }

  @media (min-width: 64em) {
    top: 40%;
    margin-top: -40%;
  }
`
export const HeroHeaderTextContainer = styled.div`
  ${'' /* background-image: linear-gradient(0, black, transparent 80%), linear-gradient(0, black, transparent 0px); */}
  z-index: 2;
  position: relative;
  display: block;
  min-height: 15em;

  text-align: center;
  overflow: hidden;
  margin: 0;
  padding: 0;

  :after {
    content: ' ';
    clear: both;
    display: table;
  }
`
export const HeroHeaderH1 = styled.h1`
  position: relative;
  color: white;
  margin: 2em;
  border: 3px solid white;
  display: inline-block;
  padding: 2em 3em; font-family:
  sans-serif;
  font-weight: 100;
  font-size: 3em;
`
export const FooterStyled = styled.div`
  flex-shrink: 0;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const FlexContent = styled.div`
  flex: 1 0 auto;
  padding: 20px
`
