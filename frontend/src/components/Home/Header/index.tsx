import React from 'react'
import { HeaderWrapper } from './style'

export const Header = () => {
  return (
    <HeaderWrapper>
        <h2>Tasks</h2>

        <div className='profile'>
            <p>Vitor Araujo</p>
            <div>
                <img src="../../assets/react.svg" alt="foto do vitor" />
            </div>
        </div>

    </HeaderWrapper>
  )
}
