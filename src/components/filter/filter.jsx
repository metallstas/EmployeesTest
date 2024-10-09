import './filter.css'

const Filter = ({onFilter, filter}) => {
    const btnsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'promotion', label: 'На повышение'},
        {name: 'more', label: 'З/П больше 1000$'},
    ]

    const buttons = btnsData.map(({name, label}) => {
        const activeClass = filter === name ? 'btn-light' : 'btn-outline-light' 

        return  (<button 
                    className={`btn ${activeClass}`}
                    type="button"
                    key={name}
                    onClick={() => onFilter(name)}>
                        {label}
                </button>)
    })

    return (
        <div className="btn-group filter">
           {buttons}
        </div>
    )
}

export default Filter
