import Head from 'next/head'
import Filter from '../components/Filter'
import Grid from '../components/Grid'
import Search from '../components/Search'


export const Index = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Grid items={gridItems()}/>
    <section>
      <Search/>
      <Filter items={filterItems()}/>
    </section>
    <style jsx>{`
      section {
        position: fixed;
        bottom: 0;
        width: 100%;
      }
    `}</style>
    <style jsx global>{`
      * {
        padding: 0;
        margin: 0;
        vertical-align: baseline;
      }
      body {
        font-family: sans-serif;
      }
      ul {
        list-style: none;
      }
    `}</style>
  </div>
)
export default Index

// TODO move to redux state and props?
const filterItems = () => ([
  {value: 'movie', label: 'Movie'},
  {value: 'podcast', label: 'Podcast'},
  {value: 'music', label: 'Music'},
  {value: 'music-video', label: 'Music Video'},
])

const gridItems = () => ([
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
])

