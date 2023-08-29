import {Component} from 'react'
import {Container, Heading} from './styledComponents'

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
  }

  updateImageUrl = event => this.setState({imageUrl: event.target.value})

  updateTopText = event => this.setState({topText: event.target.value})

  updateBottomText = event => this.setState({bottomText: event.target.value})

  updateFontSize = event => this.setState({fontSize: event.target.value})

  onSubmitForm = event => {
    event.preventDefault()
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    console.log(topText, bottomText)
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" id="imageUrl" onClick={this.updateImageUrl} />

          <label htmlFor="topText">Top Text</label>
          <input type="text" id="topText" onClick={this.updateTopText} />

          <label htmlFor="bottomText">Bottom Text</label>
          <input type="text" id="bottomText" onClick={this.updateBottomText} />

          <label htmlFor="fontSize">Font Size</label>
          <select id="fontSize" onClick={this.updateFontSize}>
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId}>{each.displayText}</option>
            ))}
          </select>

          <button type="submit" data-testid="meme">
            Generate
          </button>
        </form>

        <div>
          <Container backgroundImage={imageUrl}>
            <Heading fontSize={fontSize}>{topText}</Heading>
            <Heading fontSize={fontSize}>{bottomText}</Heading>
          </Container>
        </div>
      </div>
    )
  }
}

export default MemeGenerator
