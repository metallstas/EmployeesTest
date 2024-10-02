import EmployeesListItem from "../employeesListItem/employeesListItem"
import './employeesList.css'

const EmployeesList = ({data}) => {

    const elements = data.map((el) => {
        return <EmployeesListItem {...el}/>
    })
    return (
        <ul 
            className="list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList
