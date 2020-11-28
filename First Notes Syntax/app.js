function Person(props) {
    return(
        <div className="person">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name="Colby" age="25"/>,
        <Person name="Linnea" age="27"/>
    </div>  
)

ReactDOM.render(app, document.querySelector('#app'));