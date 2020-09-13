import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Form from './Form';
import Spinner from '../Spinner';
import { success } from '../../actions/member/create';
import { retrieve, update, reset } from '../../actions/member/update';
import { loading, error } from '../../actions/member/delete';
import { delayRefresh } from '../../services/helpers';


class Update extends Component {

  componentDidMount() {
    this.props.retrieve(this.props.id);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  onSubmit = (item, values) => {
    this.props.update(item, values);
    Actions.pop();
    delayRefresh();
  };

  render() {

    if (this.props.deleted) return Actions.pop();

    const item = this.props.updated ? this.props.updated : this.props.retrieved;

    const {viewStyle, textStyleAlert, textStyleSuccess} = styles;

    return (
        <View style={ {flex: 1} }>
          <ScrollView keyboardShouldPersistTaps='always'>
            {this.props.created && <View style={viewStyle}><Text style={textStyleAlert}>{this.props.created['@id']} created.</Text></View>}
            {this.props.updated && <View style={viewStyle}><Text style={textStyleSuccess}>{this.props.updated['@id']} updated</Text></View>}
            {(this.props.retrieveLoading || this.props.updateLoading) && <View style={viewStyle}><Spinner size='large'/></View>}
            {this.props.retrieveError && <View style={viewStyle}><Text style={textStyleAlert}>{this.props.retrieveError}</Text></View>}
            {this.props.updateError && <View style={viewStyle}><Text style={textStyleAlert}> {this.props.updateError}</Text></View>}
            {item && <Form mySubmit={values => this.onSubmit(item, values)} initialValues={item}/>}
          </ScrollView>
        </View>
    );
  }
}

const mapStateToProps = state => ({
  retrieveError: state.member.update.retrieveError,
  retrieveLoading: state.member.update.retrieveLoading,
  updateError: state.member.update.updateError,
  updateLoading: state.member.update.updateLoading,
  created: state.member.create.created,
  deleted: state.member.del.deleted,
  retrieved: state.member.update.retrieved,
  updated: state.member.update.updated,
});

const mapDispatchToProps = dispatch => {
  return {
    retrieve: id => dispatch(retrieve(id)),
    update: (item, values) => dispatch(update(item, values)),
    reset: () => dispatch(reset()),
  };
};

const styles = {
  viewStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
  textStyleAlert: {
    color: 'red',
    textAlign: 'center',
  },
  textStyleSuccess: {
    color: 'green',
    textAlign: 'center',
  },
};

Update.propTypes = {
  retrieveError: PropTypes.string,
  retrieveLoading: PropTypes.bool.isRequired,
  updateError: PropTypes.string,
  updateLoading: PropTypes.bool.isRequired,
  retrieved: PropTypes.object,
  updated: PropTypes.object,
  deleted: PropTypes.object,
  retrieve: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  id: PropTypes.string,
  created:PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);