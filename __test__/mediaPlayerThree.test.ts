import MediaPlayer from "../src/mediaPlayerThree";
import * as MediaPlayerComponent from "../src/mediaPlayerThree";

let subject = new MediaPlayer();

describe('test functionality', () => {

    it('start media player',async () => {
        // @ts-ignore
        const trymock = jest.spyOn(MediaPlayerComponent, 'getSoundInstance');
        subject.start();
        expect(trymock).toHaveBeenCalled();  
    });

    it('stop media player',async () => {
        jest.spyOn(MediaPlayerComponent, 'getSoundInstance');
        subject.stop();
        expect(MediaPlayerComponent.getSoundInstance).toBeCalledTimes(2);  
    });
});