import { StyledInput, InputContainer } from './styles'
import PropTypes from 'prop-types'

export const InputText = ({name,type,label, icon, placeholder}) => {
    return(
        <InputContainer htmlFor={name}>
        <span>{label}</span>
        <StyledInput>
          {icon && <i className={icon} />}
          <input type={type} name={name} id={name} placeholder={placeholder}/>
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
}
