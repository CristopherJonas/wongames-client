'use client'
import filterItemsMock from '@/components/ExploreSidebar/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import GamesTemplate from '@/templates/Games'

export default function GamesPage() {
  return <GamesTemplate games={gamesMock} filterItems={filterItemsMock} />
}
