import styled from 'styled-components'

export const BoldBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`

export const ItalicBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`

export const UnderlineBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const TextArea = styled.textarea`
  width: 100%;
  background: transparent;
  height: 80%;
  border: none;
  outline: none;
  font-size: 18px;
  color: #f1f5f9;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`
