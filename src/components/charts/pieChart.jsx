import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function AphexChart({total, attended}) {
  return <div className="Chart">
            <PieChart
                totalValue={total}
                paddingAngle={10}
                labelStyle={{
                fontSize: "5px",
                fill: "#fff"
                }}
                labelPosition={75}
                lineWidth={20}
                label={({ dataEntry }) =>
                `${dataEntry.title} ${dataEntry.value}`
                }
                data={[
                    {
                        title: "Total",
                        value: total,
                        color: "#07b9a2"
                    },
                    {
                        title: "Attendance",
                        value: attended,
                        color: "#ff0000"
                    }

                ]}
            />
            </div>;
}