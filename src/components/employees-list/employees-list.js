import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employee-list.css';


const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        return (
            <EmployeesListItem  {...item}/> //name={item.name} salary={item.salary}
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;