import employees from "./employee.json";
import './CardEmployee.css'


  const EmployeeList = () => {
    return (
      <div className="conta">
        <h2>Empleados de la empresa cocreta</h2>
        <ul className="container-card">
          {employees.map((employee, index) => (
            <div key={index} className="card">
            <h3>{employee.name} {employee.lastName}</h3>
            <p><strong>Edad:</strong> {employee.age}</p>
            <p className="hobbies"><strong>Hobbies:</strong> {employee.hobbies.join(", ")}</p>
          </div>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EmployeeList;