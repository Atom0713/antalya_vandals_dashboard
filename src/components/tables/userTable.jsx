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
  
    return [tableContent];
  };


export default function DarkWithImageTable({title, headers, order, data}) {
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
                            {headers.map((header) => 
                                    <th key={header}> {header} </th>
                            )}
                        </tr>
                        </thead>
                        <tbody>
                            {
                            tableContent.map(
                                (row) =>
                                    <tr>
                                       {
                                        order.map((item) =>
                                            <td key={item}> 
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
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
)}