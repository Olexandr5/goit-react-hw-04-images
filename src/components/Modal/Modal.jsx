import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ handleClose, src, alt }) => {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div
      className={css.Overlay}
      onClick={e => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className={css.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
Modal.propTypes = {
  src: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};
