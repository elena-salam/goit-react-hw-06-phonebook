import React from 'react';
import {connect} from 'react-redux';
import styles from './ContactListItem.module.css';
import contactsActions from '../../redux/contacts/contactsActions';
import PropTypes from 'prop-types';


function ContactListItem({ name, number, onRemove }) {
  return (
    <li className={styles.item}>
      <span className={styles.span}>
        {name}: {number}
      </span>
      <button className={styles.button} type="button" onClick={onRemove}>
        X
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onRemove: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => {
  const contact = state.contacts.items.find(contact => contact.id === ownProps.id);

  return {
    ...contact
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsActions.removeContact(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);