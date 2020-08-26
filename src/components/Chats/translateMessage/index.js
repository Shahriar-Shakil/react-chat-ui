import { Button, Drawer, Select, Tooltip } from "antd";
import {
  faClipboard,
  faCog,
  faLongArrowAltRight,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import React from "react";
import styled from "styled-components";

const { TextArea } = Input;
const { Option } = Select;
const TranslateMessage = ({ translateMessageProp, handleTranslator }) => {
  const onClose = () => {
    handleTranslator({ visible: false, message: "" });
  };
  console.log(translateMessageProp.message);
  return (
    <StyledDrawer
      title="Translator"
      placement="right"
      closable={true}
      onClose={onClose}
      visible={translateMessageProp.visible}
      getContainer={false}
      style={{ position: "absolute" }}
    >
      <div className="row">
        <div className="col-10 translate">
          <div className=" d-flex justify-content-between align-items-center">
            <Select defaultValue="en" style={{ width: 80 }}>
              <Option value="en">En</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <span>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </span>
            <Select defaultValue="bn" style={{ width: 80 }}>
              <Option value="bn">Bn</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className=" mt-5">
            <TextArea
              rows={4}
              value={translateMessageProp.message}
              autoSize={{ minRows: 4, maxRows: 10 }}
            />
          </div>
          <div className=" mt-5">
            <TextArea rows={4} autoSize={{ minRows: 4, maxRows: 10 }} />
          </div>
          <div className=" mt-5 ">
            <Button type="primary" className="w-100">
              Translate
            </Button>
          </div>
        </div>
        <div className="col-2 option d-flex flex-column  align-items-center ">
          <Tooltip title="Copy">
            <span>
              <FontAwesomeIcon icon={faClipboard} />
            </span>
          </Tooltip>
          <Tooltip title="Settings">
            <span>
              <FontAwesomeIcon icon={faCog} />
            </span>
          </Tooltip>
          <Tooltip title="Apps">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
          </Tooltip>
        </div>
      </div>
    </StyledDrawer>
  );
};

export default TranslateMessage;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    width: 280px !important;
    box-shadow: none !important;
  }
  .option {
    color: #0048aa;
    font-size: 30px;
    border-left: 2px dashed var(--main-red);
  }
  .ant-drawer-body {
    background: #eee;
  }
  .ant-drawer-header {
    color: rgba(0, 0, 0, 0.65);
    background: #0048aa;
    .ant-drawer-title {
      color: #fff;
    }
    .ant-drawer-close {
      color: #fff;
    }
  }
`;
