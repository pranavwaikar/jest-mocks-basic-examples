export const loadFiles = () => {
  console.log('loadFiles')
}

export const unloadFiles = () => {
  console.log('unloadFiles')
}

export default class Sound {
  playSound() {
    loadFiles()
    console.log('Play Sound in sound class')
  }

  stopSound() {
    console.log('Stop Sound in sound class')
    unloadFiles()
  }
}

export const soundSingleton = new Sound()
