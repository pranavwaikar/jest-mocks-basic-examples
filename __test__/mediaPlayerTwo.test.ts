import MediaPlayer from "../src/mediaPlayerTwo";;
import sound from '../src/sound';

const playsoundmock = jest.fn().mockImplementation(() => console.log('PLAY MOCK'));
const stopSoundMock = jest.fn().mockImplementation(() => console.log('STOP MOCK'));


jest.mock('../src/sound', () => {
    return jest.fn().mockImplementation(() => {
        return {
            playSound: playsoundmock,
            stopSound: stopSoundMock
        };
    });
});

let subject = new MediaPlayer();

describe('test functionality', () => {

    it('start media player',async () => {
        subject.start();
        expect(playsoundmock).toHaveBeenCalled();  
    });

    it('stop media player',async () => {
        subject.stop();
        expect(stopSoundMock).toHaveBeenCalled();  
    });
});