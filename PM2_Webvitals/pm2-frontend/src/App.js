import React, { useEffect, useState } from "react";

const PM2Dashboard = () => {
    const [processes, setProcesses] = useState([]);
    const [logs, setLogs] = useState("");
    const [loading, setLoading] = useState("");

    // Fetch PM2 processes
    const fetchProcesses = async () => {
        const res = await fetch("http://pm2processes.offdiary.org/processes");
        const data = await res.json();
        setProcesses(data);
    };

    // Restart a specific process
    const restartProcess = async (name) => {
        setLoading(name);
        await fetch("http://pm2processes.offdiary.org/restart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });
        setLoading("");
        fetchProcesses();
    };

    // Fetch logs for a specific process
    const fetchLogs = async (name) => {
        const res = await fetch(`http://pm2processes.offdiary.org/logs/${name}`);
        const data = await res.json();
        setLogs(data.logs);
    };

    useEffect(() => {
        fetchProcesses();
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>PM2 Dashboard</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Name</th>
                        <th>CPU</th>
                        <th>Memory</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {processes.map((proc) => {
    const isOnline = proc.pm2_env.status === "online"; // Updated
    return (
        <tr key={proc.name}>
            <td style={{ textAlign: "center" }}>
                <span
                    style={{
                        display: "inline-block",
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: isOnline ? "green" : "red",
                    }}
                ></span>
            </td>
            <td>{proc.name}</td>
            <td>{proc.monit.cpu}%</td>
            <td>{(proc.monit.memory / 1024 / 1024).toFixed(2)} MB</td>
            <td>
                <button onClick={() => restartProcess(proc.name)} disabled={loading === proc.name}>
                    {loading === proc.name ? "Restarting..." : "Restart"}
                </button>
                <button onClick={() => fetchLogs(proc.name)}>View Logs</button>
            </td>
        </tr>
    );
})}

                </tbody>
            </table>

            {logs && (
                <div style={{ marginTop: "20px", whiteSpace: "pre-wrap", background: "#eee", padding: "10px" }}>
                    <h3>Logs</h3>
                    <pre>{logs}</pre>
                </div>
            )}
        </div>
    );
};

export default PM2Dashboard;