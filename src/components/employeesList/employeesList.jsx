import EmployeesListItem from "../employeesListItem/employeesListItem"
import './employeesList.css'

const EmployeesList = ({data, onDelete}) => {
    
    const elements = data.map(({id, ...itemProps}) => {
        return <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}/>
    })
    return (
        <ul 
            className="list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList
