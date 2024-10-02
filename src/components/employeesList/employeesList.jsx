import EmployeesListItem from "../employeesListItem/employeesListItem"
import './employeesList.css'

const EmployeesList = () => {
    return (
        <ul 
            className="list list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    )
}

export default EmployeesList
