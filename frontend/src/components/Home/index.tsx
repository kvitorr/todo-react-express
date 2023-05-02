import React from 'react'
import { Task } from './Task'
import List from './List'
import Desktop from './Desktop'
import { ListButton } from './ListButton'
import { Header } from './Header'
import { HomeWrapper } from './styles'

const Home = () => {
  return (
    <HomeWrapper>
      <Header/>
      <Desktop/>
    </HomeWrapper>
  )
}

export default Home