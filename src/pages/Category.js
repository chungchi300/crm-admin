// in Categorys.js
import React from "react";
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  DisabledInput,
  TextInput,
  LongTextInput,
  DateInput
} from "react-admin";
import OpenButton from "./OpenButton";
import { url } from "../config";
import RichTextInput from "ra-input-rich-text";
export const CategoryList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />

      <EditButton basePath="/category" />
      <OpenButton
        onClick={record => {
          var win = window.open(url(`/cms/category/${record.id}`), "_blank");
          win.focus();
        }}
      />
    </Datagrid>
  </List>
);

const CategoryTitle = ({ record }) => {
  return <span>Category {record ? `"${record.name}"` : ""}</span>;
};

export const CategoryEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["link", "image"], // add's image support
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"] // remove formatting button
];

export const CategoryCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
