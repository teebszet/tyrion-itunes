import { getLayoutInitialProps } from './index'
import CSSReset from '../components/CSSReset'
import Layout from '../components/Layout'

export const Music = (props) => (
  <div>
    <Layout {...props}/>
    <CSSReset />
  </div>
)
Music.getInitialProps = getLayoutInitialProps;
export default Music
