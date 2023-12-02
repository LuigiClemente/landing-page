'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { setGlobalStyles } from './components/VariablesCss'
const inter = Inter({ subsets: ['latin'] })
const colors = {
  '--color-dark-blue': '#111122',
  '--card-access-bg': '#4395EB',
  '--card-modeling-bg': '#7170F4',
  '--card-caching-bg': '#EB9845',
  '--card-api-bg': '#D83E74',
  '--card-modeling-gradient-1': '#7A77FF',
  '--card-modeling-gradient-2': '#5656BB',
  '--card-access-gradient-1': '#5DB4F3',
  '--card-access-gradient-2': '#3A6FBF',
  '--card-caching-gradient-1': '#FFB74A',
  '--card-caching-gradient-2': '#D2723C',
  '--card-api-gradient-1': '#F04779',
  '--card-api-gradient-2': '#BD336D',
  '--card-access-border': '#D5EDFE',
  '--card-caching-border': '#FFF9F0',
  '--card-api-border': '#FFC1D3',
  '--card-modeling-border': '#D3D2FF',
  "--foreground-rgb": "0, 0, 0",
  "--background-start-rgb": "214, 219, 220",
  "--background-end-rgb": "255, 255, 255",
  "--animation-first-color": "#e54377",
  "--animation-second-color": " red",
  "--color-blue": "#111122",
  "--color-skyblue": "#4395EB",
  "--color-purple": "#7170F4",
  "--color-orange": "#EB9845",
  "--color-pink": "#D83E74",
  "--color-gradient-purple-1": "#7A77FF",
  " --color-gradient-purple-2": "#5656BB",
  "--color-gradient-blue-1": "#5DB4F3",
  "--color-gradient-blue-2": "#3A6FBF",
  "--color-gradient-orange-1": "#FFB74A",
  "--color-gradient-orange-2": "#D2723C",
  "--color-gradient-pink-1": "#F04779",
  "--color-gradient-pink-2": "#BD336D",
  "--color-border-blue": "#D5EDFE",
  "--color-border-orange": "#FFF9F0",
  "--color-border-pink": "#FFC1D3",
  "--color-border-purple": "#D3D2FF",
}
export default function RootLayout({ children }) {

  
  /*  */

  React.useEffect(() => {
    if (colors) {
      Object.keys(colors).forEach(color => {
        document.documentElement.style.setProperty(
          `${color}`,
          colors[color]
        );
      });
    }
  }, []);

  return (
    <html lang="en">
      <Script id='javascript1' type="text/javascript" async="" src="./Superlist_files/js"></Script>
      <Script id='javascript2' async="" src="./Superlist_files/gtm.js.download"></Script>
      <Script
        id='javascript3'
        type="text/javascript">{`!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);`}</Script>
      <Script id='javascript4' async="" src="./Superlist_files/fs-cc.js.download" fs-cc-mode="opt-in"></Script>
      <Script id='javascript5' async="" src="./Superlist_files/cmscombine.js.download"></Script>
      <Script id='javascript6' type="text/javascript" src="./Superlist_files/lozad.min.js.download" async=""></Script>
      <Script id='javascript7' src="./Superlist_files/jquery-3.5.1.min.dc5e7f18c8.js.download" type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></Script>
      <Script id='javascript8' src="./Superlist_files/webflow.42a6ebbcb.js.download" type="text/javascript"></Script>
      <Script id='javascript9' type="text/javascript" src="./Superlist_files/emojibutton.js.download"></Script>
      <Script id='javascript10' src="./Superlist_files/superlist-old-script.js.download"></Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
