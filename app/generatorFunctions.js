var utilFuncs = require('./utilityFunctions');
var paletteFuncs = require('./paletteFunctions');
var tinycolor = require("tinycolor2");
var characterSets = require('./characterSets');

const {getRandomIntInclusive, getRandomStops, randomSlice, flatten, pick, randomPicks} = utilFuncs
const {bigPalette, getPalette, getRandomColor} = paletteFuncs

const blendModes = ["normal", "color-burn", "difference", "multiply", "exclusion", "soft-light", "hard-light"]
const positions = {
    all: ["0 100%", "0 0", "100% 100%", "100% 0", "50% 50%", "50% 0", "0 50%", "100% 50%", "50% 100%"],
    diamond: ["50% 0", "0 50%", "100% 50%", "50%, 100%"],
    diamondAndOne: ["50% 50%", "50% 0", "0 50%", "100% 50%", "50% 100%"],
    perimeter: ["0 100%", "0 0", "100% 100%", "100% 0"],
    perimeterAndOne: ["0 100%", "0 0", "100% 100%", "100% 0", "50% 50%"],
    triangle: ["0 0", "0 100%", "100% 100%"]
}


function lines(){
    //layout
    let gridSize = getRandomIntInclusive(5, 50)
    let density = getRandomIntInclusive(1, 25)
    let coverageFactor = Math.random() > .5 ? 1 : getRandomIntInclusive(1, Math.floor(density * .95))
    let gradAngle = Math.random() > .8 ? getRandomIntInclusive(1, 3) : getRandomIntInclusive(5, 175)
    let canvasAngle = getRandomIntInclusive(0, 45)
    //colors
    let colorFunc = Math.random() > .5 ? "@pd" : "@pn"
    let paletteMultiplier = getRandomIntInclusive(1, 20)
    let bigPal = bigPalette(paletteMultiplier)

    return `:doodle {
    @grid:1x${gridSize} / 100%;
        background-color:${tinycolor.random().toHexString()};
    }
    :container {
        transform: rotate(@p(${canvasAngle}deg,-${canvasAngle}deg)) scale(2); 
        will-change: transform; 
        mix-blend-mode:${Math.random()>.5?pick(blendModes):"normal"};
    }
    background-image: repeating-linear-gradient( @pd(${gradAngle}deg, -${gradAngle}deg), @multi(@calc(@size()), ( ${colorFunc}(${bigPal}) calc(@n() *  100% / (@size() * ${density})), @lp() calc((@n() + ${coverageFactor}) * 100% / (@size() * ${density})) )) );
    `
}

function boxes() {
    //layout
    let gridSize = getRandomIntInclusive(5, 50)
    let canvasAngle = Math.random() > .5 ? getRandomIntInclusive(0, 45) : 0
    let scale = canvasAngle == 0 ? 1 : 2
    let positionFunc = Math.random() > .5 ? "@pd" : "@p"
    let cr = Math.random()
    let myPositions = pick(Object.values(positions))
    let startingPositions = cr > .75 ? `${positionFunc}(${myPositions})` : cr > .45 ? pick(myPositions) : "50% 50%"
    let myStops = getRandomStops(5,Math.random()>.5,Math.random()>.5).map(stop => {
        return stop + "%"
    })
    
    //colors, overlay, blend mode, border-radius
    cr = Math.random()
    let colorFunc = cr > .66 ? "@p" : cr > .33 ? "@pd" : "@pn"
    let scaleAndOverlay = ""
    let boxBlends = blendModes.filter(bm => {
        return bm != "normal"
    })
    if (Math.random() > .33) {
        let borderRadius = (colorFunc != "@p" && positionFunc != "@p" && Math.random() > .5) ? "50%" : 0
        scaleAndOverlay = `@size:150%; mix-blend-mode: ${pick(boxBlends)};border-radius:${borderRadius};`
        scale = 2
    }

    return `:doodle {
            @grid:${gridSize} / 100%;
            background-color:${tinycolor.random().toHexString()};
        }
        --startPos: ${startingPositions};      
        :container { will-change: transform; transform: scale(${scale}) rotate(${canvasAngle}deg);}
        ${scaleAndOverlay};            
        background: @multi(5, ( linear-gradient( ${colorFunc}(${getPalette()}), @lp() ) var(--startPos) / @pn(${myStops}) @lp() no-repeat ));`
}


