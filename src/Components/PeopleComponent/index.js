import React from 'react';

// Container
import PeopleContainer from '../../Containers/PeopleContainer';

class PeopleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getPeoPle = props.getPeoPle.bind(this);
    this.filterPeople = props.filterPeople.bind(this);
  }

  componentDidMount() {
    this.getPeoPle();
  }


  handleFilter = event => {
    this.filterPeople(event.target.value);
  }

  render () {
    const { allPeople } = this.props;

    return (
      <React.Fragment>
        <input
          placeholder="Tìm kiếm từ khoá"
          onChange={this.handleFilter}
        />
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
