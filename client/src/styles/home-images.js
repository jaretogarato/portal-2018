import styled from 'styled-components';

export const HomeBody = styled.div`
  background-image: url(${ props => props.bgImage}) !important;
	background-position: center center;
	background-repeat:  no-repeat;
	background-attachment: fixed;
	background-size:  cover;
	background-color: #999;
  margin: 0;
  padding: 0;
  font-family: exo, sans-serif;
  height: 100% !important;
  width: 100%;
  min-height: 750px;
  ${'' /* display: flex; */}
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
  width: 480px;
  height: 298px;
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
