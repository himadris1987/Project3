import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import "./style.css"

function Logins() {

  const [loadUser, setLoadUser] = useState({ email: "", password: "" });

  // Load all books and store them with setBooks

  // Loads all books and sets them to books

  // Handles updating component state when the user types into the input field

  // likely to be in the signup than login
  const { id } = useParams()
  useEffect(() => {
    API.getUser(id)
      .then(res => setLoadUser(res.data))
      .catch(err => console.log(err));
  }, [])

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const passwordConfirm = event.target.getAttribute("data-value");
    if (passwordConfirm === loadUser.password) {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }

  return (
    <div className="container-fluid">
      <Jumbotron>
        <h1>Welcome to Final Phantasy</h1>
        <p>
          Please login below to continue your journey, if you are not a member please
          signup to get started.
        </p>
        <Button href="/signup">Sign up!</Button>
      </Jumbotron>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <br />
        <Button href="/main">Login</Button>
        <br />
        <hr />
      </Form>
    </div>
  );
}

export default Logins;