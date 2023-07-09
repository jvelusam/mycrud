import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Tab,Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read()

{

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6428e084ebb1476fcc3f89be.mockapi.io/fakedata`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = () => {
        axios.get(`https://6428e084ebb1476fcc3f89be.mockapi.io/fakedata`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://6428e084ebb1476fcc3f89be.mockapi.io/fakedata/${id}`)
        .then(() => {
            getData();
        })
    }
     
return(<div>

    <Table singleLine>

    <Table.Header>
        <Table.Row>
        <Table.HeaderCell>S.No</Table.HeaderCell>
        <Table.HeaderCell>firstName</Table.HeaderCell>
        <Table.HeaderCell>LastName</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
    </Table.Header>
<Table.Body>
{ APIData.map((data)=>{
return(
<Table.Row>
<Table.Cell>{data.id}</Table.Cell>
<Table.Cell>{data.firstName}</Table.Cell>
<Table.Cell>{data.lastName}</Table.Cell>
<Link to='/Update'>
  <Table.Cell> 
     <Button  onClick={() => setData(data)}>Update</Button>
   </Table.Cell>
</Link>
<Table.Cell> 
     <Button  onClick={() => onDelete(data.id)}>Delete</Button>
   </Table.Cell>
</Table.Row>

)})

}
   
</Table.Body>
    </Table>

    
</div>)

}