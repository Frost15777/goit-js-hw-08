import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const storage = window.localStorage;
const storageKey = "videoplayer-current-time";

const saveCurrentTime = throttle((currentTime) => {
    storage.setItem(storageKey, currentTime);
}, 1000)

player.on('timeupdate', (data) => {
    const currentTime = data.seconds;
    saveCurrentTime(currentTime)
});

const savedTime = storage.getItem(storageKey);
if (savedTime) {
    player.setCurrentTime(savedTime);
}