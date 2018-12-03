import React from 'react';
import getData from './data';
import { connect } from 'react-redux';

// const id = this.props.match.id;

class ViewItemBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id : props.match.params.id,
                  data: {}};
  }
  state = {};

  componentDidMount() {
    const coba = getData(10);
    this.setState((prevState) => {
      return {data: coba[prevState.id -1]};
    });  
  }

  render() {
    let { user } = this.props;
    console.log(user.jwt);
    return (
      <div className="card">
        <div className="content">
          <div className="col-md-5">
            {user.jwt}
          </div>
          <table className="table table-hover table-striped">
            <tbody>
              <tr>
                <th>ID</th>
                <td>{this.state.id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{this.state.data.name}</td>
              </tr>
              <tr>
                <th>Parent</th>
                <td>{this.state.data.parent}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } 
}

const mapStateToProps = state => ({
  user: state.Auth.user
});

export default connect(mapStateToProps) (ViewItemBank);