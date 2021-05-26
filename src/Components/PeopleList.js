import React from 'react';

const PeopleList = (props) =>{
    const list = props.people.map((data)=>{
        return(
            <div key={data.id}>
                <p>Name : {data.first_name} {data.last_name}</p>
                <p>Gender : {data.gender}</p>
                <p>Email : {data.email}</p>
                <hr/>
            </div>
        );
    })
return(
    <div>
        <center>
            <h2> Your Future Friendz </h2>
        </center>  
        {list}      
    </div>

);
}

export default PeopleList


/*
const PeopleList = (props) =>{
    const list = props.people.map((data) =>{
        return(
            <div key={data.id}>
                <h3>{data.first_name} {data.last_name}</h3>
                <p>{data.gender}</p>
                <p>{data.email}</p>
            </div>
        );
    })
    return(
        <div>
            <h2> Your Future Friendz </h2>
            {list}
        </div>
    );
}
*/