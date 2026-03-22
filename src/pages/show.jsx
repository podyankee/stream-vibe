import Seasons from '@/components/Seasons'
import MovieDetails from '@/sections/MovieDetails'
import ShowHero from '@/sections/ShowHero'

export const metadata = {
  title: 'Show - Stranger Things',
}

export default () => {
  return (
    <>
      <ShowHero />
      <MovieDetails seasons={<Seasons />} />
    </>
  )
}
