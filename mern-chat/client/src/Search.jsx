import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import http from '../../api/http';
import formatDate from '../../api/formatDate';
// Here we import the new components for the seach bar
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Search = () => {
  const [posts, setPosts] = useState([]); 
  useEffect(() => {
    async function fetchData() {
      const { data } = await http.get('/search');
      setPosts(data.data.posts);
    }
    fetchData();
  }, []);
  /* We are creating a new function that calls the API endpoint
     and passing the search value as a query parameter
  */
  const searchPost = async (e) => {
    const searchValue = e.target.value;
    const { data } = await http.get(`/search?search=${searchValue}`);
    // The subset of posts is added to the state that will trigger a re-render of the UI
    setPosts(data.data.posts); 
  };
  
  return (
    <>
      <Container className="my-5" style={{ maxWidth: '800px' }}>
        <Image
          src="avatar.jpeg"
          width="150"
          style={{ borderRadius: '50%' }}
          className="d-block mx-auto img-fluid"
        />
        <h2 className="text-center">Welcome to the Digital Marketing blog</h2>
        // Let's add the search bar under the subheader
        <Form>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-5"
            aria-label="Search"
            onChange={searchPost} // onChange will trigger "search post"
          />
        </Form>
      </Container>
      <Container style={{ maxWidth: '800px' }}>
        <ListGroup variant="flush" as="ol">
          {
            posts.map((post) => {
              
            })
          }
        </ListGroup>
      </Container>
    </>
  );
};

export default Search;