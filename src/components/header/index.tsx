import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as EditorActions from '../../actions/editor';
import { State } from '../../constants/default-state';
import Renderer from './renderer';

export function mapStateToProps(state: State, ownProps) {
  return {
    editorString: state.editorString,
    isAuth: state.isAuth,
    lastPosition: state.lastPosition,
    manualParse: state.manualParse,
    mode: state.mode,
    vegaLiteSpec: state.vegaLiteSpec,
    vegaSpec: state.vegaSpec,
    view: state.view,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EditorActions.Action>) {
  return bindActionCreators(
    {
      exportVega: EditorActions.exportVega,
      formatSpec: EditorActions.formatSpec,
      isLoggedIn: EditorActions.isLoggedIn,
      parseSpec: EditorActions.parseSpec,
      receiveCurrentUser: EditorActions.receiveCurrentUser,
      setScrollPosition: EditorActions.setScrollPosition,
      toggleAutoParse: EditorActions.toggleAutoParse,
      updateVegaSpec: EditorActions.updateVegaSpec,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Renderer);
