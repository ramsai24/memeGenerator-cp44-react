// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  background-image: ${props => props.url};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: ${props => props.fontSize};
`
