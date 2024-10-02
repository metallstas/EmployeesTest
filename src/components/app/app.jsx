import Info from '../info/info'
import SearchPanel from '../searchPanel/searchPanel'
import Filter from '../filter/filter'
import EmployeesList from '../employeesList/employeesList'
import EmployeesAddForm from '../employeesAddForm/employeesAddForm'
import './app.css'


function App() {
    const data = [
        {name: 'John', surname: 'Smith', salary: 1500, increase: true},
        {name: 'Artur', surname: 'Morgan', salary: 350, increase: true},
        {name: 'Alex', surname: 'Vakovski', salary: 890, increase: false},
    ]

    return (
        <div className="app">
            <Info/>

            <div className="searchPanel">
                <SearchPanel/>
                <Filter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App