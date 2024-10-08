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
        if (e.target.name === 'name' || e.target.name === 'surname') {
            if (e.target.value.match(/\d/g)) {
                return
            }
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validateForm = () => {
        const {name, salary, surname} = this.state
        if (!name || !surname || !salary) {
            return false
        }
        if (name.length < 2 || surname.length < 2) {
            return false
        }
        return true
    }

    submitForm = (e) => {
        e.preventDefault()
        const {name, surname, salary} = this.state
        const id = Math.floor(Math.random() * 1000000)

        if (!this.validateForm()) return

        const newEmpl = {
            name,
            surname,
            salary,
            id,
            increase: false,
            promotion: false,
        }
        this.props.addItem(newEmpl)

        this.setState({
                name: '',
                surname: '',
                salary: '',
            })
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
                        className={"form-control new-post-label"}
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
