import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
`;

const Menu = styled.div`
    width: 139px;
    height: 500px;
    float: left;
    border: 1px solid red;
`;

const Container = styled.div`
    float: right;
    height: 500px;
    border: 1px solid blue;
    flex-grow: 1;
    display: grid;
`;

const Top = styled.div``;
const Down = styled.div``;

export default () => {
    return (
        <Wrapper>
            <Menu></Menu>
            <Container>
                <Top></Top>
                <Down>
                </Down>
            </Container>
        </Wrapper>
    )
}