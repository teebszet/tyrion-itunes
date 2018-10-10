import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import _pick from 'lodash/pick'

import CSSReset from '../components/CSSReset'
import Layout from '../components/Layout'

export const Index = (props) => (
  <div>
    <Layout {...props}/>
    <CSSReset />
  </div>
)
export async function getLayoutInitialProps({
  pathname = '/',
  query = {},
} = {}) {
  const media = pathname === '/' ? 'movie' : pathname.replace(/^\//, '');
  const {search = ''} = query;
  // TODO use a uri builder
  const uri = `https://itunes.apple.com/search?media=${media}&term=${search}&limit=12`
  const res = await fetch(uri)
  const data = await res.json()
  console.log('result count: ', data.resultCount)
  console.log(uri)
  return {
    ...data,
    results: data.results ? data.results
      .map(item => ({
        ..._pick(item, [
          'artworkUrl600',
          'trackName',
          'longDescription',
          'trackViewUrl',
          'trackId',
        ]), 
        image: item.artworkUrl600 || item.artworkUrl100
      })) : [],
    selectedFilter: media,
  }
}
Index.getInitialProps = getLayoutInitialProps;
export default Index
