import Home from '../templates/Home'

export const gamesMock = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

export default function Main() {
  return (
    <Home
      banners={[
        {
          img: 'https://source.unsplash.com/user/willianjusten/1042x580',
          title: 'Defy death 1',
          subtitle: '<p>Play the new <strong>CrashLands</strong> season',
          buttonLabel: 'Buy now',
          buttonLink: '/games/defy-death',
          ribbon: 'Bestselling'
        },
        {
          img: 'https://source.unsplash.com/user/willianjusten/1042x582',
          title: 'Defy death 2',
          subtitle: '<p>Play the new <strong>CrashLands</strong> season',
          buttonLabel: 'Buy now',
          buttonLink: '/games/defy-death'
        },
        {
          img: 'https://source.unsplash.com/user/willianjusten/1042x581',
          title: 'Defy death 3',
          subtitle: '<p>Play the new <strong>CrashLands</strong> season',
          buttonLabel: 'Buy now',
          buttonLink: '/games/defy-death'
        }
      ]}
      newGames={gamesMock}
      mostPopularHighlight={{
        title: 'Read Dead is back!',
        subtitle: 'Come see John’s new adventures',
        backgroundImage: '/img/red-dead-img.jpg',
        buttonLabel: 'Buy now',
        buttonLink: '/games/rdr2'
      }}
      mostPopularGames={gamesMock}
      upcommingGames={gamesMock}
      upcommingHighlight={{
        title: 'Read Dead is back!',
        subtitle: 'Come see John’s new adventures',
        backgroundImage: '/img/red-dead-img.jpg',
        buttonLabel: 'Buy now',
        buttonLink: '/games/rdr2'
      }}
      upcommingMoreGames={gamesMock}
      freeGames={gamesMock}
      freeHighlight={{
        title: 'Read Dead is back!',
        subtitle: 'Come see John’s new adventures',
        backgroundImage: '/img/red-dead-img.jpg',
        buttonLabel: 'Buy now',
        buttonLink: '/games/rdr2'
      }}
    />
  )
}
