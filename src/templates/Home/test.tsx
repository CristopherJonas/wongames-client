import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import Home from '.'
import { gamesMock } from '@/app/page'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(
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

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(
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

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })

  it('should render section elements', () => {
    renderWithTheme(
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
    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game ( 5 sections com 4 cards cada = 5x4 = 20)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(20)
    // highlight
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
  })
})
