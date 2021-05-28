import React from 'react';

export const Textarea = (props) => {
  console.log('Textarea render', props.meta.touched, props.meta.error, props);
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div>
      <div>
        <textarea {...props.input} />
      </div>
      <div>{hasError && <span>{props.meta.error}</span>}</div>
    </div>
  );
};

export const Input = (props) => {
  console.log('Input render', props.meta.touched, props.meta.error, props);
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div>
      <div>
        <input {...props.input} />
      </div>
      <div>{hasError && <span>{props.meta.error}</span>}</div>
    </div>
  );
};
