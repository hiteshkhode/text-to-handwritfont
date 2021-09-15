const jimp = require('jimp')
jimp.read('./testh.jpg').then((img) =>{
    img.greyscale().write('modified.jpg')
    for (let i = 0; i < 31329; i++) {
        if(img.bitmap.data[4*i] < 100) toColor = 0
        else toColor = 255
        for (let index = 0; index < 3; index++) {
            img.bitmap.data[4*i + index] = toColor;
        }
    }
    img.write('modifiedlikesvg.jpg')
})