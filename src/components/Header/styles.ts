import styled from "styled-components";

export const Container = styled.header `
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 2rem 1rem 12rem;

    button{
        font-size: 1rem;
        color: #FFF;
        border-radius: 0.25rem;
        padding: 0 2rem;
        height: 3rem;
        background-color: var(--blue-light);
        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(0.9);
        }
    }
`