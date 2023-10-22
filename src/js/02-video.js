import Vimeo from '@vimeo/player';
import throttle from 'lodash/throttle';

function saveTimeToLocalStorage(time) {
  try {
    localStorage.setItem('videoplayer-current-time', time);
  } catch (error) {
    console.error('Failed to save data to localStorage:', error);
  }
}

function getTimeFromLocalStorage() {
  try {
    return parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;
  } catch (error) {
    console.error('Failed to retrieve data from localStorage:', error);
    return 0;
  }
}

const player = new Vimeo('vimeo-player');

player.setCurrentTime(getTimeFromLocalStorage());

player.on(
  'timeupdate',
  throttle(event => {
    const currentTime = event.seconds;
    saveTimeToLocalStorage(currentTime);
  }, 1000)
);
