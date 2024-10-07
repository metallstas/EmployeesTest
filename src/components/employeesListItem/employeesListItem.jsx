import { Component } from 'react'
import './employeesListItem.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            increase: false,
            promotion: false,
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    promotion = () => {
        this.setState(({promotion}) => ({
            promotion: !promotion
        }))
    }

    render() {
    const {name, surname, salary, onDelete} = this.props
    const {increase, promotion} = this.state

    const isIncrease = increase ? 'increase' : ''
    const isPromotion = promotion ? 'like' : '' 

    return (
        <li className={"list-group-item d-flex justify-content-between " + isIncrease + ` ${isPromotion}`}>
            <span 
                className="list-group-item-label"
                onClick={this.promotion}>
                    {name} {surname}
                </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={this.onIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )}
}

export default EmployeesListItem
