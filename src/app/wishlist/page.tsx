'use client'
import Wishlist from '@/templates/Wishlist'

import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

const props = {
  recommendedGames: gamesMock.slice(0, 5),
  recommendedHighlight: highlightMock,
  games: gamesMock
}
export default function WishlistPage() {
  return <Wishlist {...props} />
}
