import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const required = (value) => (value ? undefined : 'Required');

const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength10 = maxLength(10);
