import {Component} from 'react'
import {
  Container,
  Heading,
  MainContainer,
  FormContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
    top: '',
    bottom: '',
    font: fontSizesOptionsList[0].displayText,
    image: '',
  }

  updateImageUrl = event => this.setState({imageUrl: event.target.value})

  updateTopText = event => this.setState({topText: event.target.value})

  updateBottomText = event => this.setState({bottomText: event.target.value})

  updateFontSize = event => this.setState({fontSize: event.target.value})

  //   elementsCall = () => {
  //     const {imageUrl, topText, bottomText, fontSize} = this.state
  //     return (
  //       <div>
  //         <Container backgroundImage={imageUrl}>
  //           <Heading fontSize={fontSize}>{topText}</Heading>
  //           <Heading fontSize={fontSize}>{bottomText}</Heading>
  //         </Container>
  //       </div>
  //     )
  //   }

  onSubmitForm = event => {
    event.preventDefault()
    // this.elementsCall()
    const {imageUrl, topText, bottomText, fontSize} = this.state
    console.log(imageUrl, topText, bottomText, fontSize)
    this.setState({
      image: imageUrl,
      top: topText,
      bottom: bottomText,
      font: fontSize,
    })
  }

  render() {
    const {image, font, top, bottom} = this.state
    return (
      <MainContainer>
        {/* <form> */}
        <FormContainer onSubmit={this.onSubmitForm}>
          <h1>Meme Generator</h1>
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" id="imageUrl" onChange={this.updateImageUrl} />

          <label htmlFor="topText">Top Text</label>
          <input type="text" id="topText" onChange={this.updateTopText} />

          <label htmlFor="bottomText">Bottom Text</label>
          <input type="text" id="bottomText" onChange={this.updateBottomText} />

          <label htmlFor="fontSize">Font Size</label>
          <select id="fontSize" onChange={this.updateFontSize}>
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId}>{each.displayText}</option>
            ))}
          </select>

          <button type="submit">Generate</button>
        </FormContainer>
        {/* </form> */}
        {/* <div> */}
        <Container backgroundImage={image} data-testid="meme">
          <Heading fontSize={font}>{top}</Heading>
          <Heading fontSize={font}>{bottom}</Heading>
        </Container>
        {/* </div> */}
      </MainContainer>
    )
  }
}

export default MemeGenerator
