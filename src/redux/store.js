import { createStore } from "redux";
import proyects_reducer from "../redux/reducers/proyectsReducer";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {
  proyects: [
    {
      id: 1,
      link: "https://picale.mx/",
      title: "Pícale.Mx",
      year: "2019",
      short_description:
        "Conoce los rincones de Querétaro, prueba la comida más rica, visita lugares nuevos y tradicionales. Pícale.mx es el portal con las mejores recomendaciones.",
      description:
        "Este proyecto fue realizado para EXA FM Querétaro. Pícale MX es una web que se encarga de difundir actividades, eventos y lugares de interés del estado de Querétaro. Desarrollado con Worpress a partir de un tema completamente en blanco para poder tener un sitio totalmente personalizado.",
      tools: ["HTML5", "CSS3", "SASS", "JavaScript", "PHP", "SQL", "WordPress"],
      company: "Innovation Workshop",
      like: false,
      likes: 100,
      logo: "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/picale1.PNG",
      images: [
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/picale1.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/picale2.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/picale3.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/picale4.PNG",
      ],
    },
    {
      id: 2,
      link: "https://pickpal.com/",
      title: "Pickpal",
      year: "2019",
      short_description:
        "PickPal es una aplicación móvil para pedir y pagar en cualquier restaurante, isla, fast food, cafetería entre otros; ¡de manera inmediata y sin hacer filas!",
      description:
        "PickPal es una app desarrollada para la compra de comida en los negocios locales, solo pides, pagas y recoges evitándole al usuario las largas filas. Mi tarea con esta app fue desarrollar un landing page donde se da a conocer la app, todas sus características y beneficios. Desarrollado con Worpress a partir de un tema completamente en blanco para poder tener un sitio totalmente personalizado.",
      tools: ["HTML5", "CSS3", "SASS", "JavaScript", "PHP", "SQL", "WordPress"],
      company: "Innovation Workshop",
      like: false,
      likes: 90,
      logo: "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/pickpal1.PNG",
      images: [
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/pickpal1.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/pickpal2.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/pickpal3.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/pickpal4.PNG",
      ],
    },
    {
      id: 3,
      link: "https://danielcuevas1822.github.io/MyPokedex/",
      title: "MyPokédex",
      year: "2021",
      short_description:
        "MyPokédex es una aplicación web desarrollada con React y alojada en GitHub Pages, nos brinda información acerca de todos los Pokémon conocidos hasta ahora.",
      description:
        "Este proyecto fue realizado con la finalidad de poner en práctica mis conocimientos con React, en él reafirmo conceptos en la creación de componentes, props, eventos, manipulación de estado de los componentes así como su ciclo de vida. La información es consultada desde la PokeAPI para poder mantener la app actualizada.",
      tools: [
        "React Js",
        "React Hooks",
        "React Router",
        "JavaScript",
        "SASS",
        "HTML",
        "CSS",
        "Fetch API",
      ],
      company: "Freelance",
      like: false,
      likes: 100,
      logo: "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/pokemon1.PNG",
      images: [
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/pokemon1.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/pokemon2.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/pokemon3.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/pokemon4.PNG",
      ],
    },
    {
      id: 4,
      link: "https://gdlwebcam.webcindario.com/",
      title: "GDLWEBCAMP",
      year: "2019",
      short_description:
        "GDLWEBCAMP es un sitio web realizado para promocionar una conferencia de diseño web, seminarios y talleres.",
      description:
        "GDLWEBCAMP fue un proyecto realizado con motivos de aprendizaje. Este sitio puede ser considerado como un template para una web de conferencias o talleres.",
      tools: ["HTML5", "CSS3", "SASS", "JavaScript", "PHP", "SQL"],
      company: "Freelance",
      like: false,
      likes: 80,
      logo: "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/gdlwebcam1.PNG",
      images: [
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/gdlwebcam1.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/gdlwebcam2.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/gdlwebcam3.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/gdlwebcam4.PNG",
      ],
    },
    {
      id: 5,
      link: "https://sweet-experiences.000webhostapp.com/",
      title: "Sweet Eexperiences",
      year: "2019",
      short_description:
        "Es un catálogo de productos para una tienda local de mi ciudad natal que se dedica a la venta de postres, regalos, decoraciones y mesas de dulces.",
      description:
        "Sweet Eexperiences fue un proyecto desarrollado para una amiga, ella se dedica a la venta de postres dentro de mi ciudad natal. Creada a partir de un tema completamente en blanco, puede ser fácilmente administrada gracia al admin de WordPress.",
      tools: ["HTML5", "CSS3", "SASS", "JavaScript", "PHP", "SQL", "WordPress"],
      company: "Freelance",
      like: false,
      likes: 80,
      logo: "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/sweet1.PNG",
      images: [
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/sweet1.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/sweet2.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/sweet3.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/sweet4.PNG",
      ],
    },
    {
      id: 6,
      link: "https://danielcuevas1822.github.io/BienesRaices/",
      title: "Bienes raíces",
      year: "2018 e implementada con React Js en 2021",
      short_description:
        "Es aplicación web en el que se da a conocer servicios de venta de bienes raíces.",
      description:
        "Es un proyecto realizado con motivos de aprendizaje. Esta aplicación web puede ser considerado como un template para una web de venta de bienes raíces. También cuenta con un administrador para su contenido https://danielcuevas1822.github.io/BienesRaicesAdmin/",
      tools: [
        "React Js",
        "React Redux",
        "React Router",
        "Fetch API",
        "HTML5",
        "CSS3",
        "SASS",
      ],
      company: "Freelance",
      like: false,
      likes: 80,
      logo: "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/bienes1.PNG",
      images: [
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/bienes1.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/bienes2.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/bienes3.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/bienes4.PNG",
      ],
    },
    {
      id: 7,
      link: "https://fmodelo.com/",
      title: "Ferretería Modelo del Bajío",
      year: "2019",
      short_description:
        "Sitio web para un proveedor de herramientas y maquinaria para grandes empresas.",
      description:
        "FMB es una tienda en línea y fue creado para ofrecer una gran variedad en productos ferreteros, herramientas eléctricas, neumáticas y manual.",
      tools: [
        "HTML5",
        "CSS3",
        "SASS",
        "JavaScript",
        "PHP",
        "SQL",
        "WordPress",
        "Woocommerce",
      ],
      company: "Innovation Workshop",
      like: false,
      likes: 80,
      logo: "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/fmb1.PNG",
      images: [
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/fmb1.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/fmb2.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/fmb3.PNG",
        "https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/fmb4.PNG",
      ],
    },
  ],
};

const store = createStore(proyects_reducer, initialState, composeEnhancers);

export default store;
