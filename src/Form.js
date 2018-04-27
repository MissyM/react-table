import React from "react";
import TextField from 'material-ui/TextField'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  formStyles: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  contentFields: {
    padding: '10px',
    margin: '0px 10px',
  },
  typeIdSelect: {
    width: '50px',
    marginBottom: '-5px',
    fontSize: '13px'
  },
  contentSelect:{
    width: '256px',
    display: 'inline-flex'
  },
  btnContentStyles: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  
};

export default class Form extends React.Component {
  state = {
    fullName: "",
    //fullNameError: "",
    phone: "",
    //phoneError: "",
    email: "",
    emailError: "",
    typeId: 1,
    id: "",
    idError: "",
    password: "",
    //passwordError: "",
    confirmPassword: "",
    //confirmPasswordError: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  selectTypeIdChange = (e, idx, val) => {
    this.props.onChange({ typeId: val });
    this.setState({
      typeId: val
    })
  }  
  validate = () => {
    let isError = false
    const errors = {}

    if (this.state.id.length <= 6) {
      isError = true
      errors.idError = "Debe tener mas de 6 dígitos" 
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true
      errors.emailError = "Se requiere un email valido"
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      })
    }

    return isError
  }

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate()
    if (!err) {
      //Limpia el formulario
      this.setState({
        fullName: "",
        phone: "",
        email: "",
        typeId: 1,
        id: "",
        password: "",
        confirmPassword: ""
      });
      this.props.onChange({
        fullName: "",
        phone: "",
        email: "",
        typeId: 1,
        id: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  render() {
    return (
      <form style={styles.formStyles}>
        <h1>DATOS DEL CLIENTE</h1>
        <div style={styles.formContainer}>
          <div style={styles.contentFields}>
            <TextField
              name="fullName"
              hintText="Nombre Completo"
              floatingLabelText="Nombres y Apellidos"
              value={this.state.fullName}
              onChange={this.change}
              //errorText={this.state.fullNameError}
            /><br />
            <TextField
              name="phone"
              type='number'
              hintText="Teléfono"
              floatingLabelText="Número Telefónico"
              value={this.state.phone}
              onChange={this.change}
              //errorText={this.state.phoneError}
            /><br />
            <TextField
              name="email"
              hintText="nombre@correo.com"
              floatingLabelText="Email"
              value={this.state.email}
              onChange={this.change}
              errorText={this.state.emailError}
            /><br />
          </div>
          <div style={styles.contentFields}>
            <div style={styles.contentSelect}>
              <SelectField
                name="typeId"
                floatingLabelText="Doc "
                value={this.state.typeId}
                onChange={this.selectTypeIdChange}
                style={styles.typeIdSelect}
                >
                <MenuItem value={1} primaryText="CC" />
                <MenuItem value={2} primaryText="CE" />
              </SelectField>
              <TextField
                name="id"
                type='number'
                hintText="Identificación"
                floatingLabelText="Número"
                value={this.state.id}
                onChange={this.change}
                errorText={this.state.idError}
              />
            </div><br />
            <TextField
              name="password"
              type= 'password'
              hintText="Más de cinco dígitos"
              floatingLabelText="Contraseña"
              value={this.state.password}
              onChange={this.change}
              //errorText={this.state.passwordError}
            /><br />
            <TextField
              name="confirmPassword"
              type= 'password'
              hintText="Repita su contraseña"
              floatingLabelText="Confirmar Contraseña"
              value={this.state.confirmPassword}
              onChange={this.change}
              //errorText={this.state.confirmPasswordError}
            /><br />
          </div>
        </div>
        <div style={styles.btnContentStyles}>
          <RaisedButton label="Ingresar" primary onClick={this.onSubmit}/>
        </div>
      </form>
    );
  }
}
