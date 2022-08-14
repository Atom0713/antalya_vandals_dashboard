import React, { useState, useEffect } from 'react';

const useGettTableContent = (data) => {
    const [tableContent, setTableContent] = useState([]);
    const tempTableContent = [];
    useEffect(() => {
        for (const item of data){
            const items = {};
            Object.entries(item).forEach(([key, value]) => {
                items[key] = value
                
            });
            tempTableContent.push(items);
        }
        setTableContent(tempTableContent)
    }, []);
    console.log(tableContent)
    return [tableContent];
  };


export function OrderedDarkWithImageTable({title, headers, order, data}) {
    const [tableContent] = useGettTableContent(data)

    return (
    <>      
            <div className="row ">
            <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                        <tr>
                        <th>  </th>
                            {headers.map((header, index) => 
                                    <th key={index}> {header} </th>
                            )}
                        </tr>
                        </thead>
                        <tbody>
                            {
                            tableContent.map(
                                (row, index) =>
                                    <tr key={index}>
                                        <td key={index}>{index + 1}</td>
                                       {
                                        order.map((item, index) =>
                                        <td key={index}>
                                            {
                                                item === "img" ? 
                                                <img src={row[item]} alt={row['name']} />
                                                :
                                                row[item]
                                            }
                                        </td>
                                        )
                                       }
                                    </tr>
                            )}
                        </tbody>
                      </table>
                      Paginate
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
)}