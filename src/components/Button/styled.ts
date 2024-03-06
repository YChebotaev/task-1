import { styled } from 'styled-components'
import { type ButtonColor } from './Button'

type RootProps = {
  $color: ButtonColor
}

export const Root = styled.button<RootProps>`
 background-color: ${({ $color }) => $color === 'green' ? '#4CAF50' : '#f44336'};
 border: none;
 color: white;
 padding: 15px 32px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 4px 2px;
 cursor: pointer;
 border-radius: 12px;
 transition-duration: 0.4s;

 &:hover {
    background-color: ${({ $color }) => $color === 'green' ? '#45a049' : '#da190b'};
 }
`
