import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

import ContentCards from "./componnets/contentCards";

function App() {
  const [dataApi, setDataApi] = useState([]);

  //Using Axios to fetch datas //
  useEffect(() => {
    const api = "https://jsonplaceholder.typicode.com/users";

    axios.get(api).then((datas) => {
      setDataApi(datas.data);
    });
  }, []);

  function Handleedit(id) {
    var newname = prompt("enter name");
    console.log(id);

    var copydatas = [...dataApi];
    const editeddetails = dataApi.map((datas) => {
      if (id === datas.id) {
        return {
          ...datas,
          name: newname,
        };
      } else {
        return datas;
      }
    });

    setDataApi(editeddetails);
  }

  function Handleemail(id) {
    var newemail = prompt("enter email");
    console.log(id);

    var copydatas = [...dataApi];
    const editeddetails = dataApi.map((datas) => {
      if (id === datas.id) {
        return {
          ...datas,
          email: newemail,
        };
      } else {
        return datas;
      }
    });

    setDataApi(editeddetails);
  }
  function Handlephone(id) {
    var newphone = prompt("enter phone");
    console.log(id);

    var copydatas = [...dataApi];
    const editeddetails = dataApi.map((datas) => {
      if (id === datas.id) {
        return {
          ...datas,
          phone: newphone,
        };
      } else {
        return datas;
      }
    });

    setDataApi(editeddetails);
  }
  function Handlewebsite(id) {
    var newwebsite = prompt("enter website");
    console.log(id);

    var copydatas = [...dataApi];
    const editeddetails = dataApi.map((datas) => {
      if (id === datas.id) {
        return {
          ...datas,
          website: newwebsite,
        };
      } else {
        return datas;
      }
    });

    setDataApi(editeddetails);
  }

  function Handlestreet(id) {
    var newstreet = prompt("enter street");
    console.log(id);

    var copydatas = [...dataApi];
    const editeddetails = dataApi.map((datas) => {
      if (id === datas.id) {
        return {
          ...datas,
          address: {
            ...datas.address,
            street: newstreet,
          },
        };
      } else {
        return datas;
      }
    });

    setDataApi(editeddetails);
  }
  function Handledelete(id) {
    console.log(id);

    var copydatas = [...dataApi];
    const editeddetails = dataApi.filter((datas) => {
      if (datas.id != id) return datas;
    });

    console.log(editeddetails);

    setDataApi(editeddetails);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            {dataApi.map((data, index) => (
              <ContentCards
                key={index}
                datas={data}
                Handleedit={Handleedit}
                Handledelete={Handledelete}
                Handleemail={Handleemail}
                Handlestreet={Handlestreet}
                Handlewesbite={Handlewebsite}
                Handlephone={Handlephone}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
