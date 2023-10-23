import sound from './sound'

const soundInstance = new sound();

export default class MediaPlayer {
    // mock playSound function
  start() {
    console.log('Play Sound')
    soundInstance.playSound()
  }

    // mock stopSound function
  stop() {
    console.log('Stop Sound')
    soundInstance.stopSound()
  }
}
