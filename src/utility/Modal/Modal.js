import React from 'react';
import { Transition } from 'react-transition-group'
import './Modal.scss'
import { UserConsumer } from '../../Context'

const modal = (props) => {
  const transitionStyles = {
      entering: 1,
      entered:  1,
      exiting:  0,
      exited:  0,
    };

    const hideModal = (dispatch) => {
      dispatch({
        type: 'MODAL_HIDE',
      })
      setTimeout(() => {
        dispatch({
          type: 'HIDE_MESSAGE',
        })
      }, 500);
    }
    return(
      <UserConsumer>
        {({modalMessage, showModal, dispatch}) => {
          return(
            <Transition
              in={showModal}
              timeout={500}
              onEnter={node => node.offsetHeight}
              mountOnEntering
              unmountOnExit>
                {state => (
                  <div className="modalContainer" style={{
                    transition: 'opacity .5s ease-out',
                    opacity: transitionStyles[state]
                  }} >
                    <div className="backdrop" onClick={() => hideModal(dispatch)}>
                    </div>
                    <div id="modal" className="boxShadow">
                      <p>{modalMessage}</p>
                    </div>
                  </div>
                )}
            </Transition>
          )
        }}
      </UserConsumer>

    )

};

export default modal;
