import styled from "styled-components";
import Link from "next/link";

export default function ButtonLink({ children, href }) {
    return <Wrapper>
        <Link href={href}>{children}</Link>
    </Wrapper>
}

const Wrapper = styled.p`
    a {
        display: block;
        color: white;
        background-color: #45b3e0;
        border: 1px solid #87ceeb;
        border-radius: 5px;
        padding: 10px;
        transition: background-color 0.1s ease;
    }

    a:hover {
        background-color: #87ceeb;
    }
`;