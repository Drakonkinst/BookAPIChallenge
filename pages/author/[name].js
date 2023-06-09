import Head from 'next/head'
import {
    Container,
    Main,
} from '../../components/sharedstyles'
import styled from 'styled-components'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import BookList from "../../components/BookList"
import ButtonLink from '../../components/ButtonLink'

// General data-fetching function
const fetcher = url => fetch(url).then(r => r.json());

export default function AuthorDetail() {
    const router = useRouter();     // Get access to our router object
    const { name } = router.query;   // Get access to end of URL

    const { data, error } = useSWR(`/api/authors/${name}`, fetcher);

    // Anytime we fetch data, we want 3 states

    // If the API encounters an error
    if(error) {
        return <Main>
            Error fetching data from API. Sorry :(
        </Main>
    }

    // If the data is loading and has not been resolved yet
    if(!data) {
        return <Main>
            Loading...
        </Main>
    }

    // If the data comes back as expected
    if(data.length <= 0) {
        return <Main>
            No books found for this author, sorry :(
        </Main>
    }

    return (
        <Container>
            <Head>
                <title>Betterreads</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <h1>Books by {name}</h1>
                <ButtonLink href="/author">Go to Author List</ButtonLink>
                <Wrapper>
                    <BookList books={data}></BookList>
                </Wrapper>
            </Main>
        </Container>
    )
}

const Wrapper = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px 50px;
`;