import EmployeesListItem from "../employeesListItem/employeesListItem"
import './employeesList.css'

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    
    const elements = data.map(({id, ...itemProps}) => {
        return <EmployeesListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                />
    })
    return (
        <ul 
            className="list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList
