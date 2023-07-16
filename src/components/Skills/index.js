import './style.css'
import { Container, Row, Col, Card, CardBody, CardTitle} from 'reactstrap'

import {SiJavascript, SiReact, SiFirebase, SiSass} from 'react-icons/si'
import {DiGit} from "react-icons/di"
import {FaHtml5} from 'react-icons/fa'

export default function Skills () {
    return(
        <article>
          <h2>Habilidades</h2>
          <Container>
            <Row>
              <Col id='col-card'>

              {/* -- CARD HTML -- */}
              <Card>
              <i><FaHtml5/></i>
              <CardBody>
              <CardTitle tag="h5">
                HTML5
              </CardTitle>
              </CardBody>
              </Card>

              {/* -- CARD SASS -- */}
              <Card>
              <i><SiSass/></i>
              <CardBody>
              <CardTitle tag="h5">
                SASS
              </CardTitle>
              </CardBody>
              </Card>

              {/* -- CARD JAVASCRIPT -- */}
              <Card>
              <i><SiJavascript/></i>
              <CardBody>
              <CardTitle tag="h5">
                JAVASCRIPT
              </CardTitle>
              </CardBody>
              </Card>


              {/* -- CARD REACT -- */}
              <Card>
              <i><SiReact/></i>
              <CardBody>
              <CardTitle tag="h5">
                REACT
              </CardTitle>
              </CardBody>
              </Card>

               {/* -- CARD GIT -- */}
               <Card>
              <i><DiGit/></i>
              <CardBody>
              <CardTitle tag="h5">
                GIT
              </CardTitle>
              </CardBody>
              </Card>


               {/* -- CARD FIREBASE -- */}
               <Card>
              <i><SiFirebase/></i>
              <CardBody>
              <CardTitle tag="h5">
                FIREBASE
              </CardTitle>
              </CardBody>
              </Card>

              </Col>
            </Row>
          </Container>
        </article>
    )
}