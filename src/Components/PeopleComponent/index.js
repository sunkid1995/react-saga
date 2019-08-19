import React from 'react';

// Container
import PeopleContainer from '../../Containers/PeopleContainer';

class PeopleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getPeoPle = props.getPeoPle.bind(this);
  }

  componentDidMount() {
    this.getPeoPle();
  }

  render () {
    const { allPeople } = this.props;

    return (
      <React.Fragment>
        {allPeople &&
          allPeople.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <p>
                  <span>name:</span>
                  {item.name}
                </p>
                <p>
                  <span>mass:</span>
                  {item.mass}
                </p>
              </React.Fragment>
            );
          })
        }
      </React.Fragment>
    );
  }
}

export default PeopleContainer(PeopleComponent);
