import styled from "styled-components";

export default function Book({title, author, pages}) {
    return <Wrapper>
        <h1>{title}</h1>
        <p className="author">by {author}</p>
        <p>{pages} Pages</p>
    </Wrapper>
}

const Wrapper = styled.article`
    text-align: center;
    
    h1 {
        margin-bottom: 5px;
    }
    
    p.author {
        margin-top: 5px;
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 1.1em;
    }
`;