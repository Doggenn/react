import './App.css'
import Reviews from './components/ex2/Reviews'
import Header from './components/ex1/header/Header'
import Promotion from './components/ex1/promotion/Promotion'
import Gallery from './components/ex1/gallery/Gallery'
const data = {
    header: {
        logo: {
            img: "https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg"
        },
        links: [{
            text: "Tendencias",
            url: "https://teconte.es"
        }, {
            text: "Reservas",
            url: "https://app.breakord.com/es"
        }, {
            text: "Proximos lanzamientos",
            url: "https://codictados.com"
        }, {
            text: "Soporte 24/7",
            url: "https://wishylist.app/"
        }],
        menu: [{
            text: "PC",
            url: "https://teconte.es"
        }, {
            text: "Playstation",
            url: "https://app.breakord.com/es"
        }, {
            text: "Xbox",
            url: "https://codictados.com"
        }, {
            text: "Nintendo",
            url: "https://wishylist.app/"
        }]
    },
    promotion: {
        day: "Tomorrow",
        title: "Tekken 8",
        discount: 36,
        price: "44.79€",
        background: "https://gaming-cdn.com/img/products/9579/hcover/9579.jpg"
    },
    heading: {
        text: "Tendencias",
        url: "https://teconte.es"
    },
    gallery: [
        {
            card: {
                title: "Assetto corsa",
                discount: 28,
                price: "12.89€",
                tag: "DLC",
                img: "https://gaming-cdn.com/images/products/15737/380x218/assetto-corsa-competizione-gt2-pack-pc-juego-steam-cover.jpg?v=1706184000"
            }
        },{
            card: {
                title: "Football Manager 2024",
                discount: 51,
                price: "29.66€",
                img: "https://gaming-cdn.com/images/products/14704/380x218/football-manager-2024-pc-mac-juego-steam-europe-cover.jpg?v=1706184000"
            }
        },{
            card: {
                title: "Los Sims 4 Se alquila",
                discount: 40,
                price: "23.87€",
                tag: "DLC",
                img: "https://gaming-cdn.com/images/products/15236/380x218/los-sims-4-se-alquila-pc-mac-juego-ea-app-cover.jpg?v=1706184000"
            }
        }
    ]

}
const data2 = {
    reviews: [
        {
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating:5,
                title: "Assassin's Creed Odyssey Deluxe",
                description:"Perfecto, una oferta increíble: Edición Deluxe 13,99 (con IVA). Comprado por Bizum y al instante he recibido el código de activación.",
                date: "hace 22 horas"
            }
        },{
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating:5,
                title: "Assassin's Creed Odyssey Deluxe",
                description:"Perfecto, una oferta increíble: Edición Deluxe 13,99 (con IVA). Comprado por Bizum y al instante he recibido el código de activación.",
                date: "Ayer"
            }
        },{
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating:3.5,
                title: "Assassin's Creed Odyssey Deluxe",
                description:"Maravilla de juego!.",
                date: "Ayer"
            }
        },{
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating:5,
                title: "Assetto Corsa Ultimate Edition",
                description:"Como siempre!",
                date: "Hace 2 dias"
            }
        },{
            review: {
                avatar: "https://gaming-cdn.com/images/avatars/23110039-1706014521.jpg",
                rating:5,
                title: "River city girls",
                description:"Excelente calidad.",
                date: "hace 3 dias"
            }
        },
    ]

}

function App() {


  return (
    <>
      <Header app={data.header}></Header>
      <Promotion app={data.promotion}></Promotion>
      <Gallery app={data.gallery}></Gallery>

      <Reviews app={data2.reviews}></Reviews>
    </>
  )
}

export default App
