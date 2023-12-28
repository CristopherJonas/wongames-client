'use client'
import { useState } from 'react'
import Home from '../templates/Home'
import { useQuery, gql } from '@apollo/client'

const GET_GAMES = gql`
  query GetGames {
    games {
      data {
        attributes {
          cover {
            data {
              attributes {
                url
              }
            }
          }
          name
          slug
          price
          developers {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export default function Main() {
  const { loading, error, data } = useQuery(GET_GAMES)
  const [games, setGames] = useState([])

  if (loading) return <p>LOADING ...</p>
  if (error) return <p>{JSON.stringify(error)}</p>
  if (!data) return
  if (data.games.data.length > 0 && games.length === 0) {
    const test = data.games.data.map((game) => ({
      title: game.attributes.name,
      developer: game.attributes.developers.data[0].attributes.name,
      img: game.attributes.cover.data.attributes.url,
      price: game.attributes.price,
      promotionalPrice: 'R$ 215,00'
    }))

    setGames(test)
  }

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
      newGames={games}
      mostPopularHighlight={{
        title: 'Read Dead is back!',
        subtitle: 'Come see John’s new adventures',
        backgroundImage: '/img/red-dead-img.jpg',
        buttonLabel: 'Buy now',
        buttonLink: '/games/rdr2'
      }}
      mostPopularGames={games}
      upcommingGames={games}
      upcommingHighlight={{
        title: 'Read Dead is back!',
        subtitle: 'Come see John’s new adventures',
        backgroundImage: '/img/red-dead-img.jpg',
        buttonLabel: 'Buy now',
        buttonLink: '/games/rdr2'
      }}
      upcommingMoreGames={games}
      freeGames={games}
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
