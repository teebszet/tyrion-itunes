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
export async function getLayoutInitialProps({pathname = '/'} = {}) {
  const media = pathname === '/' ? 'movie' : pathname.replace(/^\//, '');
  const uri = `https://itunes.apple.com/search?media=${media}&term=the&limit=12`
  console.log(uri)
  const res = await fetch(uri)
  const data = await res.json()
  console.log('result count: ', data.resultCount)
  return {
    ...data,
    results: data.results ? data.results.map(item => _pick(item, [
      'artworkUrl100',
      'trackName',
      'longDescription',
      'trackViewUrl',
    ])) : [],
    selected: media,
  }
}
Index.getInitialProps = getLayoutInitialProps;
export default Index
