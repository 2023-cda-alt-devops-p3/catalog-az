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
        spec: "UML",
        cardtxt: "Un diagramme d'activité fournit une vue du comportement d'un système en décrivant la séquence d'actions d'un processus. Les diagrammes d'activité sont similaires aux organigrammes de traitement de l'information, car ils montrent les flux entre les actions dans une activité."
    },
    {
        id: 2,
        title: "Diagramme de cas d'utilisations",
        url: "/DCU",
        img: exempleDCU,
        spec: "UML",
        cardtxt: "Les diagrammes de cas d'utilisation modélisent le comportement d'un système et permettent de capturer les exigences du système. Les diagrammes de cas d'utilisation décrivent les fonctions générales et la portée d'un système."
    },
    {
        id: 3,
        title: "Diagramme de classe",
        url: "/DC",
        img: exempleDC,
        spec: "UML",
        cardtxt: "Les diagrammes de classes sont les plans de votre système ou sous-système. Vous pouvez utiliser des diagrammes de classes pour modéliser les objets qui constituent le système, pour afficher les relations entre les objets et pour décrire ce que ces objets font et les services qu'ils fournissent."
    },
    {
        id: 4,
        title: "Diagramme d'état",
        url: "/DE",
        img: exempleDE,
        spec: "UML",
        cardtxt: "Représenter des objets liés à un événement dans un système réactif. Illustrer des cas d'utilisation dans un contexte d'entreprise. Décrire comment un objet change d'état au cours de son existence."
    },
    {
        id: 5,
        title: "Diagramme de composants",
        url: "/DComp",
        img: exempleComp,
        spec: "UML",
        cardtxt: "Un diagramme de composants a pour objectif d'illustrer la relation entre les différents composants d'un système. Dans le cadre de l'UML 2.0, le terme « composant » fait référence à un module de classes qui représentent des systèmes ou des sous-systèmes indépendants ayant la capacité de s'interfacer avec le reste du système."
    },
    {
        id: 6,
        title: "MOD",
        url: "/MOD",
        img: exempleMOD,
        spec: "MERISE",
        cardtxt: "Représentation des données mémorisables sans tenir compte des contraintes organisationnelles ou techniques, ni des traitements. Modèle organisationnel des données (MOD) : Prise en compte des contraintes organisationnelles et de certaines contraintes techniques."
    },
    {
        id: 7,
        title: "Diagramme de séquence",
        url: "/DS",
        img: exempleDS,
        spec: "UML",
        cardtxt: "Les diagrammes de séquence permettent d'identifier les classes requises par un système et le comportement des objets de classes au cours des interactions. Vous pouvez détailler les diagrammes de séquence et montrer comment un système accomplit les interactions."
    },
    {
        id: 8,
        title: "MCD",
        url: "/MCD",
        img: exempleMCD,
        spec: "MERISE",
        cardtxt: "Le MCD fournit une description graphique pour représenter des modèles de données sous la forme de diagrammes pouvant contenir des entités ou des associations. Il peut être utilisé pour décrire les besoins en information ou par exemple le genre d'information nécessaire à l'élaboration du cahier des charges."
    },
    {
        id: 9,
        title: "MPD",
        url: "/MPD",
        img: exempleMPD,
        spec: "MERISE",
        cardtxt: "Dans la méthode Merise, le modèle physique des données (MPD) consiste à implanter une base de données dans un SGBDR. Le langage utilisé pour ce type d'opération est le SQL."
    }
]
