const characterSets = [
    {  key: "Geometric Shapes",  min: 9632,  max: 9727  },
    {  key: "Musical Symbols",  min: 119040,  max: 119295  },
    {  key: "Arrows",  min: 8592,  max: 8703  },
    {  key: "Braille Patterns",  min: 10240,  max: 10495  },
    {  key: "Alchemical Symbols",  min: 128768,  max: 128895  },
    {  key: "Math Operators",  min: 8704,  max: 8959  },
    {  key: "Dingbats",  min: 9984,  max: 10175  },
    {  key: "Ornamental Dingbats",  min: 128592,  max: 128639  },
    {  key: "Box Drawing",  min: 9472,  max: 9599  },
    {  key: "Misc Math Symbols-A",  min: 10176,  max: 10223  },
    {  key: "Misc Math Symbols-B",  min: 10624,  max: 10751  },
    {  key: "Block Elements",  min: 9600,  max: 9631  },
    {  key: "Yijing Hexagram Symbols",  min: 19904,  max: 19967  },
    {  key: "Supplemental Arrows-A",  min: 10224,  max: 10239  },
    {  key: "Supplemental Arrows-B",  min: 10496,  max: 10623  },
    {  key: "Supplemental Math Operators",  min: 10752,  max: 11007  },
    {  key: "Egyptian Hieroglyphs",  min: 77824,  max: 78895  },
    {  key: "General Punctuation",  min: 8192,  max: 8303  },
    {  key: "Halfwidth and Fullwidth Forms",  min: 65280,  max: 65519  },
    {  key: "CJK Symbols and Punctuation",  min: 12288,  max: 12351  },
    {  key: "Mahjong Tiles",  min: 126976,  max: 127023  },
    {  key: "Domino Tiles",  min: 127024,  max: 127135  },
    {  key: "Playing Cards",  min: 127136,  max: 127231  },
    {  key: "Emoticons",  min: 0x1F600,  max: 0x1F64F  },
    {  key: "Misc Symbols and Pictographs",  min: 127744,  max: 128511  },
    {  key: "Misc Symbols",  min: 9728,  max: 9983  },
    {  key: "Transport and Map Symbols",  min: 128640,  max: 128767  },
    {  key: "Arabic",  min: 1536,  max: 1791  },
    {  key: "Cyrillic",  min: 1024,  max: 1279  },
    {  key: "Latin Extended Additional",  min: 7680,  max: 7935  },
    {  key: "Enclosed Alphanumerics",  min: 9312,  max: 9471  },
    {  key: "Greek and Coptic",  min: 880,  max: 1023  },
    {  key: "Hangul Compatibility Jamo",  min: 12592,  max: 12687  },
    {  key: "Modifier Tone Letters",  min: 42752,  max: 42783  },
    {  key: "Number Forms",  min: 8528,  max: 8591  },
    {  key: "Phonetic Extensions",  min: 7424,  max: 7551  },
    {  key: "Spacing Modifier Letters",  min: 688,  max: 767  },
    {  key: "Supplemental Punctuation",  min: 11776,  max: 0x2E42 /*truncated*/  },
    {  key: "Vertical Forms",  min: 65040,  max: 0xFE19 /*truncated*/  },
    {  key: "Combining Diacritical Marks",  min: 768,  max: 879  },
    {  
       key: "Emoticons+",  
       ranges: [
           {  min: 0X26F9,  max: 0x26F9  }, /*misc symbols - baller*/  
           {  min: 0X26C4,  max: 0x26C4  }, /*snowman */  
           {  min: 0X1F31A,  max: 0x1F31D  },
           {  min: 0X1F383,  max: 0x1F383  },
           {  min: 0X1F385,  max: 0x1F385  },
           {  min: 0X1F3C2,  max: 0x1F3C4  },
           {  min: 0X1F3CA,  max: 0X1F3CC  },
           {  min: 0x1F440,  max: 0x1F440  },
           {  min: 0x1F464,  max: 0x1F483  },
           {  min: 0x1F486,  max: 0x1F487  },
           {  min: 0X1F48F,  max: 0X1F48F  }, /*couple closed eyes*/  
           {  min: 0X1F491,  max: 0X1F491  }, /*couple open eyes*/  
           {  min: 0X1F4A9,  max: 0X1F4A9  }, /*poo*/  
           {  min: 0X1F574,  max: 0X1F575  },
           {  min: 0X1F5FF,  max: 0X1F5FF  }, /*stonehenge*/  
           {  min: 0X1F600,  max: 0x1F64F  }, /*emoticons*/  
           {  min: 0X1F6B4,  max: 0X1F6B6  }, /*transport - bikers*/  
           {  min: 0X1F6F8,  max: 0X1F6F8  }, /*ufo guy*/ 
           {  min: 0X1F910,  max: 0x1F917  }, /* suppl-pictographs zipper - somehappyguy */
           {  min: 0X1F920,  max: 0x1F93E  }, /* cowboy - dunker*/
           {  min: 0X1F970,  max: 0x1F970  },
           {  min: 0X1F973,  max: 0x1F976  }, /*reveler - frozen*/  
           {  min: 0X1F97A,  max: 0x1F97A  }, /*scared sad face*/
           {  min: 0X1F9B0,  max: 0x1F9B3  },
           {  min: 0X1F9B8,  max: 0x1F9B9  }, /*hero girls*/  
           {  min: 0X1F9D0,  max: 0x1F9DF  }, /*monocle - zombie*/  
           {  min: 0X1F9F8,  max: 0x1F9F8  }, /*teddy bear*/  
           {  min: 0x1F400,  max: 0x1F43C  }, /*minus the pig nose*/ 
           {  min: 0x1F980,  max: 0x1F9A2  }, /*crab-swan*/  ]  
   },
    {  
        key: "Animals",  
        ranges: [
           {  min: 0x1F400,  max: 0x1F43D  },
           {  min: 0x1F577,  max: 0x1F577  },
           {  min: 0x1F638,  max: 0x1F640  },
           {  min: 0x1F648,  max: 0x1F64A  },
           {  min: 0x1F980,  max: 0x1F9A2  }, /*crab-swan*/  ]  },
    {  
        key: "Hands",  
        ranges: [
           {  min: 0x261A,  max: 0x261F  }, /*misc symbols left - down */  
           {  min: 0x270A,  max: 0x270D  }, /*dingbats */ 
           {  min: 0x1F64C,  max: 0x1F64C  }, /*hands out*/  
           {  min: 0x1F64F,  max: 0x1F64F  }, /*hands together*/  
           {  min: 0x1F446,  max: 0x1F450  }, /*pointing up - hands out*/ 
           {  min: 0x1F58E,  max: 0x1F5A3  }, /*pen - pointing down*/  
           {  min: 0x1F918,  max: 0x1F91F  }, /*suppl - love - rock */  
           {  min: 0x1F932,  max: 0x1F932  }, /*fists */  
           {  min: 0x1F9E4,  max: 0x1F9E4  }, /*glove */  ]  
   },
    {  
        key: "Hearts",  
        ranges: [
           {  min: 0x2661,  max: 0x2661  }, /*misc symbols*/  
           {  min: 0x2665,  max: 0x2665  }, /*misc symbols*/  
           {  min: 0x2762,  max: 0x2767  },
           {  min: 0x1F394,  max: 0x1F394  }, /*text heart*/  
           {  min: 0x1F48C,  max: 0x1F48C  }, /*letter*/  
           {  min: 0x1F48F,  max: 0x1F48F  },
           {  min: 0x1F491,  max: 0x1F491  },
           {  min: 0x1F493,  max: 0x1F49F  }, /*misc picto - heart*/  
           {  min: 0x1F5A4,  max: 0x1F5A4  }, /*black*/ 
           {  min: 0x1F60D,  max: 0x1F60D  },
           {  min: 0x1F63B,  max: 0x1F63B  },
           {  min: 0x1F970,  max: 0x1F970  },
           {  min: 0x1F9E1,  max: 0x1F9E1  }, /* suppl orange heart */  ]  
   },
   {  
       key: "Plants & Food",  
       ranges: [
           {  min: 0x2E19,  max: 0x2E19  },
           {  min: 0x1F32D,  max: 0x1F37F  },
           {  min: 0x1F384,  max: 0x1F384  }, /*xmas tree*/
           {  min: 0x1F38B,  max: 0x1F38B  },
           {  min: 0x1F38D,  max: 0x1F38D  },
           {  min: 0x1F391,  max: 0x1F391  },
           {  min: 0x1F490,  max: 0x1F490  }, /*lone flower*/
           {  min: 0x1F4AE,  max: 0x1F4AE  },
           {  min: 0x1F940,  max: 0x1F940  }, /*wilted flower*/
           {  min: 0x1F942,  max: 0x1F944  }, /*glasses-fork*/
           {  min: 0x1F950,  max: 0x1F96F  },
           {  min: 0x1F9C0,  max: 0x1F9C2  }, /*suppl*/  ],  
       },
   {  
       key: "Halloween",  
       ranges: [
           {  min: 0x1f383,  max: 0x1f383  },
           {  min: 0x1f479,  max: 0x1f479  },
           {  min: 0x1f47b,  max: 0x1f47b  },
           {  min: 0x1f47f,  max: 0x1f47f  },
           {  min: 0x1f480,  max: 0x1f480  },
           {  min: 0x1f608,  max: 0x1f608  },
           {  min: 0x1f987,  max: 0x1f987  },
           {  min: 0x1f577,  max: 0x1f578  },
           {  min: 0x1f571,  max: 0x1f571  }  ]  },
   {  
       key: "Flowers", 
       ranges: [
       {  min: 0x1f331,  max: 0x1f331  },
       {  min: 0x1f337,  max: 0x1f33c  },
       {  min: 0x1f33e,  max: 0x1f343  },
       {  min: 0x1f490,  max: 0x1f490  },
       {  min: 0x1f4ae,  max: 0x1f4ae  },
       {  min: 0x1f940,  max: 0x1f940  },]  
   }];


module.exports = characterSets