import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ShotList } from "./shot/ShotList";
import { ShotCreate } from "./shot/ShotCreate";
import { ShotEdit } from "./shot/ShotEdit";
import { ShotShow } from "./shot/ShotShow";
import { CannonList } from "./cannon/CannonList";
import { CannonCreate } from "./cannon/CannonCreate";
import { CannonEdit } from "./cannon/CannonEdit";
import { CannonShow } from "./cannon/CannonShow";
import { AngleList } from "./angle/AngleList";
import { AngleCreate } from "./angle/AngleCreate";
import { AngleEdit } from "./angle/AngleEdit";
import { AngleShow } from "./angle/AngleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TrigonometryGame"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Shot"
          list={ShotList}
          edit={ShotEdit}
          create={ShotCreate}
          show={ShotShow}
        />
        <Resource
          name="Cannon"
          list={CannonList}
          edit={CannonEdit}
          create={CannonCreate}
          show={CannonShow}
        />
        <Resource
          name="Angle"
          list={AngleList}
          edit={AngleEdit}
          create={AngleCreate}
          show={AngleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
