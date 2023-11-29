import Navbar from './components/navbar'
import Footer from './components/footer'
import HomeCarousal from './components/homeCarousal'
import ProductContainer from './components/productContainer'

export default function Home() {
  return (
    <>
      <HomeCarousal/>
      <ProductContainer title="Cements" category="cement"/>
      <ProductContainer title="Bricks" category="cement"/>
      <ProductContainer title="Bars" category="cement"/>
      <ProductContainer title="Sand & Aggregates" category="cement"/>
      <ProductContainer title="Others" category="cement"/>
    </>
  )
}
