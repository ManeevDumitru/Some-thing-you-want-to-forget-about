for (i = 0; i < 100; i++) {
    document.write("<font color='red'> ",i++,'</font> ');
    document.write('<font color="green"> ',100-i,'</font>');
}
for (i = 0;i < 99; i += 2) {
    console.log('\x1b[31m', i);
    console.log('\x1b[32m', 100- i -1)
}