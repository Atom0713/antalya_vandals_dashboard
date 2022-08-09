import React from 'react'


const items = [
    {
        id: 1,
        name: "Henry Klein",
        img_src: "assets/images/faces/face1.jpg",    
    },
    {
        id: 2,
        name: "Henry Klein",
        img_src: "assets/images/faces/face1.jpg",    
    },
    {
        id: 3,
        name: "Henry Klein",
        img_src: "assets/images/faces/face1.jpg",    
    },
    {
        id: 4,
        name: "Henry Klein",
        img_src: "assets/images/faces/face1.jpg",    
    },
    {
        id: 5,
        name: "Henry Klein",
        img_src: "assets/images/faces/face1.jpg",    
    },
    {
        id: 6,
        name: "Henry Klein",
        img_src: "assets/images/faces/face1.jpg",    
    },

]




export default function Attendance() {
  return (
    <div className="content-wrapper">
        <div className="row ">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Attendance</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input"/>
                            </label>
                          </div>
                        </th>
                        <th> Name </th>
                        <th> Absence reason </th>
                      </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => 
                            <tr key={item.id}>
                            <td>
                              <div className="form-check form-check-muted m-0">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input"/>
                                </label>
                              </div>
                            </td>
                            <td>
                              <img src={item.img_src} alt={item.name} />
                              <span className="ps-2">{item.name}</span>
                            </td>
                            <td>
                                <input type="text" class="form-control" />
                            </td>
                          </tr>
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
