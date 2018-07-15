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
import config from "../config";
export class MenuEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      option: []
    };
  }
  async componentDidMount() {
    let categories = await (await fetch(`${config.root}/category`)).json();
    let categoryOption = categories.map(category => {
      return {
        id: `/cms/category/${category.id}`,
        name: `${category.name}`
      };
    });

    let posts = await (await fetch(`${config.root}/post`)).json();
    let postOption = posts.map(post => {
      return {
        id: `/cms/post/${post.id}`,
        name: `${post.title}`
      };
    });
    console.log("posts", categoryOption);
    this.setState({
      option: categoryOption.concat(postOption)
    });
  }
  render() {
    return (
      <Edit {...this.props}>
        <SimpleForm style={{ overflow: "-webkit-paged-y" }}>
          <DisabledInput source="id" />
          <TextInput source="name" />
          <TextInput source="url" />

          <AutocompleteInput source="url" choices={this.state.option} />
          <SelectInput source="priority" choices={getPriorities()} />
          <ReferenceInput source="parentId" reference="menu">
            <SelectInput optionText="name" />
          </ReferenceInput>
        </SimpleForm>
      </Edit>
    );
  }
}
