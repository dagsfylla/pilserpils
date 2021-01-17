import { useState } from 'react';

import styled from "styled-components";

import useComponentVisible from '../utils/visible';

import Modal from './modal';

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

const Button = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  background-color: green;
  color: #ffffff;
  padding: 5px 10px;
  align-items: center;
`

function StoreCard(props) {
    console.log(props);

    const item = props.item
    console.log(item);

    return (
        <div>
            <Card>
                <h2>{item.name}</h2>
                <Row>
                    <Col>
                        <Row>
                            <img src={item.image} alt="Sold out" style={{ maxWidth: 200 }} />
                        </Row>
                        <Row>
                            <Button>Registrer din interesse!</Button>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <p><b>Produktinformasjon:</b></p>
                        </Row>
                        <Row>
                            <p>{item.text}</p>
                        </Row>
                        <Row>
                            <p><b>Kjendiser som bruker denne: </b></p>
                        </Row>
                        <Row>
                            <p>(Kommer snart...)</p>
                        </Row>
                        <Row>
                            <p><b>Pris: </b><i>{item.price}kr</i></p>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default StoreCard;