import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import Pageview from "@material-ui/icons/Pageview";
function UrlField(props) {
  // console.log('the props', props)
  return (
    <Button
      variant="flat"
      color={"primary"}
      onClick={props.onClick.bind(null, props.record)}
    >
      <Pageview />
      打開
    </Button>
  );
}
UrlField.propTypes = {
  record: PropTypes.object
};

export default UrlField;
