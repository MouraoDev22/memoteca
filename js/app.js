import './api.js';
import './ui.js';
import ui from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    await ui.renderizarPensamentos();
});