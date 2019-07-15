w = nodeRequire('electron').remote.getCurrentWindow();
w.setBackgroundColor('#00000000');
w.setVibrancy('ultra-dark');
const width = w.getBounds().width;
w.setBounds({
    width: width + 1,
});
w.setBounds({
    width,
});