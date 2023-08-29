// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  background-image: url(${props => `${props.backgroundImage}`});
  //   background-image: url('https://assets.ccbp.in/frontend/react-js/nature-img.png
  // ');

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  width: 500px;
  height: 500px;
  background-position: center center;
  border: 1px solid pink;
  margin: 10px;
  padding: 40px;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  border: 1px solid green;
  padding: 10px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid red;
  margin: 10px;
  width: 50%;
`
export const Heading = styled.h1`
  font-size: ${props => {
    const {fontSize} = props
    console.log(fontSize)
    return `${fontSize}px`
  }};
`
