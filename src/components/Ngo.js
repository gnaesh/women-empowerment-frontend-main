import { getNgoById , getAllNgo} from "../redux/NgoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getNgoByIdService, getAllNgoService } from "../service/NgoService";


const Ngo = () => {

    const [ngoid, setNgoId] = useState('');

    const dispatch = useDispatch();

    const ngoDataFromStore = useSelector((state) => state.ngo.ngoState);
    const ngoList = useSelector((state) => state.ngo.ngoList);

    const handleNgo = (e) => {
        console.log('handleNgo');
        setNgoId(e.target.value);
    }

    const submitGetNgoById = (evt) => {
        evt.preventDefault();
        console.log('submitGetNgoById');
        getNgoByIdService(ngoid)
            .then((response) => {
                dispatch(getNgoById(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Ngo with ${ngoid} not found.`);
            });

        setNgoId('');
    }




    const submitGetAllNgo = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllNgo');
        getAllNgoService()
            .then((response) => {
                dispatch(getAllNgo(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }


    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Ngo Component</h1>

            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                <h3>Find Ngo by id</h3>
                <form className="form form-group form-primary" onSubmit={submitGetNgoById}>
                    <input className="form-control mt-3" type="number" id="ngoid" name="ngoid" value={ngoid} onChange={handleNgo} placeholder="Enter Ngo Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Ngo" />
                </form>

                <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>ngoId</th>
                                <th>ngoName</th>
                                <th>ngoLocation</th>
                                <th>ngoType</th>
                                <th>ngoMotive</th>
                                <th>donation</th>
                                <th>ngoSize</th>
                                <th>ngoActivities</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ngoDataFromStore.ngoId}</td>
                                <td>{ngoDataFromStore.ngoName}</td>
                                <td>{ngoDataFromStore.ngoLocation}</td>
                                <td>{ngoDataFromStore.ngoType}</td>
                                <td>{ngoDataFromStore.ngoMotive}</td>
                                <td>{ngoDataFromStore.donation}</td>
                                <td>{ngoDataFromStore.ngoSize}</td>
                                <td>{ngoDataFromStore.ngoActivities}</td>

                            </tr>
                        </tbody>
                    </table>
                                    
            </div>

            <div>
            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                <h3>Find All ngo</h3>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllNgo} value="Find All Ngos" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>ngoId</th>
                                <th>ngoName</th>
                                <th>ngoLocation</th>
                                <th>ngoType</th>
                                <th>ngoMotive</th>
                                <th>donation</th>
                                <th>ngoSize</th>
                                <th>ngoActivities</th>
                            </tr>
                        </thead>
                        <tbody>
                        {ngoList.map((ngo, k) => {
                                return (
                                    <tr k={k}> <td>{ngo.ngoId}</td>  <td>{ngo.ngoName}</td> <td>{ngo.ngoLocation}</td> <td>{ngo.ngoType}</td> <td>{ngo.ngoMotive}</td> <td>{ngo.donation}</td> <td>{ngo.ngoSize}</td> <td>{ngo.ngoActivities}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>              
                      </div>
            </div>


        </div>
    );
}
export default Ngo;












// import { getNgoByIdService} from "../service/NgoService";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { getNgoById} from '../redux/NgoSlice';


// const Ngo= () => {

//     const [ngoId, setngoId] = useState('');
//     const dispatch = useDispatch();
//     const ngoDataFromStore = useSelector((state) => state.ngo.ngoState);
//     const ngoList = useSelector((state) => state.ngo.ngoList);

//     const handleNgo = (n) => {
//         console.log('handleNgo');
//         setngoId(n.target.value);
//     }

//     const submitGetNgoById = (evt) => {
//         evt.preventDefault();
//         console.log('submitGetNgoById');
//         getNgoByIdService(ngoId)
//             .then((response) => { dispatch(getNgoById(response.data)) })
//             .catch(() => {
//                 alert(`NGO with ${ngoId} not found.`);
//             });
//         console.log(Object.keys(ngoList));
//         setngoId('');
//     }

//     // const submitGetAllEmps = (evt) => {
//     //     evt.preventDefault();
//     //     console.log('submitGetAllEmps');
//     //     getAllEmpsService()
//     //         .then((response) => {
//     //             dispatch(getAllEmps(response.data));
//     //         })
//     //         .catch(() => {
//     //             alert(`Something is wrong!`);
//     //         });
//     // }

//     return (
//         <div>
//             <h1 className="display-4 text-primary mt-3 mb-3" >Ngo Component</h1>
//             <p>Fetch data from backend, store it in redux store and get it to component</p>

//             <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
//                 <p>Find NGO by id</p>
//                 <form className="form form-group form-primary" onSubmit={submitGetNgoById}>
//                     <input className="form-control mt-3" type="number" id="ngoid" name="ngo id" value={ngoId} onChange={handleNgo} placeholder="Enter ngo to search" autoFocus required />
//                     <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Employee" />
//                 </form>
//                 <p>Data from store: {ngoDataFromStore.ngoId}</p>
//             </div>

//             {/* <div>
//                 <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
//                     <p>Find all employees</p>
//                     <div>
//                         <form className="form form-group form-primary">
//                             <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllEmps} value="Find All Employees" />
//                         </form>
//                     </div >
//                     <table className="table table-light table-striped ">
//                         <thead>
//                             <tr>
//                                 <th>Eid</th>
//                                 <th>Name</th>
//                                 <th>Salary</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {empList.map((emp, k) => {
//                                 return (
//                                     <tr k={k}> <td>{emp.eid}</td>  <td>{emp.firstName}</td> <td>{emp.salary}</td></tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
//                 <p>Some other functionality</p>
//             </div> */}



//         </div>
//     );
// }
// export default Ngo;


