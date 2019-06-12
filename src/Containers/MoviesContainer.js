// Connect redux with components
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(props) {
  return {

  }
}

export default function MoviesContainer(HOC) {
  return connect(mapStateToProps, mapDispatchToProps)(HOC);
}

