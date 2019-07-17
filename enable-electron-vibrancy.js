w = nodeRequire('electron').remote.getCurrentWindow();
w.setBackgroundColor('#00000000');
// you should change the blur style if you like
// light，ultra-light, dark, ultra-dark
w.setVibrancy('ultra-dark');
const width = w.getBounds().width;
w.setBounds({
    width: width + 1,
});
w.setBounds({
    width,
});
