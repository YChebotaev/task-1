import { styled, css } from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'

type LinkProps = {
  $active?: boolean
}

export const Root = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
`

export const Link = styled(BaseLink) <LinkProps>`
  color: black;
  text-align: center;
  text-decoration: none;
  width: 100%;
  border-bottom: 2px solid transparent;
  padding: 10px;

${({ $active }) => $active
    ? css`color: #007BFF;border-bottom-color: #007BFF;`
    : css`&:hover { border-bottom-color: #007BFF; }`}
`
