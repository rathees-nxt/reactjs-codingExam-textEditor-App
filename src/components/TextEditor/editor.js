import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import './index.css'
import {BoldBtn, ItalicBtn, UnderlineBtn, TextArea} from './styled'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnder: false,
  }

  handleBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  handleItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  handleUnderline = () => {
    this.setState(prevState => ({isUnder: !prevState.isUnder}))
  }

  render() {
    const {isBold, isItalic, isUnder} = this.state
    console.log(isBold, isItalic, isUnder)
    const boldColor = isBold === true ? '#faff00' : '#f1f5f9'
    const italicColor = isItalic === true ? '#faff00' : '#f1f5f9'
    const underColor = isUnder === true ? '#faff00' : '#f1f5f9'
    const fontWeight = isBold === true ? 'bold' : 'normal'
    const fontStyle = isItalic === true ? 'italic' : 'normal'
    const textDecoration = isUnder === true ? 'underline' : 'normal'
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="img-container">
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="img"
            />
          </div>
          <div className="text-container">
            <ul className="btn-list-container">
              <li>
                <BoldBtn
                  type="button"
                  color={boldColor}
                  data-testid="bold"
                  onClick={this.handleBold}
                >
                  <VscBold size={35} />
                </BoldBtn>
              </li>
              <li>
                <ItalicBtn
                  type="button"
                  color={italicColor}
                  data-testid="italic"
                  onClick={this.handleItalic}
                >
                  <GoItalic size={35} />
                </ItalicBtn>
              </li>
              <li>
                <UnderlineBtn
                  type="button"
                  color={underColor}
                  data-testid="underline"
                  onClick={this.handleUnderline}
                >
                  <AiOutlineUnderline size={35} />
                </UnderlineBtn>
              </li>
            </ul>
            <TextArea
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            ></TextArea>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
