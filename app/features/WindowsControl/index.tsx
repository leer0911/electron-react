import * as React from 'react';
import { ipcRenderer } from 'electron';
import { platform } from 'os';
import { WindowsControls } from 'react-windows-controls';

export default function WindowsControl() {
  if (platform() === 'darwin') {
    return null;
  }
  const onCloseClick = () => ipcRenderer.send('window-close');

  const onMaximizeClick = () => ipcRenderer.send('window-toggle-maximize');

  const onMinimizeClick = () => ipcRenderer.send('window-minimize');

  return (
    <WindowsControls
      style={{ height: '100%', WebkitAppRegion: 'no-drag' }}
      onClose={onCloseClick}
      onMinimize={onMinimizeClick}
      onMaximize={onMaximizeClick}
    />
  );
}
