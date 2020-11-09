import styled from "styled-components";

const Card = styled.div`
    border: 1px solid rgba(130, 130, 130, 0.6);
    padding: 0.5em 1em;
    background: rgba(200, 200, 200, 0.2);
    border-radius: 5px;
    width: 100%;
    max-width: 700px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  color: #444444;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 0.5em;
`;

const DisabledButton = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  background-color: green;
  color: #ffffff;
  padding: 5px 10px;
  align-items: center;
`

function StoreCard() {
    return (
        <div>
            <Card>
                <Row>
                    <Col>
                        <Row>
                            <img src="/soldout_transparent.png" alt="Sold out" style={{ maxWidth: 350 }} />
                        </Row>
                        <Row>
                            <DisabledButton>Registrer din interesse!</DisabledButton>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <p><b>Produktinformasjon:</b></p>
                        </Row>
                        <Row>
                            <p>Vår "pils er pils"-genser er vår fremste merkevare. Denne genseren er svært ettertraktet, og har kun blitt gitt ut i et begrenset opplag. Sikre deg denne før det er tomt! </p>
                        </Row>
                        <Row>
                            <p><b>Kjendiser som bruker denne: </b></p>
                        </Row>
                        <Row>
                            <p>(Kommer snart...)</p>
                        </Row>
                        <Row>
                            <p><b>Pris: </b><i>Kun 400kr</i></p>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default StoreCard;