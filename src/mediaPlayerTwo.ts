import sound from './sound'

// if something is not exported means you cant mock that function
const getSound = () => {
  return new sound()
};

// In this case you can mock the imported module ie sound class

export default class MediaPlayer {
  start() {
    console.log('Play Sound')
    getSound().playSound()
  }

  stop() {
    console.log('Stop Sound')
    getSound().stopSound()
  }
}
