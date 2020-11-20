import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import itemTransition from './itemTransition.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ContactsList({ contacts }) {
  return (
    <TransitionGroup component="ul">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} classNames={itemTransition} timeout={250}>
          <ContactListItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );
  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactsList);