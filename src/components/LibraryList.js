/**
 * Created by caiqu on 07/09/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class LibraryList extends Component {

    render(){
        console.log(this.props);

        return;
    }
}

const mapStateToProps = state => {
  return {LibraryList: state.libraries}
};

export default connect(mapStateToProps)(LibraryList);