import { getLayoutInitialProps } from './index'
import CSSReset from '../components/CSSReset'
import Layout from '../components/Layout'

export const Podcast = (props) => (
  <div>
    <Layout {...props}/>
    <CSSReset />
  </div>
)
Podcast.getInitialProps = getLayoutInitialProps;
export default Podcast
