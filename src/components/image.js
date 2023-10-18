import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Images() {
  const apiUrl = 'https://picsum.photos/v2/list';
  const limit = 9; // Change this to the number of images per page

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
 const [i,setI]=useState(9)
  useEffect(() => {
    fetchImages();
    setI(i*page)
  }, [page]);

  const fetchImages = () => {
    fetch(`${apiUrl}?page=${page}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setImages([...images, ...data]);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  };

  const loadMore = () => {
   
    setPage(page + 1);
  };

  return (

   
       <><Container>
      <Row style={{ border: '1px solid' }}>
        <Col xs={3}>
          <div style={{ border: '1px solid', textAlign: 'center', margin: 'auto', marginTop: '5px', marginBottom: '5px' }}>Logo</div>
        </Col>
        <Col xs={9}>
          <div style={{ border: '1px solid', textAlign: 'center', width: '50%', marginLeft:'50px', marginTop: '5px', marginBottom: '5px' }}>
            Site Title
          </div>
        </Col>

      </Row>
      <Row style={{ border: '1px solid',height:'90px' }}>
        <Col style={{height:'30%'}}>
        <div style={{  textAlign: 'center', width: '50%', margin: 'auto', marginTop: '30px' }}>
        Header Image
        </div>
        </Col>

      </Row>
    </Container>
    <Container>
        <Row>

          {images.slice(0, i).map((image) => (
            <Col sm={4}>
              <div key={image.id} className="image-card">
                <img src={image.download_url} alt='' />
              </div>
            </Col>
          ))}
          
          
          

        </Row>


        

      </Container>

      <Container>
      <Row>
        <Col>
        <div style={{textAlign:'center'}}>
        <button onClick={loadMore} className="load-more-button">
            Load More
          </button>

        </div>
        
        </Col>
      </Row>
    </Container>
      
       </>

   
   
  );
}

export default Images;
