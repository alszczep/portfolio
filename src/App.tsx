import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import { engData } from './data/lang/eng';
import { plData } from './data/lang/pl';
import WAVES from 'vanta/dist/vanta.waves.min.js';
import { isDesktop, isMobile } from "react-device-detect";
import { VantaOptionsInterface } from './interfaces/VantaOptionsInterface';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';

export const LangContext = React.createContext(engData);
export const AnimationsContext = React.createContext(true);

const calculateOptions = (): VantaOptionsInterface => {
  if(isMobile){
    if(document.getElementById('root')!.clientHeight > document.getElementById('root')!.clientWidth)
      return ({ zoom: 0.5, waveSpeed: 0.75, waveHeight: 10 });
    if(document.getElementById('root')!.clientHeight <= document.getElementById('root')!.clientWidth)
      return ({ zoom: 0.7, waveSpeed: 0.6, waveHeight: 9 })
  }else if(isDesktop){
    if(document.getElementById('root')!.clientHeight > document.getElementById('root')!.clientWidth)
      return ({ zoom: 0.6, waveSpeed: 0.5, waveHeight: 8 })
    if(document.getElementById('root')!.clientHeight <= document.getElementById('root')!.clientWidth)
      return ({ zoom: 0.7, waveSpeed: 0.5, waveHeight: 8 })
  }
  return ({ zoom: 0.7, waveSpeed: 0.5, waveHeight: 8 })
}

const App: FC = (): JSX.Element => {
  const [vantaEffect, setVantaEffect] = useState<any>(0)
  const [animations, setAnimations] = useState(true);
  const [options, setOptions] = useState<VantaOptionsInterface>(calculateOptions());
  const [lang, setLang] = useState<string>();
  useEffect(() => {
    if(localStorage.getItem('animations'))
      setAnimations(localStorage.getItem('animations') === 'true');
    else
      setAnimations(true);
    setOptions(calculateOptions());
    if(localStorage.getItem('lang'))
      setLang(localStorage.getItem('lang')!);
    else
      setLang('eng');
  }, [])
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: "body",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x60616,
        shininess: 5.00,
        waveHeight: options.waveHeight,
        waveSpeed: options.waveSpeed,
        zoom: options.zoom
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect, options])
  if(document.getElementsByClassName('vanta-canvas')[0]){
    vantaEffect.setOptions({...options, waveSpeed: (animations? options.waveSpeed: 0)});
  }
  useEffect(() => {
    if(lang)
      localStorage.setItem('lang', lang);
  }, [lang])
  useEffect(() => {
    localStorage.setItem('animations', animations.toString());
    let tempWaveSpeed = animations? options.waveSpeed: 0;
    if(document.getElementsByClassName('vanta-canvas')[0] && vantaEffect)
      vantaEffect.setOptions({waveSpeed: tempWaveSpeed});
  }, [animations, options.waveSpeed, vantaEffect])
  return (
    <LangContext.Provider value={lang === 'pl'? plData: engData}>
      <AnimationsContext.Provider value={animations}>
        <Router>
          <Nav/>
          <Switch>
            <Route path='/skills'>
              <Skills/>
            </Route>
            <Route path='/projects'>
              <Projects/>
            </Route>
            <Route path='/contact'>
              contact
            </Route>
            <Route path='/'>
              <MainPage/>
            </Route>
          </Switch>
          <Footer setLang={setLang} setAnimations={setAnimations} animations={animations}/>
        </Router>
      </AnimationsContext.Provider>
    </LangContext.Provider>
  );
}

export default App;
