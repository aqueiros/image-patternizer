const nodeHtmlToImage = require('node-html-to-image')
var argv = require('minimist')(process.argv.slice(2));
var generatorFuncs = require('./app/generatorFunctions')
const { createCanvas, loadImage } = require('canvas')
const fs = require('fs')

const {lines, boxes, characters, radial} = generatorFuncs

function getDoodleContainer(){
    let r = Math.random()
    let generator;
    if (r > .8){
      generator = radial
    } else if(r > .6){
      generator = lines
    } else if(r > .3){
      generator = boxes
    } else{
      generator = characters
    }
    return `<css-doodle>
              ${generator()}
            </css-doodle>`
}

async function loadAndProcessMyLocalImage(amount, image) {
  var patternOutputDir = './output/patterns';
  var finalOutputDir = './output/final';

  if (!fs.existsSync(patternOutputDir)){
    await fs.mkdirSync(patternOutputDir, { recursive: true });
  }

  if (!fs.existsSync(finalOutputDir)){
    await fs.mkdirSync(finalOutputDir, { recursive: true });
  }

  const localImage = await loadImage(image);
  const canvas = createCanvas(localImage.width, localImage.height)
  const context = canvas.getContext('2d')
  context.drawImage(localImage, 0, 0);
  context.globalCompositeOperation = 'source-in';

  console.log("Starting pattern generation...")
  for(var i=1;i<=amount;i++){
    console.log(`........Generating pattern ${i}`)
    await nodeHtmlToImage({
        output: `./output/patterns/pattern_${i}.png`,
        html: `<html>
        <head>
          <meta charset="utf-8" />
          <title>Simple Image</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/css-doodle/0.23.0/css-doodle.min.js"></script>
          <style>
            html,
            body {
              height: ${localImage.height}px;
              width: ${localImage.width}px;
            }
          </style>
        </head>
        <body>
          ${getDoodleContainer()}
        </body>
      </html>`
      });
    console.log(`........Applying pattern ${i} to source image...`)

    await loadImage(`${patternOutputDir}/pattern_${i}.png`).then(finalImage => {
      context.drawImage(finalImage, 0, 0);
      const buffer = canvas.toBuffer('image/png');
      fs.writeFileSync(`${finalOutputDir}/final_image_${i}.png`, buffer);
      console.log(`.....................................................Generated final_image_${i}.png`)

    });
  }
  console.log('FINISHED')
}

loadAndProcessMyLocalImage(argv._[0], argv._[1]);

