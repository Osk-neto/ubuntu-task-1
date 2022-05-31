function SignUpInput(props) {
  return (
    <div className='grid-helper'>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        type={props.name === 'password'||'passwordConfirm' ? 'password': ''}
      />
      {props.formikErrors && props.formikTouched ? (
        <div className="errorMessage">{props.formikErrors}</div>
      ) : null}
    </div>
  );
}
export default SignUpInput;
