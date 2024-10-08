import './info.css'

const Info = ({countOfEmployees, rewardedEmployees}) => {

    return (
        <div className="info">
            <h1>Учет сотрудников в компании ЮСАТ</h1>
            <h2>Общее число сотрудников: {countOfEmployees}</h2>
            <h2>Премию получат: {rewardedEmployees}</h2>
        </div>
    )
}

export default Info
