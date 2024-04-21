import React from "react";

//importo el connect  COMPONENTE DE CLASES
import { connect } from "react-redux";

import { getUsers } from "../Redux/actions";

class Users extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    console.log(props);
  }

  //metodos de clases

  componentDidMount() {
    //monta el componente y ejecuta las props getUsers
    this.props.getUsers();
  }

  componentWillUnmount() {
    console.log("Me desmonté");
  }

  render() {
    return (
      <>
        <h2>Soy el Componente Users</h2>
        {this.props.users.length > 0 &&
          this.props.users.map((e) => {
            return (
              <>
                <hr />
                <hr />
                <p key={e.id}>ID:{e.id}</p>
                <p>Name: {e.name}</p>
                <p>Username: {e.username}</p>
                <p>Email:{e.email}</p>
                <p>Adresss:{e.address.street}</p>

                <hr />
                <hr />
              </>
            );
          })}
      </>
    );
  }
}

//DOS METODOS PARA EL DISPATH Y EL ACTION

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
  };
};

//esto va porque es componente de clase si es funcional utiliza los hooks UseSelector y useDispatch y useParams()
export default connect(mapStateToProps, mapDispatchToProps)(Users);

//========funcional=============
/* export default function Users() {
  return (
    <>
      <div>
        <h1>Soy el component User</h1>
      </div>
    </>
  );
}
 */
