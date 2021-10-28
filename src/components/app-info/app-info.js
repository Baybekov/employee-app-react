

import './app-info.css'

const companyName = "Mykola";

const AppInfo = () => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании {companyName}</h1>
            <h2>Общее количество сотрудников: </h2>
            <h2>Премию получат: </h2>
        </div>
    );
}

export default AppInfo;