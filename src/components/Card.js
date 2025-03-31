'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Form from './form';
import { deleteFact } from '../api/facts';

export default function FactCard({ fact }) {
  const [localFact, setLocalFact] = useState(fact);
  const [editMode, setEditMode] = useState(false);

  const deleteIndFact = () => {
    deleteFact(fact.firebaseKey, 'Yes');
  };

  return (
    <Card>
      <Card.Body>
        {editMode ? (
          <>
            <p>EDIT MODE</p>
            <Form obj={localFact} func={setLocalFact} />
            <div>
              <button className="btn btn-success" type="button" onClick={() => setEditMode(false)}>
                EXIT EDIT
              </button>
            </div>
          </>
        ) : (
          <>
            {localFact.text}
            <div>
              <button className="btn btn-secondary" type="button" onClick={() => setEditMode(true)}>
                EDIT
              </button>
              <button className="btn btn-danger" type="button" onClick={deleteIndFact}>
                DELETE
              </button>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

FactCard.propTypes = {
  fact: PropTypes.string.isRequired,
};
