
// When mocking entire module using jest mock, you might get error for reference
// so declear mocks above import & then you can import & call jest mocks
const playSoundMock = jest.fn().mockImplementation(() => console.log('PLAY MOCK'));
const stopSoundMock = jest.fn().mockImplementation(() => console.log('STOP MOCK'));

import MediaPlayer from "../src/mediaPlayerFive";

jest.mock('../src/soundFactory', () => {
    return jest.fn().mockReturnValue({
        playSound: playSoundMock,
        stopSound: stopSoundMock
    })
});

let subject = new MediaPlayer();

describe('test functionality', () => {

    it('start media player',async () => {
        subject.start();
        expect(playSoundMock).toHaveBeenCalled();  
    });

    it('stop media player',async () => {
        subject.stop();
        expect(stopSoundMock).toHaveBeenCalled();  
    });
});