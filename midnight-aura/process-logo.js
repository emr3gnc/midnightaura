const { Jimp } = require('jimp');

async function processLogo() {
  try {
    const image = await Jimp.read('public/logo.png');
    
    // Iterate through all pixels
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is very dark (close to black), make it transparent
      if (red < 20 && green < 20 && blue < 20) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0
      } else if (red < 40 && green < 40 && blue < 40) {
        // Soft edge
        this.bitmap.data[idx + 3] = 100;
      }
    });

    await image.write('public/logo-transparent.png');
    console.log('Processed logo successfully.');
  } catch (err) {
    console.error(err);
  }
}

processLogo();
