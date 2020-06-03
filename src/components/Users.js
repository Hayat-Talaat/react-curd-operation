import React, { useState, useEffect } from "react";
import { Jumbotron, Container, Row, Col, Table, Button } from "react-bootstrap";
import UserForm from "./UserForm";
import firebaseDb from "../firebase";

const Users = () => {
  let [userObjects, setUserObjects] = useState({});
  let [users, setUsers] = useState([]);

  useEffect(() => {
    // firebaseDb.child("users").on("value", snapshot => {
    //   if (snapshot.val() != null) {
    //     console.log("snapshot", snapshot.val());
    //     setUserObjects({
    //       ...snapshot.val()
    //     });
    //   }
    // });

    const fetchData = async () => {
      const db = firebaseDb.firestore();
      const data = await db.collection("users").get();
      console.log("data test", data);
      setUsers(
        data.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          };
        })
      );
      console.log("data test", data);
    };

    fetchData();
  }, []);

  const addOrEdit = obj => {
    // firebaseDb.child("users").push(obj, err => {
    //   if (err) {
    //     console.log("there is an error", err);
    //   }
    // });
    // console.log("add or edit");
      
            const db = firebaseDb.firestore();
      db.collection("users").add(obj); 
  };

  const onDelete = id => {
    const db = firebaseDb.firestore();
    db.collection("users")
      .doc(id)
      .delete();
  };

  return (
    <>
      <Jumbotron fluid className="text-center">
        <Container>
          <h1>Users Register</h1>
        </Container>
      </Jumbotron>

      <Row>
        <Col sm={4}>
          <UserForm addOrEdit={addOrEdit} />
        </Col>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => {
                return (
                  <tr key={user.fullName}>
                    <td>{user.fullName}</td>
                    <td>{user.mobile}</td>
                    <td>{user.email}</td>
                    <td>{user.adress}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => onDelete(user.id)}
                      >
                        delete
                      </Button>
                    </td>
                  </tr>
                );
              })}

              {/* {Object.keys(userObjects).map(id => {
                return (
                  <tr key={id}>
                    <td>{userObjects[id].fullName}</td>
                    <td>{userObjects[id].mobile}</td>
                    <td>{userObjects[id].email}</td>
                    <td>{userObjects[id].adress}</td>
                    <td>
                      <Button variant="primary">Edit</Button>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                );
              })} */}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default Users;
