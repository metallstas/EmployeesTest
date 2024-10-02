import Info from '../info/info'
import SearchPanel from '../searchPanel/searchPanel'
import Filter from '../filter/filter'
import EmployeesList from '../employeesList/employeesList'
import EmployeesAddForm from '../employeesAddForm/employeesAddForm'
import './app.css'


function App() {
    return (
        <div className="app">
            <Info/>

            <div className="searchPanel">
                <SearchPanel/>
                <Filter/>
            </div>

            <EmployeesList/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App