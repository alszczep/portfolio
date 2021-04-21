import React, { FC, RefCallback, useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { engData } from './data/lang/eng';
import { plData } from './data/lang/pl';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WAVES from 'vanta/dist/vanta.waves.min.js';
import { resizeHandler } from './modules/main-resize-handler';
import { calculateVantaOptions } from './modules/calculate-vanta-options';
import { VantaOptionsInterface } from './interfaces/VantaOptionsInterface';
import { useSwipeable } from 'react-swipeable';
import { swipeHandler } from './modules/swipe-handler';
import { AnimationsContextInterface } from './interfaces/AnimationsContextInterface';
import { LangContextInterface } from './interfaces/LangContextInterface';

export const LangContext = React.createContext({} as LangContextInterface);
export const AnimationsContext = React.createContext({} as AnimationsContextInterface);

const App: FC = (): JSX.Element => {
  const [vantaEffect, setVantaEffect] = useState<any>(0)
  const [animations, setAnimations] = useState(true);
  const [options, setOptions] = useState<VantaOptionsInterface>(calculateVantaOptions());
  const [lang, setLang] = useState<string>();
  const history = useHistory();
  const location = useLocation();
  const { ref } = useSwipeable({
    onSwipedLeft: swipeHandler(history, location),
    onSwipedRight: swipeHandler(history, location)
  }) as { ref: RefCallback<Document> };
  useEffect(() => {
    ref(document);
  });
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    if(localStorage.getItem('animations'))
      setAnimations(localStorage.getItem('animations') === 'true');
    else
      setAnimations(true);
    setOptions(calculateVantaOptions());
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
    <LangContext.Provider 
      value={
        {
          data: (lang === 'pl'? plData: engData), 
          lang: (lang? lang: 'eng')
        }
      }>
      <AnimationsContext.Provider 
        value={
          {
            animations: animations, 
            setAnimations: setAnimations
          }
        }>
          <Nav/>
          <Switch>
            <Route 
              path='/skills'>
              <Skills/>
            </Route>
            <Route 
              path='/projects'>
              <Projects/>
            </Route>
            <Route 
              path='/contact'>
              <Contact/>
            </Route>
            <Route 
              path='/'>
              <Home/>
            </Route>
          </Switch>
          <Footer 
            setLang={setLang} 
            setAnimations={setAnimations} 
            animations={animations}/>
      </AnimationsContext.Provider>
    </LangContext.Provider>
  );
}

export default App;
