import './employeesListItem.css'

const EmployeesListItem = (props) => {

    const {name, surname, salary, onDelete, onToggleProp, increase, promotion} = props
    const isIncrease = increase ? 'increase' : ''
    const isPromotion = promotion ? 'like' : '' 

    return (
        <li className={"list-group-item d-flex justify-content-between " + isIncrease + ` ${isPromotion}`}>
            <span 
                className="list-group-item-label"
                data-toggle="promotion"
                onClick={onToggleProp}>
                    {name} {surname}
                </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle="increase"
                    onClick={onToggleProp}>
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
    )
}

export default EmployeesListItem
