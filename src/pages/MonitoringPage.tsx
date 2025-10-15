import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./MonitoringPage.css";

const dataPerSensor = [
  [
    { time: "10:00", value: 1.2 },
    { time: "10:05", value: 1.4 },
    { time: "10:10", value: 1.3 },
  ],
  [
    { time: "10:00", value: 25 },
    { time: "10:05", value: 26 },
    { time: "10:10", value: 27 },
  ],
  [
    { time: "10:00", value: 65 },
    { time: "10:05", value: 63 },
    { time: "10:10", value: 64 },
  ],
  [
    { time: "10:00", value: 101.2 },
    { time: "10:05", value: 101.4 },
    { time: "10:10", value: 101.3 },
  ],
  [
    { time: "10:00", value: 3.5 },
    { time: "10:05", value: 3.6 },
    { time: "10:10", value: 3.7 },
  ],
  [
    { time: "10:00", value: 0.9 },
    { time: "10:05", value: 1.0 },
    { time: "10:10", value: 1.1 },
  ],
];

const sensorNames = ["1", "2", "3", "4", "5", "6"];

const MonitoringPage: React.FC = () => {
  return (
    <div className="main">
      <section className="sensor-grid">
        {sensorNames.map((name, i) => (
          <div className="sensor-card" key={i}>
            <h4>Sensor {name}</h4>

            <div style={{ width: "100%", height: 200 }}>
              <ResponsiveContainer>
                <LineChart data={dataPerSensor[i]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={["#00bcd4", "#f87171", "#10b981", "#f59e0b", "#8b5cf6", "#6366f1"][i]}
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MonitoringPage;
