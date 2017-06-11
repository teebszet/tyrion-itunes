import Head from 'next/head'
import Filter from '../components/Filter'
import Grid from '../components/Grid'
import Search from '../components/Search'


export const Index = () => (
  <div className='body'>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1" />
    </Head>
    <nav>
      <Filter items={filterItems()}/>
      <Search/>
    </nav>
    <main>
      <Grid items={gridItems()}/>
    </main>
    <CSSReset />
    <style jsx>{`
      nav {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 1;
        background-color: grey;
        box-shadow: 1px 1px 10px grey;
      }
      main {
        width: 100%;
        height: auto;
        max-width: 100%;
        margin-top: 7em;
        padding: 0.1em;
        z-index: 2;
      }
      .body {
        font-family: sans-serif;
        width: 100%;
      }
    `}</style>
    <style jsx global>{`
    `}</style>
  </div>
)
export default Index

const CSSReset = () => (
  <style jsx global>{`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, font, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-weight: inherit;
      font-style: inherit;
      font-size: 100%;
      font-family: inherit;
      vertical-align: baseline;
    }
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    ol, ul {
      list-style: none;
    }
  `}</style>
);

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
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'last'},
])

