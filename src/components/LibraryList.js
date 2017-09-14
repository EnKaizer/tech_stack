/**
 * Created by caiqu on 07/09/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

	componentWillMount = () => {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})

		this.DataSource = ds.cloneWithRows(this.props.LibraryList);
	}

	renderRow = (library) => {
		return <ListItem text={library}/>
	}

    render(){
        console.log(this.props);

        return (

        	<ListView
        		dataSource={this.DataSource}
        		renderRow={this.renderRow}
        	/>
        )
    }
}

const mapStateToProps = state => {
  return {LibraryList: state.libraries}
};

export default connect(mapStateToProps)(LibraryList);