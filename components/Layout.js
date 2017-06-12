import Head from 'next/head'
import Filter from '../components/Filter'
import Grid from '../components/Grid'
import Search from '../components/Search'
import layoutStyle from '../styles/index'

const Layout = ({results = [], selected}) => (
  <div className='body'>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1" />
    </Head>
    <nav>
      <Filter items={filterItems()} selected={selected}/>
      <Search/>
    </nav>
    <main>
      <Grid items={gridItems(results)}/>
    </main>
    <style jsx>{layoutStyle}</style>
  </div>
)
export default Layout

// TODO move to redux state and props?
export const filterItems = () => ([
  {value: 'movie', label: 'Movie'},
  {value: 'podcast', label: 'Podcast'},
  {value: 'music', label: 'Music'},
  {value: 'musicVideo', label: 'Music Video'},
])

const gridItems = (results = []) => (
  results.map(item => ({
    src: item.artworkUrl100,
    title: item.trackName,
  }))
)
