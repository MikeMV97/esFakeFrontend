import { StyledLabel, StyledFileInput } from './styles'
import PropTypes from 'prop-types'

export const InputFile = ({ name, onChange, accept }) => {
  return (
    <>
      <StyledLabel htmlFor="upload-photo"></StyledLabel>
      <StyledFileInput type="file" name={name} id="upload-photo" onChange={onChange} accept={accept}/>
    </>
  )
}

InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
}
