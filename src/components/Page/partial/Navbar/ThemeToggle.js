import React, { Component, useEffect, useState } from 'react'
import { ReactComponent as Moon } from '../../../../img/moon.svg'
import { ReactComponent as Sun } from '../../../../img/sun.svg'

class ThemeToggle extends Component{
  constructor(props) {
    super(props)
    this.state = {theme: localStorage.getItem('theme') || 'dark'}
  }

  componentDidMount() {
    if(this.state.theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState !== this.state) {
      console.log(this.state.theme)
      if (this.state.theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light');
      }
    }
  }
  

  render() {
    return (
      <div className={`${this.state.theme === 'dark' ? 'bg-gradient-to-r from-gray-900 to-gray-800' : "bg-gradient-to-r from-gray-300 to-white"} cursor-pointer w-[3.5em] h-[33px] bg-white rounded-full relative border-[2px] border-gray-400 mr-[1em]`} 
      onClick={() => { 
        this.setState({theme: `${this.state.theme === 'dark' ? 'light' : 'dark'}`}, () => {
         
        })
      }}>
        <div className={`transition-all duration-300 ease-in-out absolute w-[25px] h-[25px] bg-gray-100 shadow-sm ${this.state.theme === 'dark' ? "top-[.15em] translate-x-[1.6em] shadow-black" : " shadow-gray-400 top-[.15em] translate-x-[.1em]"} rounded-full`}>
          <div className={`transition-all duration-300 ease-in-out absolute w-[23px] h-[23px] bg-gray-200 top-[.06em] left-[5%] rounded-full flex items-center justify-center`}>
            {this.state.theme === 'dark' ? <Moon className={`text-gray-800 scale-[.8]`}/> : <Sun className={`text-gray-500 scale-[.8]`}/>}
          </div>
        </div>
      </div>
    )
  }
}

export default ThemeToggle