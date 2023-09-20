import exempleMCD from "./exemple-MCD.jpg" ;
import exempleMOD from "./exemple-MOD.png" ;
import exempleMPD from "./exemple-MPD.jpeg" ;
import exempleComp from "./exemple-Comp.png" ;
import exempleDA from "./exemple-DA.png" ;
import exempleDC from "./exemple-DC.jpeg" ;
import exempleDCU from "./exemple-DCU.png" ;
import exempleDE from "./exemple-DE.png" ;
import exempleDS from "./exemple-DS.jpeg" ;


export const CardInfos = 
[
    {
        id: 1,
        title: "Diagramme d'activités",
        url: "/DA",
        img: exempleDA,
        spec: "UML"
    },
    {
        id: 2,
        title: "Diagramme de cas d'utilisation",
        url: "/DCU",
        img: exempleDCU,
        spec: "UML"
    },
    {
        id: 3,
        title: "Diagramme de classe",
        url: "/DC",
        img: exempleDC,
        spec: "UML"
    },
    {
        id: 4,
        title: "Diagramme d'état",
        url: "/DE",
        img: exempleDE,
        spec: "UML"
    },
    {
        id: 5,
        title: "Diagramme de composants",
        url: "/DComp",
        img: exempleComp,
        spec: "UML"
    },
    {
        id: 6,
        title: "MOD",
        url: "/MOD",
        img: exempleMOD,
        spec: "MERISE"
    },
    {
        id: 7,
        title: "Diagramme de séquence",
        url: "/DS",
        img: exempleDS,
        spec: "UML"
    },
    {
        id: 8,
        title: "MCD",
        url: "/MCD",
        img: exempleMCD,
        spec: "MERISE"
    },
    {
        id: 9,
        title: "MPD",
        url: "/MPD",
        img: exempleMPD,
        spec: "MERISE"
    }
]
