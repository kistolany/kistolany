import axios from "axios";
import { useState, useEffect } from "react";
import { Table, Button, Card, Modal, Form } from "react-bootstrap";

function CategoryPage() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState({});
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleClose = () => {
    setShow(false);
    setItem({});
    clearForm();
  };

  const handleCloseCreate = () => {
    setShowCreate(false);
    setItem({});
    clearForm();
  };

  const handleShow = (id) => {
    setDeleteId(id);
    setShow(true);
  };

  useEffect(() => {
    getList();
  }, []);

  const server = "http://localhost:8082/api/";

  const getList = () => {
    axios
      .get(server + "category")
      .then((res) => {
        const data = res.data;
        setList(data.list);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onDelete = () => {
    axios
      .delete(server + "category/" + deleteId)
      .then(() => {
        setShow(false);
        getList();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleShowCreate = () => {
    setShowCreate(true);
    setItem({});
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setStatus("");
  };

  const onSave = () => {
    handleCloseCreate();
    const param = {
      Name: name,
      Description: description,
      Parant_id: null,
      Status: status,
    };

    let url = server + "category";
    let method = "post";
    if (item.Category_id != null) {
      param.Category_id = item.Category_id;
      method = "put";
    }

    axios({
      url: url,
      method: method,
      data: param,
    }).then((res) => {
      if (res) {
        getList();
        clearForm();
      }
    });
  };

  const onEdit = (item) => {
    setItem(item);
    setName(item.Name);
    setDescription(item.Description);
    setStatus(item.Status);
    setShowCreate(true);
  };

  return (
    <div style={{ padding: 20 }}>
      <Card>
        <Card.Body>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Create</div>
            <div>
              <Button variant="primary" onClick={handleShowCreate}>
                New
              </Button>
            </div>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <td>{item.Category_id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Description}</td>
                  <td>{item.Status}</td>
                  <td>{new Date(item.Create_at).toLocaleString()}</td>
                  <td>
                    <Button variant="primary" onClick={() => onEdit(item)}>
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => handleShow(item.Category_id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      {/* Modal for delete confirmation */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for create/edit */}
      <Modal show={showCreate} onHide={handleCloseCreate}>
        <Modal.Header closeButton>
          <Modal.Title>
            {item.Category_id == null ? "Create" : "Update"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "Auto", borderColor: "green" }}>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    value={status}
                    onChange={(event) => {
                      setStatus(event.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreate}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={clearForm}>
            Clear
          </Button>
          <Button variant="primary" onClick={onSave}>
            {item.Category_id == null ? "Save" : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CategoryPage;
