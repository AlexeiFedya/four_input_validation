import React from 'react';
import { ValidatePhone } from './ValidatePhone';
import './phone.css';

// Форма добавления задачи.
// Принимает от родительского компонента функцию onSave, которую вызывает
export class AddForm extends React.Component {
  state= {
    name: "",
    phone:""
  };
  

  render () {
    const isValidPhone = ValidatePhone(this.state.phone);

    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          className={isValidPhone || this.state.phone === "" ? "success" : "error"}
          type="text"
          placeholder="Enter your phone"
          maxLength="13"
          value={this.state.phone}
          name="name"
          onChange={e=>
            this.setState({
              phone: e.target.value
            })
          }
        />
        <input
        type='text'
        placeholder="Enter your name"
        value={this.state.name}
        onChange={e=>
          this.setState({
            name: e.target.value
          })
        }  
        />
        <button 
        onClick={() => {
          if (this.state.name && this.state.name.trim () && this.state.phone && this.phone.trim()) {
            this.setState({name: ""});
            this.setState({phone:""});
            this.props.onSave(this.state.name, this.state.phone);
          }
        }}
        >
          Add
        </button>
      </form>
    );
  }
}

