import PropTypes from "prop-types";
export default function ContentCards({
  Handleedit = () => {},
  datas,
  Handleemail = () => {},
  Handledelete = () => {},
  Handlestreet = () => {},
  Handlewesbite = () => {},
  Handlephone = () => {},
}) {
  console.log(datas);

  return (
    <div>
      {
        <div className="card">
          <button
            onClick={(e) => {
              Handledelete(datas.id);
            }}
            className="deletebtn"
          >
            Delete
          </button>
          <div className="card-body">
            <h5 className="card-title"> Name :{datas.name}</h5>

            <p className="card-text">Email :{datas.email}</p>
            <p className="card-text"> Street:{datas.address.street}</p>
            <p className="card-text"> Phone:{datas.phone}</p>
            <p className="card-text"> Website:{datas.website}</p>
            <button
              onClick={(e) => {
                Handleedit(datas.id, "name");
              }}
              className="editname"
            >
              Edit Name
            </button>
            <button
              className="email"
              onClick={(e) => {
                Handleemail(datas.id, "name");
              }}
            >
              Edit Email
            </button>
            <button
              className="street"
              onClick={(e) => {
                Handlestreet(datas.id, "name");
              }}
            >
              Edit street
            </button>
            <button
              className="phone"
              onClick={(e) => {
                Handlephone(datas.id, "name");
              }}
            >
              Edit phone
            </button>
            <button
              className="website"
              onClick={(e) => {
                Handlewesbite(datas.id, "name");
              }}
            >
              Edit website
            </button>
          </div>
        </div>
      }
    </div>
  );
}
