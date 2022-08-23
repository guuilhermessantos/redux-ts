import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux'

import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import { ApplicationState } from '../../store'

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {

}

interface OwnProps {

}
type Props = StateProps & DispatchProps & OwnProps

function RepositoryList (props: Props) {
  const { repositories } = props
  return(
    <ul>
    
    </ul>

  ) 
}
const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
})

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps)(RepositoryList);