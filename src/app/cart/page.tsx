import Cart from '@/templates/Cart'

import itemsMock from '@/components/CartList/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import higlightMock from '@/components/Highlight/mock'
import cardsMock from '@/components/PaymentOptions/mock'

export default function CartPage() {
  return (
    <Cart
      cards={cardsMock}
      recommendedGames={gamesMock}
      recommendedHighlight={higlightMock}
      items={itemsMock}
      total={'$ 430,00'}
    />
  )
}
