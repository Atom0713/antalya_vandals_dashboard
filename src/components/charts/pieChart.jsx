import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const getAttendance = (attendance) => {
    let counter = 0;
    for (let i = 0; i <= attendance.length -1 ; i++) {
        if (attendance[i].present) {
            counter++;
        }
    }
        return counter
};

export default function AphexChart({attendance}) {
  return <div className="Chart">
            <PieChart
                totalValue={attendance.length}
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
                        value: attendance.length,
                        color: "#ff0000"
                    },
                    {
                        title: "Attendance",
                        value: getAttendance(attendance),
                        color: "#07b9a2"
                    }

                ]}
            />
            </div>;
}