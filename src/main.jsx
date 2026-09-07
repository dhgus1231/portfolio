import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppMuji from './AppMuji.jsx'

// ?muji 로 열면 무인양품 지원용 구성으로 렌더한다. 기본 포트폴리오는 그대로.
const isMuji = new URLSearchParams(window.location.search).has('muji')
const Root = isMuji ? AppMuji : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
