import electron from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const { app, BrowserWindow } = electron;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    icon: path.join(__dirname, 'public', 'favicon.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  win.loadFile(path.join(__dirname, 'frontend/dist/index.html'));
}

app.whenReady().then(createWindow);
