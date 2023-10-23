import sound from './sound'


// you can't mock this if its decleared as a function 
// export function getSoundInstance (){
//     return new sound()
// }

// always use const if outside class
export const getSoundInstance = () =>{
  return new sound()
}

export default class MediaPlayer {
  start() {
    console.log('Play Sound')
    getSoundInstance().playSound()
  }

  stop() {
    console.log('Stop Sound')
    getSoundInstance().stopSound()
  }
}

