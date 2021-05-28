import React from 'react';
import styles from './FormControls.module.css';

export const Element = ({ input, children, meta: { touched, error } }) => {
  console.log('Element render', touched, error);
  const hasError = touched && error;
  return (
    <div>
      <div
        className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}
      >
        {children}
        {hasError && <span>{error}</span>}
      </div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <Element {...props}>
      <textarea {...input} {...restProps} />
    </Element>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <Element {...props}>
      <input {...input} {...restProps} />
    </Element>
  );
};

// export const Textarea = (props) => {
//   console.log('Textarea render', props.meta.touched, props.meta.error, props);
//   const hasError = props.meta.touched && props.meta.error;
//   return (
//     <div>
//       <div>
//         <textarea {...props.input} />
//       </div>
//       <div>{hasError && <span>{props.meta.error}</span>}</div>
//     </div>
//   );
// };

// export const Input = (props) => {
//   console.log('Input render', props.meta.touched, props.meta.error, props);
//   const hasError = props.meta.touched && props.meta.error;
//   return (
//     <div>
//       <div>
//         <input {...props.input} />
//       </div>
//       <div>{hasError && <span>{props.meta.error}</span>}</div>
//     </div>
//   );
// };
