import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { YMaps, Map } from 'react-yandex-maps';
import { connect } from 'react-redux';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [55.75, 37.57],
      address: 'Томск, ул. Пушкина, д. 37'
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    let user = await this.props.state.user.patients.filter(el => el._id == id);
    let search = user[0].address.split(' ').join('+')
    const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=d3ef7404-46bf-4d41-a43d-0821ff5e462b&format=json&geocode=${search}`)
    const result = await response.json();
    let coords = await result.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')
    console.log(await coords);

    this.setState({
      center: [coords[1], coords[0]],
    });
  };

  render() {
    return (
      <YMaps query={{ lang: 'ru_RU', apikey: 'd3ef7404-46bf-4d41-a43d-0821ff5e462b' }}>
        <Map width={800} height={600} defaultState={{ center: this.state.center, zoom: 15, controls: [] }} />
      </YMaps>
    )
  }
}
const mapsStateToProps = (state) => ({ state })

export default connect(mapsStateToProps)(Maps)

