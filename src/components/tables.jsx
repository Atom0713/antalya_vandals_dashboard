import React from "react";
import { Link } from "react-router-dom";

export function OrderedDarkWithImageTable({
  title,
  headers,
  order,
  data,
  link = false,
  url = ""
}) {
  return (
    <>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> # </th>
                      {headers.map((header, index) => (
                        <th key={index}> {header} </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        <td key={index}>{index + 1}</td>
                        {order.map((item, index) => (
                          <td key={index}>
                            {item === "img" ? (
                              <>
                                <img src={row[item]} alt="" />
                                <span className="ps-2">{row.name}</span>
                              </>
                            ) : link && item === "name" ? (
                              <Link to={`${url}/${row.id}`}>
                                {row[item]}
                              </Link>
                            ) : link && item === "first_name" ? (
                              <Link to={`${url}/${row.id}`}>
                                {row.first_name} {row.last_name}
                              </Link>
                            ) : ( 
                              item === "completed" ? (row[item] ? "YES" : "NO") : row[item]
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export function AttendanceOrderedDarkWithImageTable({
  title,
  headers,
  data,
  link = false,
  url = ""
}) {
  return (
    <>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> # </th>
                      {headers.map((header, index) => (
                        <th key={index}> {header} </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        <td key={index}>{index + 1}</td>
                        <td>{
                          link &&
                            <Link to={`${url}/${row["id"]}`}>
                              {row.first_name} {row.last_name}
                            </Link>
                          }
                        </td>
                        <td>
                          <div className={`badge badge-outline-${row.present ? 'success' : "danger"}`}>{row.present ? "Yes" : "No"}</div>
                        </td>
                        <td>{row.absence_reason ? row.absence_reason : ""}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}