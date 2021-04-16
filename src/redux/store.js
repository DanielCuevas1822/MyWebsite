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
        "Conoce los rincones de Querétaro, prueba la comida más rica, visita lugares nuevos y tradicionales de nuestra ciudad. Pícale.mx es el portal con las mejores recomendaciones para queretanos, y no queretanos.",
      description:
        "Este proyecto fue realizado para EXA FM Querétaro. Pícale MX es una web que se encarga de difundir actividades, eventos y lugares de interés del estado de Querétaro. Desarrollado con Worpress a partir de un tema completamente en blanco para poder tener un sitio totalmente personalizado.",
      tools: ["HTML5", "CSS3", "SASS", "JavaScript", "PHP", "SQL", "WordPress"],
      company: "Innovation Workshop",
      like: false,
      likes: 100,
      logo: "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
      images: [
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
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
      logo: "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
      images: [
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
      ],
    },
    {
      id: 3,
      link: "https://danielcuevas1822.github.io/MyPokedex/#/",
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
      logo: "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
      images: [
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
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
      logo: "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
      images: [
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
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
      logo: "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
      images: [
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
      ],
    },
    {
      id: 6,
      link: "https://bienes-raices.webcindario.com/",
      title: "Bienes raíces",
      year: "2018",
      short_description:
        "Es sitio web en el que se da a conocer servicios de venta de bienes raíces.",
      description:
        "Es un proyecto realizado con motivos de aprendizaje. Este sitio puede ser considerado como un template para una web de venta de bienes raíces.",
      tools: ["HTML5", "CSS3", "SASS", "PHP", "SQL"],
      company: "Freelance",
      like: false,
      likes: 80,
      logo: "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
      images: [
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
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
      logo: "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
      images: [
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
        "https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png",
      ],
    },
  ],
};

const store = createStore(proyects_reducer, initialState, composeEnhancers);

export default store;
