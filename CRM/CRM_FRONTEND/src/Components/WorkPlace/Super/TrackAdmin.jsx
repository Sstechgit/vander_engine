import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { urls } from "../../../../links";
import { DoFetch } from "../../../Utils/DoFetch";
import AgentLead from "./AgentLead";
import { formatDate, parseCustomDate } from "../../../Utils/parseAndFormatDate";

export default function TrackAdmin() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setCurrentPageSize] = useState(500);
    const [TotalData, setTotalData] = useState(0);
    const [admins, setadmins] = useState([]);
    const fetchTrackedAdmins = async () => {
        const url = urls.GET_USER;
        const result = await DoFetch(url, "GET");

        if (result.success === true) {
            console.log(result);

            const adminUsers = result.payload.filter(user => user.designation === "Admin");

            const admins = adminUsers.map((admin, idx) => ({
                id: idx + 1,
                key: admin._id,
                name: admin.name,
                email: admin.email,
                phone: admin.phone,
                last_login: parseCustomDate(admin.login || "Thu, Aug 22, 2024 at 2:17 PM"),
                last_logout: parseCustomDate(admin.logout || "Thu, Aug 22, 2024 at 2:17 PM"),
                createdAt: parseCustomDate(admin.createdAt),
                updatedAt: parseCustomDate(admin.updatedAt),
            }));

            setadmins(admins); // Update state
            setTotalData(adminUsers.length); // Total number of admins
        } else {
            console.error("Failed to fetch admins");
        }
    };


    useEffect(() => {
        fetchTrackedAdmins();
    }, []);

    const columns = [
        {
            title: "ID",
            key: "id",
            dataIndex: "id",
            width: 50,
            headerStyle: {
                // Style for the header
                textAlign: "center", // Center the header text
                backgroundColor: "#f0f0f0", // Background color of the header
                fontWeight: "bold", // Bold text in header
                fontSize: "18px", // Font size of the header text
            },

            render: (text) => (
                <div
                    style={{
                        textAlign: "center",
                        fontSize: "16px ",
                        fontWeight: "bolder",
                    }}
                >
                    {" "}
                    {/* Custom style for cell */}
                    {text}
                </div>
            ),
        },
        {
            title: "Agent Name",
            key: "name",
            dataIndex: "name",
            width: 150,
            headerStyle: {
                // Style for the header
                textAlign: "center", // Center the header text
                backgroundColor: "#f0f0f0", // Background color of the header
                fontWeight: "bold", // Bold text in header
                fontSize: "18px", // Font size of the header text
            },

            render: (text) => (
                <div style={{ textAlign: "center", fontSize: "16px " }}>
                    {" "}
                    {/* Custom style for cell */}
                    {text}
                </div>
            ),
        },
        {
            title: "Email",
            key: "email",
            dataIndex: "email",
        },
        {
            title: "Phone",
            key: "phone",
            dataIndex: "phone",
        },
        {
            title: "Last Login",
            key: "last_login",
            dataIndex: "last_login",
            width: 150,
            render: (_, record) => {
                return <span>{formatDate(_)}</span>;
            },
        },
        {
            title: "Last Logout",
            key: "last_logout",
            dataIndex: "last_logout",
            width: 150,
            render: (_, record) => {
                return <span>{formatDate(_)}</span>;
            },
        },
    ];

    const handleTablePageChange = (pagination) => {
        setCurrentPage(pagination.current);
        setCurrentPageSize(pagination.pageSize);
        fetchTrackedAgents(pagination.current, pagination.pageSize);
    };
    return (
        <div>
            <Table
                locale={{ emptyText: "No Data available" }}
                columns={columns}
                dataSource={admins}
                scroll={{ y: 450, x: "max-content" }}
                pagination={{
                    current: currentPage,
                    pageSize: pageSize,
                    total: TotalData,
                    showSizeChanger: true,
                    pageSizeOptions: ["500", "1000", "1500", "2000", "2500", "3000"],
                    onChange: (page, pageSize) => {
                        setCurrentPage(page);
                        setCurrentPageSize(pageSize);
                        fetchTrackedAgents(page, pageSize);
                    },
                }}
                onChange={handleTablePageChange}
                rowClassName={(record, index) => {
                    // You can apply a different class based on the index or record
                    return `row-${index % 5}`; // Example: Apply 5 different row colors
                }}
            ></Table>
            <style>
                {`
        
        * You can change the colors to whatever you'd like */
:where(.css-dev-only-do-not-override-1uq9j6g)[class^="ant-table"] [class^="ant-table"], :where(.css-dev-only-do-not-override-1uq9j6g)[class*=" ant-table"] [class^="ant-table"], :where(.css-dev-only-do-not-override-1uq9j6g)[class^="ant-table"] [class*=" ant-table"], :where(.css-dev-only-do-not-override-1uq9j6g)[class*=" ant-table"] [class*=" ant-table"] {
  background: antiquewhite !important; /* Light Blue */
}
  :where(.css-dev-only-do-not-override-1uq9j6g).ant-table-wrapper table{
  background: antiquewhite !important;
  }

.row-1 {
  background-color: #8bdaff !important; /* Lighter Blue */
}

.row-2 {
  background-color: #f5a7c6 !important; /* Light Pink */
}

.row-3 {
  background-color: #f7f790 !important; /* Light Yellow */
}

.row-4 {
  background-color: #83ef83 !important; /* Light Green */
}

/* Optional: add hover effect for better UX */
.ant-table-tbody tr:hover {
  background-color: #f5f5f5 !important;
}
        `}
            </style>
        </div>
    );
}
