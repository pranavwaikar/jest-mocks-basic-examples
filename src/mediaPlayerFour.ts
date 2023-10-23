import sound from './sound'


export default class MediaPlayer {
    // Mock this method
  getSoundObject() {
    return new sound()
  }
  start() {
    console.log('Play Sound')
    this.getSoundObject().playSound()
  }

  stop() {
    console.log('Stop Sound')
    this.getSoundObject().stopSound()
  }
}
