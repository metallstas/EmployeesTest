import { Component } from 'react'

import Info from '../info/info'
import SearchPanel from '../searchPanel/searchPanel'
import Filter from '../filter/filter'
import EmployeesList from '../employeesList/employeesList'
import EmployeesAddForm from '../employeesAddForm/employeesAddForm'

import './app.css'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'John', surname: 'Smith', salary: 1500, promotion: true, increase: true, id: 1},
                {name: 'Artur', surname: 'Morgan', salary: 350, promotion: false, increase: true, id: 2},
                {name: 'Alex', surname: 'Vakovski', salary: 890, promotion: false, increase: false, id: 3},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const newData = data.filter(el => {
                return el.id !== +id
            })

            return {
                data: newData
            }
        })
    }

    addItem = (newEmployee) => {
        this.setState(({data}) => {
            const newData = [...data, newEmployee]
            return {
                data: newData
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(el => {
                if (el.id === id) {
                    return {...el, [prop]: !el[prop]}
                }
                return el
            })
        }))
    }

    render() {
        const {data} = this.state
        const rewardedEmployees = data.filter(item => item.increase).length

        return (
            <div className="app">
                <Info 
                    countOfEmployees={data.length}
                    rewardedEmployees={rewardedEmployees}/>
    
                <div className="searchPanel">
                    <SearchPanel/>
                    <Filter/>
                </div>
    
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployeesAddForm
                    addItem={this.addItem}/>
            </div>
        )
    }
}

export default App