import styled from "styled-components";
import Link from "next/link";
import Author from "./Author";

export default function AuthorList({ authorToBookCount }) {
    const authorList = [];
    for(const authorName in authorToBookCount) {
        authorList.push({
            "author": authorName,
            "count": authorToBookCount[authorName]
        });
    }
    
    return <Wrapper>
        {
            authorList.map(a => <Link className="book-link" href={"/author/" + a.author}><Author author={a.author} bookCount={a.count}></Author></Link>)
        }
    </Wrapper>
}

const Wrapper = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    
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