import React, { Component } from "react";
import "./index.scss";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import ControlInput from "../../common/hoc/controlledInput";
import { Form, Icon, Input, Button, Checkbox } from "antd";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: BraftEditor.createEditorState(""), // 设置编辑器初始内容
      outputHTML: "<p></p>"
    };

    this.handleChange = this.handleChange.bind(this);
  }
  omponentDidMount() {
    this.isLivinig = true;
    // 3秒后更改编辑器内容
    setTimeout(this.setEditorContentAsync, 3000);
  }

  componentWillUnmount() {
    this.isLivinig = false;
  }

  handleChange = editorState => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    });
  };

  setEditorContentAsync = () => {
    this.isLivinig &&
      this.setState({
        editorState: BraftEditor.createEditorState("<p>你好，<b>世界!</b><p>")
      });
  };

  render() {
    const { editorState, outputHTML } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="detail-main">
      <ControlInput value={"aaa"} eventOnChange={()=>{console.log("aaa")}}/>

        <div className="detail-title">
          <div className="title">
            <Form.Item>
              {getFieldDecorator("title", {
                rules: [{ required: true, message: " " }]
              })(<Input style={{ float: "left" }} placeholder="title" />)}
            </Form.Item>
          </div>
          <Button className="saveBtn" style={{ float: "right" }} type="primary">
            Save
          </Button>
        </div>
        <div className="detail-content">
          <div className="editor-wrapper">
            <BraftEditor value={editorState} onChange={this.handleChange} />
          </div>
        </div>

      </div>
    );
  }
}

export default Form.create()(Detail);
