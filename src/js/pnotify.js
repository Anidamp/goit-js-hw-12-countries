import { info, error } from '../../node_modules/@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';

defaults.maxTextHeight = null;
defaults.sticker = false;
defaults.stickerHover = false;
defaults.delay = 2000;

export function showError(length) {
  if (length > 10) {
    error({
      text: `Too many matches found.
      Please enter a more specific query!`,
    });
  }
}

export function showCatchError(searchQuery) {
  if (searchQuery !== ''.trim()) {
    info({
      text: `No matches found.
      Please enter the correct name!`,
    });
  }
}
