import { getLayoutInitialProps } from './index'
import CSSReset from '../components/CSSReset'
import Layout from '../components/Layout'

export const MusicVideo = (props) => (
  <div>
    <Layout {...props}/>
    <CSSReset />
  </div>
)
MusicVideo.getInitialProps = getLayoutInitialProps;
export default MusicVideo
