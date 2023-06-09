import Head from 'next/head'
import {
    Container,
    Main,
} from '../components/sharedstyles'
import styled from 'styled-components'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link'

// General data-fetching function
const fetcher = url => fetch(url).then(r => r.json());

export default function BookDetail() {
    const router = useRouter();     // Get access to our router object
    const {title} = router.query;   // Get access to end of URL
    
    const { data, error } = useSWR(`/api/books/${title}`, fetcher);

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
            No book found by that title, sorry :(
        </Main>
    }
    
    const bookData = data[0];
    return (
        <Container>
            <Head>
                <title>Betterreads</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <Wrapper>
                    <BookHeader>
                        <h1>{bookData.title}</h1>
                        <p className="author">by <Link className="author-link" href={`/author/${bookData.author}`}>{bookData.author}</Link></p>
                    </BookHeader>
                    <BookDetails>
                        <p><span className="label">Publish Date</span>: {bookData.year}</p>
                        <p><span className="label">Page Count</span>: {bookData.pages}</p>
                        <p><span className="label">Language</span>: {bookData.language}</p>
                        <p><span className="label">Country</span>: {bookData.country}</p>
                        <BookLinks>
                            <li><a href={bookData.link} target="_blank">Learn More</a></li>
                            <li><Link href="/">Go Back</Link></li>
                        </BookLinks>

                    </BookDetails>
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

const BookHeader = styled.header`
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
    
    .author-link {
        color: #45b3e0;
        transition: color 0.1s ease;
    }
    
    .author-link:hover {
        color: #87ceeb;
        text-decoration: underline;
    }
`;

const BookDetails = styled.main`
    .label {
        font-weight: bold;
    }
`;

const BookLinks = styled.ul`
    box-sizing: border-box;
    text-align: center;
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 5px;
    flex-direction: column;
    
    
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
