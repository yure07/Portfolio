import './style.css'
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap'

import { SiReact, SiFirebase, SiTypescript, SiTailwindcss, SiFigma } from 'react-icons/si'
import { DiGit } from "react-icons/di"

export default function Skills () {
    return(
        <article>
          <h2>Habilidades</h2>
          <Container>
            <Row>
              <Col id='col-card'>

              {/* -- CARD TYPESCRIPT -- */}
              <Card>
                <i><SiTypescript/></i>
                <CardBody>
                <CardTitle tag="h5">
                  TYPESCRIPT
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

              {/* -- CARD TAILWIND -- */}
              <Card>
                <i> <SiTailwindcss/> </i>
                <CardBody>
                <CardTitle tag="h5">
                  TAILWIND
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
               
              {/* -- CARD GIT -- */}
              <Card>
                <i><DiGit/></i>
                <CardBody>
                <CardTitle tag="h5">
                  GIT
                </CardTitle>
                </CardBody>
              </Card>

              {/* -- CARD FIGMA -- */}
              <Card>
                <i><SiFigma/></i>
                <CardBody>
                <CardTitle tag="h5">
                  FIGMA
                </CardTitle>
                </CardBody>
              </Card>

              </Col>
            </Row>
          </Container>
        </article>
    )
}