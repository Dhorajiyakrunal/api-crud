import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Home() {
  const [data, setdata] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const Data = await axios({
      method: "GET",
      url: "http://localhost:3000/posts"
    })

    setdata(Data.data)
  }

  console.log(data);



  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>email</th>
          <th>password</th>
          <th>Button</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((i) => {
          return (
            <tr>
              <td>{i.id}</td>
              <td>{i.email}</td>
              <td>{i.password}</td>
              <td>
                <button onClick={()=>{}}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default Home;