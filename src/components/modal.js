import styled from "styled-components";

const StyledModal = styled.div`
    max-width: 100em;
    max-height: 100em;
    background-color: grey;
`

function Modal(props) {


    return (
        <div>
            <StyledModal>
                <p>This is a test</p>
            </StyledModal>
        </div>
    )
}

export default Modal;