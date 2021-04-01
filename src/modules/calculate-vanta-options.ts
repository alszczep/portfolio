import { VantaOptionsInterface } from './../interfaces/VantaOptionsInterface';
import { isDesktop } from 'react-device-detect';
import { isMobile } from 'react-device-detect';

export const calculateVantaOptions = (): VantaOptionsInterface => {
    if(isMobile){
        if(document.getElementById('root')!.clientHeight > document.getElementById('root')!.clientWidth)
            return ({ zoom: 0.6, waveSpeed: 0.80, waveHeight: 10 })
        if(document.getElementById('root')!.clientHeight <= document.getElementById('root')!.clientWidth)
            return ({ zoom: 0.7, waveSpeed: 0.80, waveHeight: 10 })
    }else if(isDesktop){
        if(document.getElementById('root')!.clientHeight > document.getElementById('root')!.clientWidth)
            return ({ zoom: 0.6, waveSpeed: 0.5, waveHeight: 8 })
        if (document.getElementById('root')!.clientHeight <= document.getElementById('root')!.clientWidth)
            return ({ zoom: 0.7, waveSpeed: 0.5, waveHeight: 8 })
    }
    return ({ zoom: 0.7, waveSpeed: 0.5, waveHeight: 8 })
}