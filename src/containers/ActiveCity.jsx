import React, {Component} from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const imgUrl = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
    return(
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <div>{this.props.activeCity.address}</div>
        <img src={imgUrl} alt={this.props.activeCity.name}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity)