function characters() {
    let set = flatten(pick(characterSets)) 
    let pr = Math.random()
    let picker = pr > .66 ? "@p" : pr > .33 ? "@pd" : "@pn"
    if (Math.random() > .5) {
        let num = getRandomIntInclusive(1, 4)
        set = Math.random() > .5 ? randomPicks(set, num) : randomSlice(set, num)
    }
    let codeSelector = `\\@hex(${picker}(${set}))`
    let r = Math.random()
    let rotation = r > .75 ? "@p(0, 45deg, -45deg, 90deg, -90deg, 180deg)" : r > .5 ? "@pd(45deg,-45deg)" : r > .25 ? (Math.random() > .5 ? "45deg" : "-45deg") : 0
    let blendModePicker = Math.random() > .5 ? "@p" : "@pd"
    r = Math.random()
    let myBlends = r > .66 ? randomSlice(blendModes) : r > .33 ? randomPicks(blendModes) : blendModes
    let mixBlendMode = Math.random() > .5 ? `${blendModePicker}(${myBlends})` : pick(blendModes)
    let fontSize = Math.random > .5 ? "@r(2vmax, 5vmax)" : `${getRandomIntInclusive(2,5)}vmax`
    let scale = Math.random > .5 ? "@r(.3, 2)" : getRandomIntInclusive(.3, 2)
    let skew = Math.random() > .75 ? getRandomIntInclusive(-20, 20) : 0
    let pal = Math.random() > .5 ? getPalette() : bigPalette(getRandomIntInclusive(2, 5))

    return `:doodle {
        @grid: ${getRandomIntInclusive(10, 50)} / 100%;
        background-color: ${tinycolor.random().toHexString()};
        font-size:${fontSize};   
    }
    mix-blend-mode: ${mixBlendMode};
    :after {
        content:${codeSelector};
        color: ${Math.random() > .5 ? "@p" : "@pd"}(${pal});
        transform: skew(${skew}deg) scale(${scale}) rotate(${rotation});
    }`
}


function radial() {

    let seed = getRandomColor()
    let rotation = getRandomIntInclusive(10, 180)
    let palFunc = pick(paletteFuncs)
    let firstStops = getColorStops(bigPalette(getRandomIntInclusive(1, 5), seed.clone(), palFunc))
    let otherStops = getColorStops(bigPalette(getRandomIntInclusive(1, 2), seed.clone().spin(rotation), palFunc))
    let size1 = getRandomIntInclusive(2, 75)
    let sr = Math.random()
    let size2 = size1 * (sr > .66 ? 3 : sr > .33 ? 2 : .5)
    return `:doodle {
         @grid:1 / 100%;             
        }
        :container {
            background-color:${tinycolor.random().toHexString()};
            background-blend-mode:${pick(blendModes)};
            background-image: 
                ${Math.random() > .5 ? "radial-gradient" : "repeating-radial-gradient"}(${firstStops}),
                ${Math.random() > .5 ? "radial-gradient" : "repeating-radial-gradient"}(${otherStops});                
            background-size: ${size1}px ${size1}px, ${size2}px ${size2}px;
        }
        `
    function getColorStops(pal) {

        let stopFuncs = [getStripesWithTransparencyAllSharpTransitions, getStripesWithTransparencyOneSharpTransition, getStripesNoSharpTransitions]
        let stops = getRandomStops(getRandomIntInclusive(3, 15), Math.random()>.5, Math.random()>.5)
        let colorStops = pick(stopFuncs)(stops, pal)
        colorStops = colorStops.match(/.*?(?=, $|$)/)[0]
        return colorStops

        /*string generators*/
        function getStripesNoSharpTransitions(stops, pal) {
            let colorStops = ""
            for (let i = 0; i < stops.length; i++) {
                colorStops += `${pal[i%pal.length]}  ${stops[i]}%, `
            }
            return colorStops
        }
        function getStripesWithTransparencyOneSharpTransition(stops, pal) {
            let colorStops = ""
            for (let i = 0; i < stops.length - 2; i = i + 3) {
                colorStops += `${pal[i%pal.length]}  ${stops[i]}%, ${pal[i%pal.length]} ${stops[i+1]}%, transparent ${stops[i+1]+1}%, transparent ${stops[i+2]}%, `
            }
            return colorStops
        }
        function getStripesWithTransparencyAllSharpTransitions(stops, pal) {
            let colorStops = ""
            for (let i = 0; i < stops.length - 2; i = i + 2) {
                let color = pal[i % pal.length]
                if (i == 0) {
                    colorStops += `${color} ${stops[i]}%, ${color} ${stops[i+1]}%, transparent ${stops[i+1]+1}%, transparent ${stops[i+2]}%, `
                } else {
                    colorStops += `${color} ${stops[i]+1}%, ${color} ${stops[i+1]}%, transparent ${stops[i+1]+1}%, transparent ${stops[i+2]}%, `
                }
            }
            return colorStops
        }

    }
}


module.exports = {
    lines: lines,
    boxes: boxes,
    characters: characters,
    radial:  radial,
};
