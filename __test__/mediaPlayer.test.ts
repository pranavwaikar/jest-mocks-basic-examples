import MediaPlayer from "../src/mediaPlayer";;
import sound from '../src/sound';

let subject = new MediaPlayer();

describe('test functionality', () => {

    it('start media player',async () => {
        const trymock = jest.spyOn(sound.prototype, 'playSound').mockImplementation(() => console.log('GOT MOCKED'));
        subject.start();
        expect(trymock).toHaveBeenCalled();  
    });

    it('stop media player',async () => {
        const trymock = jest.spyOn(sound.prototype, 'stopSound').mockImplementation(() => console.log('GOT MOCKED again'));
        subject.stop();
        expect(trymock).toHaveBeenCalled();  
    });
});