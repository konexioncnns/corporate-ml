import img from "../assets/images/student1.jpg";
import img3 from "../assets/images/itil4cfr.png";
import iso from "../assets/images/iso27001.png";
import iso2 from "../assets/images/iso2.png";
const Data=	{
    Category:[
        {id:1,title:"Securite de l'information"},
        {id:2,title:"Gouvernance et gestion ti"},
        {id:4,title:"Gestion de projet"},
        {id:5,title:"Bureautique developpement et infrastructure"},
        {id:6,title:"Marketing Digital"},
        {id:7,title:"Archivage et continute"},
    ],

    Formation:[
        {id:1,catId:1,title:"Iso/IEC 27001-Introduction",image:iso2,price:3000},
        {id:2,catId:2,title:"Introduction Itil 4",image:img3,price:300000},
        {id:3,catId:1,title:"Iso/IEC 27002-Foundation",image:img,price:3000},
        {id:4,catId:1,title:"Iso/IEC 27001-Lead implementer",image:iso,price:3000},
        {id:5,catId:1,title:"Iso/IEC 27001-Lead Auditor",image:img3,price:3000},
        {id:6,catId:1,title:"Iso/IEC 27001-Foundation(Incluant examen)",image:img,price:3000},
        {id:7,catId:2,title:"Itil 4 fondation",image:img},
        {id:8,catId:4,title:"Iso 21500 Lpead rojet Manager",image:iso2,price:3000},
        {id:9,catId:5,title:"Exel avancé",image:img,price:3000},
        {id:10,catId:5,title:"Base de donnée Access",image:img,price:250000},
        {id:11,catId:5,title:"SPSS analyse de données",image:img,price:3000},
    ]
}
export default Data
