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
            ],
            term: '',
            filter: 'all'
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

    searchEmp = (arr, term) => {
        if (!term.length) {
            return arr
        }

        return arr.filter(el => el.name.indexOf(term) > -1)
    }

    onUpdateSearch = term => {
        this.setState({
            term,
        })
    }

    // searchEmplPromotion = () => {
    //     const newData = this.state.data.filter(el => el.promotion)
    // }
    showFilterEmployees = (arr, filter) => {
        switch (filter) {
            case 'promotion': 
                return arr.filter(el => el.promotion)
            case 'more':
                return arr.filter(el => el.salary >= 1000)
            default:
                return arr
        }
    }

    onFilter = filter => {
        this.setState({filter})
    }
    

    render() {
        const {data, term, filter} = this.state
        const rewardedEmployees = data.filter(item => item.increase).length
        const visibleData = this.showFilterEmployees(this.searchEmp(data, term), filter)

        return (
            <div className="app">
                <Info 
                    countOfEmployees={data.length}
                    rewardedEmployees={rewardedEmployees}/>
    
                <div className="searchPanel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <Filter onFilter={this.onFilter} filter={filter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
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