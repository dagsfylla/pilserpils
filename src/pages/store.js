import styled from 'styled-components';

import StoreCard from '../components/storeCard';

const Container = styled.div`
    

`
const StyledList = styled.ul`
    list-style-type: none;
    li {
        padding: 5;
    }
`

const storeList = {
    item1: {
        name: 'The "pils er pils" sweather',
        price: 400,
        text: "Kjøp denne før det er for sent!",
        image: "/soldout_transparent.png"
    }
}



function Store() {

    console.log("store", storeList)

    return (
        <Container>
            <StyledList>
                {Object.values(storeList).map((item, i) => {
                    console.log("in ,maap", item, i)
                    return <li><StoreCard item={item} key={i} /></li>;
                })}
            </StyledList>
        </Container>
    )
}

export default Store;