import { Link } from 'react-router-dom';
import { Jumbotron,
Container
} from 'react-bootstrap';

const Banner = ({style,title, active, paused, finished}) =>
(
  <Jumbotron fluid className="px-5 banner">
    <Container className="px-5">
      <h1 className="ml-5 text-left pl-5" style={style}>{title}</h1>
      <div className="px-5 text-left mx-5 mb-n5 mt-5">       
        <Link className="banner-links" to="#">{active}</Link>
        <Link className="banner-links" to="/active">{paused}</Link>
        <Link className="banner-links" to="/active">{finished}</Link>
        {/* <Link className="banner-links" to="/active">{finished}</Link> */}
      </div>
    </Container>
  </Jumbotron>
)

export default Banner;