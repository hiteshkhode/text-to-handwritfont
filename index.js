const jimp = require('jimp')
jimp.read('./testh.jpg').then((image) =>{
    img = image.clone()
    img.greyscale().write('modified.jpg')
    for (let i = 0; i < 31329; i++) {
        if(img.bitmap.data[4*i] < 100) toColor = 0
        else toColor = 255
        for (let index = 0; index < 3; index++) {
            img.bitmap.data[4*i + index] = toColor;
        }
    }
    for (let i = 0; i < 31329; i++) {
        if(img.bitmap.data[4*i] < 100){
            upperthreshold = i/177
            // img.crop(0, upperthreshold - 1, 177, 177 - i%177)
            break
        }
    }
    
    for (let i = 31329; i > 0; i--) {
        if(img.bitmap.data[4*i - 2] < 100){
            lowerthreshold = i/177
            // img.crop(0, 0, 177, 177 - i%177)
            break
        }
    }
    // console.log(img.bitmap.data)
    // for (let i = 0; i < img.bitmap.width; i++) {
    //     for (let j = 0; j < img.bitmap.height; j++) {
    //         // console.log(img.bitmap.data[j*img.bitmap.width + i - 1])
    //         if(img.bitmap.data[j*img.bitmap.width + i + 2] == 0){
    //             leftthreshold = i*177
    //             break;
    //         }
    //     }
    // }
    

    img.crop(0, upperthreshold, 177, lowerthreshold - upperthreshold + 1)
    img.rotate(90)
    // for (let i = 0; i < img.bitmap.height*img.bitmap.width; i++) {
    //     if(img.bitmap.data[4*i] < 100){
    //         upperthreshold = i/img.bitmap.width
    //         // img.crop(0, upperthreshold - 1, 177, 177 - i%177)
    //         break
    //     }
    // }
    
    // for (let i = img.bitmap.height*img.bitmap.width; i > 0; i--) {
    //     if(img.bitmap.data[4*i - 2] < 100){
    //         lowerthreshold = i/img.bitmap.width
    //         // img.crop(0, 0, 177, 177 - i%177)
    //         break
    //     }
    // }
    // img.crop(0, upperthreshold, 177, lowerthreshold - upperthreshold + 1)
    img.write('modifiedlikesvg.jpg')

})

