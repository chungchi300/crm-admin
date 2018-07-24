// in posts.js
import React from "react";
import _ from "lodash";
import {
  List,
  BooleanField,
  BooleanInput,
  Datagrid,
  Edit,
  ReferenceInput,
  SelectInput,
  Create,
  SimpleForm,
  SelectField,
  DateField,
  TextField,
  EditButton,
  DisabledInput,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  TextInput,
  LongTextInput,
  DateInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import OpenButton from "./OpenButton";
import tinymce from "tinymce/tinymce";
// react-tinymce use global ref
window.tinymce = tinymce;

import "tinymce/themes/modern/theme";
import "tinymce/skins/lightgray/skin.min.css";
import { url } from "../config";
import TinyMCEInput from "./TinyMCEInput";
import { getPriorities } from "helpers/util";
export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <BooleanField source="visible" />
      <BooleanField source="promptToFront" />
      <ReferenceManyField label={"类别"} reference="category" target="postId">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceManyField>

      <EditButton basePath="/post" />
      <OpenButton
        onClick={record => {
          var win = window.open(url(`/cms/post/${record.id}`), "_blank");
          win.focus();
        }}
      />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }) => {
  return <span> {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <BooleanInput source="visible" />
      <BooleanInput source="promptToFront" />

      <SelectInput source="priority" choices={getPriorities()} />

      <ReferenceInput source="categoryId" reference="category">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <div style={{ width: "730px" }}>
        <TinyMCEInput source="content" />
      </div>
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

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput defaultValue={"Input here"} source="title" />
      <BooleanInput defaultValue={true} source="visible" />
      <BooleanInput defaultValue={false} source="promptToFront" />

      <SelectInput
        defaultValue={"1"}
        source="priority"
        choices={getPriorities(true)}
      />

      <ReferenceInput source="categoryId" reference="category">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <div style={{ width: "730px" }}>
        <TinyMCEInput source="content" plugins={["code"]} />
      </div>
    </SimpleForm>
  </Create>
);
