import { Table } from "antd";
import React, { useState } from "react";
const VanderEngine_Leads = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setCurrentPageSize] = useState(300);
    const [TotalData, setTotalData] = useState(0);
    //header for table
    const columns = [
        { key: "_id", title: "Sno", dataIndex: "_id", width: 100 },
        { key: "lead_name", title: "Client Name", dataIndex: "name", width: 130 },
        {
            key: "lead_email",
            title: "Client Email",
            dataIndex: "email",
            width: 100,
        },
        {
            key: "lead_phone",
            title: "Client Contact",
            dataIndex: "phone",
            width: 100,
            render: (_, record) => {
                return (
                    <a href={`tel:${record.phone}`} className="flex gap-2 items-center">
                        <i className="fa-solid fa-phone"></i>
                        {record.phone}
                    </a>
                );
            },
        },
        {
            key: "lead_description",
            title: "Description",
            dataIndex: "description",
            width: 200,
        },
        { key: "lead_origin", title: "Origin", dataIndex: "origin", width: 160 },
        {
            key: "Task",
            title: "Task",
            dataIndex: "Task",
            width: 160,
            filters: [
                { text: "Assigned", value: true },
                { text: "Not Assigned", value: false },
            ],
            onFilter: (value, record) => record.assigned === value,
            render: (_, record) => {
                return (
                    <LeadTaskRelation
                        selectLead={setSelectedLeads}
                        leadRecord={setselectedLeadRecord}
                        setredistribute={setredistribute}
                        record={record}
                        assigned={record.assigned}
                        openModal={() => setOpenDistribute(true)}
                    />
                );
            },
        },

        {
            key: "created",
            title: "Generated",
            dataIndex: "created",
            width: 150,
            sorter: (a, b) => {
                const dateA = new Date(a.created);
                const dateB = new Date(b.created);

                // Handle invalid dates
                if (isNaN(dateA.getTime())) return 1; // Treat invalid dates as later
                if (isNaN(dateB.getTime())) return -1; // Treat invalid dates as earlier

                return dateA - dateB;
            },
            render: (_, record) => {
                let formattedDate = formatDate(record.created);
                return <p>{formattedDate}</p>;
            },
        },
        {
            key: "EditId",
            title: "",
            dataIndex: "EditId",
            render: (_, record) => {
                return (
                    <Button
                        type="primary"
                        style={{ width: "2rem" }}
                        onClick={() => {
                            AddandEditLead(record);
                        }}
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                );
            },
        },
        {
            key: "deleteId",
            title: "",
            dataIndex: "deleteId",
            render: (_, record) => {
                return (
                    <Button
                        type="primary"
                        danger
                        style={{ width: "2rem" }}
                        onClick={() => {
                            handleDelete(record);
                        }}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </Button>
                );
            },
        },
    ];
    const handleTablePageChange = (pagination) => {
        setCurrentPage(pagination.current);
        setCurrentPageSize(pagination.pageSize);
        fetchLeads(pagination.current, pagination.pageSize);
    };
    return (
        <>

            <div className="h-calc-remaining flex flex-col justify-between  ">
                <div className="h-[80%]">
                    <Table
                        locale={{ emptyText: "No Leads available" }}
                        style={{ maxWidth: "100%" }}
                        // rowSelection={{ type: "checkbox", ...rowSelection }}
                        columns={columns}
                        // dataSource={Leads}
                        pagination={{
                            current: currentPage,
                            pageSize: pageSize,
                            total: TotalData,
                            showSizeChanger: true,
                            pageSizeOptions: ["300", "500", "700", "900", "1000", "1200"],
                            onChange: (page, pageSize) => {
                                setCurrentPage(page);
                                setCurrentPageSize(pageSize);
                                fetchLeads(page, pageSize);
                            },
                        }}
                        scroll={{ y: 400, x: "max-content" }} // Ensure table content is scrollable
                        onChange={handleTablePageChange}
                    ></Table>
                </div>
            </div>
        </>
    )
}
export default VanderEngine_Leads;
