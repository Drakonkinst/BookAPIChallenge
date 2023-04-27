import styled from "styled-components";

export default function Author({ author, bookCount }) {
    return <Wrapper>
        <p className="author">{author}</p>
        <p>{bookCount} {bookCount === 1 ? "Book" : "Books"}</p>
    </Wrapper>
}

const Wrapper = styled.article`
    text-align: center;
    
    h1 {
        margin-bottom: 5px;
    }
    
    p.author {
        font-weight: bold;
        font-size: 1.1em;
    }
`;