import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'


class CreatePatient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      age: undefined,
      sex: '',
      address: '',
      phone: '',
      diagnosis: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, surname, age, sex, address, phone, diagnosis } = this.state;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, surname, age, sex, address, phone, diagnosis })
    }
    const response = await fetch('/patient', requestOptions)
    const result = await response.json();
    console.log(result);
    // if (result.patient) {
    //   this.props.recieveUser(await result.user);
    //   this.props.history.push('/profile')
    // }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Col><h1 style={{ textAlign: 'center', color: "#047B7C" }}>Регистрация пациента</h1>
          <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
        </Col>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm={2}>
              Имя
            </Form.Label>
            <Col sm={10}>
              <Form.Control name="name" type="text" placeholder="Имя пациента" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="surname">
            <Form.Label column sm={2}>
              Фамилия
          </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="surname" placeholder="Фамилия пациента" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="age">
            <Form.Label column sm={2}>
              Возраст
         </Form.Label>
            <Col sm={10}>
              <Form.Control name="age" type="number" min="1" max="120" placeholder="Возраст пациента" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} controlId="sex">
              <Form.Label as="legend" column sm={2}>
                Пол пациента
            </Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  custom
                  type="radio"
                  label="Мужчина"
                  value="Мужчина"
                  name="sex"
                  id="sex-men"
                  onChange={this.handleChange}
                />
                <Form.Check
                  inline
                  custom
                  type="radio"
                  label="Женщина"
                  value="Женщина"
                  name="sex"
                  id="sex-woman"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} controlId="address">
            <Form.Label column sm={2}>
              Адрес
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="address" placeholder="Местонахождения пациента (город, улица, дом)" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="phone">
            <Form.Label column sm={2}>
              Телефон
          </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="phone" placeholder="Номер телефона пациента" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="diagnosis">
            <Form.Label column sm={2}>
              Диагноз
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="diagnosis" placeholder="Диагноз пациента (деменция, рак и т.д.)" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button style={{ backgroundColor: "#047B7C" }} type="submit">Добавить</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>)
  }
}
export default CreatePatient