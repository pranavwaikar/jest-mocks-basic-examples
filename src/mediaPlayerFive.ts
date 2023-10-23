import soundFactory from './soundFactory'

// mock the imported soundFactory function

export default class MediaPlayer {
  start() {
    console.log('Play Sound')
    soundFactory().playSound()
  }

  stop() {
    console.log('Stop Sound')
    soundFactory().stopSound()
  }
}
