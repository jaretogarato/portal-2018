/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'dps',
                            type: 'image',
                            rect: ['-14px', '92px', '583px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"dps.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'shadow',
                            type: 'image',
                            rect: ['27px', '23px', '504px', '376px', 'auto', 'auto'],
                            opacity: '0.01',
                            fill: ["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
                        },
                        {
                            id: 'p',
                            type: 'image',
                            rect: ['171px', '155px', '78px', '131px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"p.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'r',
                            type: 'image',
                            rect: ['201px', '165px', '55px', '92px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"r.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 't',
                            type: 'image',
                            rect: ['219px', '141px', '51px', '125px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"t.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'a',
                            type: 'image',
                            rect: ['226px', '164px', '73px', '94px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'l',
                            type: 'image',
                            rect: ['263px', '138px', '27px', '129px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"l.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'o1',
                            type: 'image',
                            rect: ['179px', '164px', '89px', '95px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"o1.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'o1Copy',
                            type: 'image',
                            rect: ['179px', '140px', '89px', '95px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"o1.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'o1Copy2',
                            type: 'image',
                            rect: ['179px', '188px', '89px', '95px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"o1.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(50,214,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid34",
                            "left",
                            0,
                            2636,
                            "easeInOutQuad",
                            "${t}",
                            '219px',
                            '289px'
                        ],
                        [
                            "eid8",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${o1}",
                            '179px',
                            '179px'
                        ],
                        [
                            "eid35",
                            "left",
                            0,
                            2636,
                            "easeInOutQuad",
                            "${a}",
                            '226px',
                            '321px'
                        ],
                        [
                            "eid39",
                            "left",
                            2250,
                            1750,
                            "easeInOutQuad",
                            "${o1Copy2}",
                            '179px',
                            '168px'
                        ],
                        [
                            "eid36",
                            "left",
                            0,
                            2636,
                            "easeInOutQuad",
                            "${l}",
                            '263px',
                            '388px'
                        ],
                        [
                            "eid49",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${o1Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid21",
                            "opacity",
                            2250,
                            1750,
                            "easeInOutQuad",
                            "${o1Copy2}",
                            '0',
                            '0.68'
                        ],
                        [
                            "eid7",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${dps}",
                            '-14px',
                            '-14px'
                        ],
                        [
                            "eid24",
                            "opacity",
                            0,
                            2636,
                            "easeInOutQuad",
                            "${p}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            0,
                            2636,
                            "easeInOutQuad",
                            "${t}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "left",
                            0,
                            2636,
                            "easeInOutQuad",
                            "${p}",
                            '171px',
                            '127px'
                        ],
                        [
                            "eid54",
                            "opacity",
                            1500,
                            3500,
                            "linear",
                            "${shadow}",
                            '0.010000',
                            '1'
                        ],
                        [
                            "eid42",
                            "top",
                            2250,
                            1750,
                            "easeInOutQuad",
                            "${o1Copy2}",
                            '164px',
                            '188px'
                        ],
                        [
                            "eid19",
                            "opacity",
                            0,
                            2636,
                            "easeInOutQuad",
                            "${l}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "top",
                            2250,
                            1750,
                            "easeInOutQuad",
                            "${o1Copy}",
                            '164px',
                            '140px'
                        ],
                        [
                            "eid47",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${o1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid26",
                            "opacity",
                            3456,
                            249,
                            "linear",
                            "${o1}",
                            '0',
                            '0.18346671747967'
                        ],
                        [
                            "eid51",
                            "opacity",
                            3705,
                            241,
                            "linear",
                            "${o1}",
                            '0.18346671747967',
                            '0'
                        ],
                        [
                            "eid52",
                            "opacity",
                            3946,
                            465,
                            "linear",
                            "${o1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "left",
                            2250,
                            1750,
                            "easeInOutQuad",
                            "${o1Copy}",
                            '179px',
                            '190px'
                        ],
                        [
                            "eid25",
                            "opacity",
                            3813,
                            1187,
                            "linear",
                            "${dps}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${o1Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2250,
                            1750,
                            "easeInOutQuad",
                            "${o1Copy}",
                            '0',
                            '0.68'
                        ],
                        [
                            "eid37",
                            "left",
                            0,
                            2636,
                            "easeInOutQuad",
                            "${r}",
                            '201px',
                            '251px'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            2636,
                            "easeInOutQuad",
                            "${a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            0,
                            2636,
                            "easeInOutQuad",
                            "${r}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("portal-logo_edgeActions.js");
})("EDGE-145598600");
