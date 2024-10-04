import EmployeesListItem from "../employeesListItem/employeesListItem"
import './employeesList.css'

const EmployeesList = ({data}) => {
    
    const elements = data.map(({id, ...itemProps}) => {
        return <EmployeesListItem key={id} {...itemProps}/>
    })
    return (
        <ul 
            className="list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList
