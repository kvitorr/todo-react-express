import React from 'react'
import { DesktopWrapper } from './styles'
import List from '../List'
import { ListButton } from '../ListButton'

const Desktop = () => {
  return (
    <DesktopWrapper>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <ListButton/>
    </DesktopWrapper>
  )
}

export default Desktop