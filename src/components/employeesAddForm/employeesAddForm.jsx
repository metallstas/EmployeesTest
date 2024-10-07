import {Component} from 'react'
import './employeesAddForm.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            surname: '',
            salary: '',
        }
    }

    onValueChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        const {name, surname, salary} = this.state
        const id = Math.floor(Math.random() * 1000000)
        const newEmpl = {
            name,
            surname,
            salary,
            id,
            increase: false,
        }
        this.props.addItem(newEmpl)
    }

    render() {
        const {name, surname, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.submitForm}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Имя?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Фамилия?"
                        name="surname"
                        value={surname}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm
