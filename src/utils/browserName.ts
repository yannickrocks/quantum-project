import { detect } from 'detect-browser';

export const browser = detect();

export const isIE = browser && browser.name === 'ie';

export const isEdge = browser && browser.name === 'edge';
