import { StyledInput, InputContainer } from './styles'
import PropTypes from 'prop-types'

export const InputText = ({ name, type, label, icon, placeholder, value, onChange, disable = false, isRequired = false }) => {
  return (
    <InputContainer htmlFor={name}>
      <span>{label}</span>
      <StyledInput>
        {icon && <i className={icon} />}
        <input disabled={disable} type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} required={isRequired} autoComplete/>
      </StyledInput>
    </InputContainer>
  )
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  disable: PropTypes.bool,
  isRequired: PropTypes.bool
}
