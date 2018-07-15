import * as React from "react";
import Count from "containers/Count";
import Author from "containers/Author";

import "App.css";

import { Admin, Resource } from "react-admin";

import { PostList, PostEdit, PostCreate } from "./pages/Post";
import { CategoryList, CategoryEdit, CategoryCreate } from "./pages/Category";
import { MenuList } from "./pages/Menu";
import { MenuEdit } from "./pages/MenuEdit";
import { MenuCreate } from "./pages/MenuCreate";

import * as englishMessages from "ra-language-english";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import * as frenchMessages from "ra-language-french";
import chi from "./chi";
const messages = {
  en: englishMessages.ra,
  chi: chi
};
console.log("english ", messages);
const i18nProvider = locale => {
  return chi;
};
class App extends React.Component<any> {
  render() {
    return (
      <div className="App">
        <Admin
          title="管理后台"
          locale="chi"
          authProvider={authProvider}
          i18nProvider={i18nProvider}
          dataProvider={dataProvider}
        >
          <Resource
            name="post"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
          />
          <Resource
            name="category"
            list={CategoryList}
            edit={CategoryEdit}
            create={CategoryCreate}
          />
          <Resource
            name="menu"
            list={MenuList}
            edit={MenuEdit}
            create={MenuCreate}
          />
        </Admin>
        {/* <Count />

        <Author /> */}
      </div>
    );
  }
}

export default App;
