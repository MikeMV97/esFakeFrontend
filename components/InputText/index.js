import { StyledInput, InputContainer } from './styles'
import PropTypes from 'prop-types'

export const InputText = ({ name, type, label, icon, placeholder, value, onChange }) => {
  return (
    <InputContainer htmlFor={name}>
      <span>{label}</span>
      <StyledInput>
        {icon && <i className={icon} />}
        <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} />
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
  onChange: PropTypes.func.isRequired
}
