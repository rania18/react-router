import { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

function Add({ newMovie, setNewMovie, AddMovie }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="text"
            placeholder="title"
            name="title"
            className="mr-sm-2"
            onChange={handleChange}
          />
          <FormControl
            type="text"
            placeholder="description"
            name="description"
            className="mr-sm-2"
            onChange={handleChange}
          />
          <FormControl
            type="text"
            placeholder="Image"
            name="Image"
            className="mr-sm-2"
            onChange={handleChange}
          />
          <FormControl
            type="text"
            placeholder="rate"
            name="rate"
            className="mr-sm-2"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              AddMovie(newMovie);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;
