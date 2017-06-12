import { getLayoutInitialProps } from './index'
import CSSReset from '../components/CSSReset'
import Layout from '../components/Layout'

export const Movie = (props) => (
  <div>
    <Layout {...props}/>
    <CSSReset />
  </div>
)
Movie.getInitialProps = getLayoutInitialProps;
export default Movie
