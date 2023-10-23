import MediaPlayer from "../src/mediaPlayerFour";
import sound from "../src/sound";
jest.mock('../src/sound');
let subject = new MediaPlayer();


describe('test functionality', () => {

    it('start media player',async () => {
        subject.getSoundObject = jest.fn().mockImplementation(() => {
            return {
                playSound: jest.fn()
            }
        });
        subject.start();
        expect(subject.getSoundObject).toHaveBeenCalled();  
    });

    it('stop media player',async () => {
        subject.getSoundObject = jest.fn().mockImplementation(() => {
            return {
                stopSound: jest.fn()
            }
        });
        subject.stop();
        expect(subject.getSoundObject).toHaveBeenCalled();  
    });
});