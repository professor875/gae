import {ServiceType} from "@/types.ts";
import serviceImage1 from "@/assets/images/home/services/icon-1.png";
import serviceImage2 from "@/assets/images/home/services/icon-2.png";
import serviceImage3 from "@/assets/images/home/services/icon-3.png";
import serviceImage4 from "@/assets/images/home/services/icon-4.svg";
import newsImage1 from "@/assets/images/home/news/news1.png";
import newsImage2 from "@/assets/images/home/news/gae-model-2.png";
import newsImage3 from "@/assets/images/home/news/news-bohrgerat.png";
import newsImage4 from "@/assets/images/home/news/news-sol.png";
import placeholderImage from "@/assets/images/placeholder-image.jpg";

export const services : ServiceType[] = [
    {
        image: serviceImage1,
        heading: {
            label: 'energie',
            path: '/geschaftsbereiche#energie',
        },
        points: [
            {
                label: 'Hoch- & Höchstspannungskabel',
                path: '/energy-transportation',
            },
            {
                label: 'Geothermie & Solar',
                path: '/renwable-energy',
            },
            {
                label: 'Energie- & wärmespeicher',
                path: '/energy-speicher',
            },
        ],
    },
    {
        image: serviceImage2,
        heading: {
            label: 'Feld- und Labor Untersuchungen',
            path: '/geschaftsbereiche#laboranalysen-and-felduntersuchungen',
        },
        points: [
            {
                label: 'Laboranalysen',
            },
            {
                label: 'Standortmonitoring',
            },
            {
                label: 'Felduntersuchungen',
            },
        ],
    },
    {
        image: serviceImage3,
        heading: {
            label: 'Ingenieurwesen',
            path: 'geschaftsbereiche#ingenieurwese-and-numerik'
        },
        points: [
            {
                label: 'Numerik',
            },
            {
                label: 'Geotechnik',
            },
            {
                label: 'Bodenverbesserung',
            },
        ],
    },
    {
        image: serviceImage4,
        heading: {
            label: 'UAV, GIS & BIM',
            path: 'geschaftsbereiche#gis-and-uav'
        },
        points: [
            {
                label: 'Drohnenbefliegungen',
            },
            {
                label: 'GIS & KI',
            },
            {
                label: 'Digitale Zwillinge',
            },
        ],
    },
]

export const news = [
    {
        image: newsImage1,
        heading: '2024 –Rhein-Main-Link',
        description: 'GAE wurde von BGM Baugrundinstitut beauftragt, für den Rhein-Main-Link im Bereich Wärmeleitfähigkeit, Experimentelle Analysen, Bettungsmaterialien und Optimierung der Kabelabstände mitzuwirken. Der Rhein-Main-Link ist ein wichtiges Netzausbauprojekt für die Energiewende. Ab 2033 sollen bis zu acht Gigagwatt (GW) Windstrom über Niedersachsen bis nach Südhessen / Rheinland-Pfalz transportiert werden, siehe die Präferenzraum (BNetzA/Umweltbericht 2023).',
    },
    {
        image: newsImage2,
        heading: '2024 – Erdkabeltrasse Schenefeld/SH',
        description: 'GAE wurde durch SH Netz beauftragt, für den Bau des geplanten Erdkabels im Raum Pinneberg / Schenefeld die vollständige geotechnische, bodenkundlichen und thermische Erkundung und Planungen der Wasserhaltung zu übernehmen. Neben der Ermittlung der Bodenparameter beinhaltet das Bodenmanagement die Konzeptionen von notwendigen und geeigneten Kabelbettungsmaterialien.',
    },
    {
        image: newsImage3,
        heading: '2024 – Solarfarm Wuschewier',
        description: 'GAE wurde von SMT Resources beauftragt, mit Hilfe der GAE-Modell II - Elektro-Magnetik-Poro-Thermo-Hydro-Diffusion-Klima-Pflanzen die verlegten Kabel hinsichtlich Abstands und Bettungsmaterial zu optimieren und dazu die notwendigen Bodenparameter experimentell zu bestimmen. Dafür werden die genutzten 1kV- und 20kV der mehrlagigen Verlegung und Kreuzungspunkte in 2D- und 3D-Modellen mit den vorhandenen Standortrandbedingungen, klimatischen Bedingungen und genutzten Kabelkonzepotionen abgebildet, die notwendigen Wärmeleitfähigkeit im Boden bestimmt und ein geeignetes Bettungsmaterial konzipiert.',
    },
    {
        image: newsImage4,
        heading: '2023 – Süd-Ost-Link',
        description: 'GAE wurde von Arcadis / Tennet beauftragt, für den Süd-Ost-Link Süd die Umweltimmissionsauswirkungen für den Umweltimmissionsbericht – Wärme E04.1 für die Belastung einer NEP 100% Auslastung zu simulieren. Die Simulationen werden durch das GAE-Modell I - Poro-Thermo-Hydro-Diffusion-Klima-Pflanzen die Abbildung des porösen Bodenbereiches einschließlich der Bodenschichten, Grundwasser, Feldpflanzen und vollständigen klimatischen Bedingungen durchgeführt.',
    },
    {
        image: placeholderImage,
        heading: '2023 – Testfeld Wolmirstedt',
        description: 'GAE wurde von 50Hertz beauftragt, das Testfeld Wolmirstedt für weitere 2 Jahre zu betreiben und für die Analyse des Austrocknungsverhaltens unterschiedlicher Bettungsmaterialien auszubauen. Das Testfeld wird meßtechnisch mit einer Vielzahl von Sensoren ganzjährlich unter natürlich klimatischen Bedingungen und unterschiedlich beaufschlagten Verlustwärmeleistungen beobachtet. Die Meßwerte (siehe Abbildung) dienen zusätzlich zur Validierung der verfügbaren Bodenmodelle, wie vollständig gekoppelte Modelle oder Zweischichtmodelle.',
    },
];