// in Menus.js
import React from "react";
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  DateField,
  TextField,
  EditButton,
  DisabledInput,
  TextInput,
  LongTextInput,
  DateInput
} from "react-admin";
import { getPriorities } from "helpers/util";
import RichTextInput from "ra-input-rich-text";
export const MenuList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="url" />
      <EditButton basePath="/Menu" />
    </Datagrid>
  </List>
);

const MenuTitle = ({ record }) => {
  return <span>Menu {record ? `"${record.name}"` : ""}</span>;
};

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
