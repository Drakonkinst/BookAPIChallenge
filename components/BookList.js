import styled from "styled-components";
import Book from "./Book"
import Link from "next/link";

export default function BookList({books}) {
    return <Wrapper>
        {
            books.map(b => <Link className="book-link" href={"/" + b.title}><Book title={b.title} author={b.author} pages={b.pages} /></Link>)
        }
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    
    a {
        flex: 1;
        min-width: 250px;
        border: 2px solid black;
        border-radius: 5px;
        padding: 10px;
        display: block;
        border: 1px solid #87ceeb;
        border-radius: 5px;
        padding: 10px;
        transition: color 0.1s ease, background-color 0.1s ease;
    }

    a:hover {
        color: white;
        background-color: #45b3e0;
    }
`;