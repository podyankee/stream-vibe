import Categories from '@/sections/Categories'
import Hero from '@/sections/Hero'

export const metadata = {
  title: ' Home',
  isHeaderFixed: true,
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
    </>
  )
}
