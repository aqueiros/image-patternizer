# Image Patternizer
## Randomly generate and apply patterns to an image

This node script uses [css-doodle](https://css-doodle.com/) and [html-to-image](https://github.com/bubkoo/html-to-image#readme) to apply a randomly generated pattern to an image.

### Requirements
- Node >= 12.16.2

### Installation

```npm install```

### Usage

```node generateImages.js <number_of_images_to_generate> <path_to_image>```

#### Example:
```node generateImages.js 5 ./examples/ghost.png```

This script will generate and `output` folder with the generated `patters` and the `final` resulting images

input | pattern | final 
--- | --- | --- | 
| <img src="https://user-images.githubusercontent.com/12710413/149628553-106155ef-cf65-4e8e-bf1d-aabd03131f45.png" width="66" height="89" />  | <img src="https://user-images.githubusercontent.com/12710413/149628577-01fb5d98-02f5-4c89-a1f2-bb4c17ec73df.png" width="66" height="89" /> | <img src="https://user-images.githubusercontent.com/12710413/149628597-154351db-27b7-49b5-a7fa-07b4bc2b870d.png" width="66" height="89" />

### How to extend:

If you want to add even more randomness to the generator, you can. Simply:
- Create your new function in ./app/generatorFunctions.js
- Make sure your function returns a string with a valid css-doodle syntax
- Export your function in the end of the file
- Import it in the main generateImages.js file like this:
  ```const {lines, boxes, characters, radial, myNewFunction} = generatorFuncs```
- Add it to the function randomization function `getDoodleContainer()` inside  generateImages.js

