import { Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";


export default function DisplayTableModal({
  datasource,
  columns,
  open,
  setopen,
}) {



  const dropModal = () => {
    setopen(false);
  };
  const [source, setsource] = useState(datasource)

  return (
    <Modal width={1500}
   
      title={"View Tasks"}
      open={open}
      onCancel={dropModal}
      footer={[<Button key="ok" onClick={dropModal}>Ok</Button>]}
    >
     
          <Table locale={{ emptyText: 'No Data available' }}
            // rowSelection={{ type: "checkbox", ...rowSelection }}
            columns={columns}
            dataSource={source}
          
           // Ensure table content is scrollable
            // onChange={handleTablePageChange}
          ></Table>
       
    </Modal>
  );
}
