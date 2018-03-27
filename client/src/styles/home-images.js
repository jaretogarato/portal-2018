import styled from 'styled-components';

export const HomeBody = styled.div`
  background-image: url(https://monsterdesignstudios.com/wp-content/uploads/2014/09/website-design-slider-background-stockton.jpg) !important;
	background-position: center center;
	background-repeat:  repeat;
	background-size:  cover;
  background-color: #999;

  margin: 0;
  padding: 0;
  font-family: exo, sans-serif;
  height: 100vh !important;
  width: 100%;
  min-height: 750px;
  z-index: -5;
`

export const HomeWrapper = styled.div`
  height: 100% !important;
  width: 100%;
`
export const HomeLogo = styled.div`
  background-image: url(${ props => props.bgImage}) !important;
  background-size: cover;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 352px;
  height: 136px;
  bottom: 0;
  color: #fff;
  padding: 0.5em;

  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`


