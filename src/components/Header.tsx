import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.white};
  color: ${transparentize(0.5, colors.white)};
  border-bottom: 1px solid #eae8e8;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  position:relative;
`

const HomepageLink = styled(Link)`
  color: #241bba;
  font-size: 1.5rem;
  font-weight: 700;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const MenuContainer = styled.div`
    float: right;
    position: absolute;
    right: 0;
    top: 18px;
`
const ParentMenu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ChildList = styled.li`
    margin-left: 15px;
    margin-right: 15px;
`

const LinkTo = styled.a`
    text-decoration: none;
    color: #000;
    font-weight: 600;
    text-decoration: none !important;
    font-size: 17px;
    &:hover {
    color: #241bba;
    text-decoration: none;
    border-top: 2px solid;}
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
        <MenuContainer>
          <ParentMenu>
            <ChildList><LinkTo href="/">Home</LinkTo></ChildList>
            <ChildList><LinkTo href="/about">About</LinkTo></ChildList>
            <ChildList><LinkTo href="/services">Services</LinkTo></ChildList>
            <ChildList><LinkTo href="/contact">Contact</LinkTo></ChildList>
          </ParentMenu>
        </MenuContainer>
    </HeaderInner>
  </StyledHeader>
)

export default Header
