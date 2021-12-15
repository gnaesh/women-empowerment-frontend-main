import { getNgoById, getAllNgo, getNgoByLocation, getNgoByMotive, deleteNgoByID } from "../redux/NgoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getNgoByIdService, getAllNgoService, getNgoByLocationService, getNgoByMotiveService, deleteNgoService } from "../service/NgoService";


const Ngo = () => {
    const [ngoid, setNgoId] = useState('');
    const [ngoLocation, setNgoLocation] = useState('');
    const [ngoMotive, setNgoMotive] = useState('');
    const [deleteNgo, setDeleteNgo] = useState('');
    const dispatch = useDispatch();

    const ngoDataFromStore = useSelector((state) => state.ngo.ngoState);
    const ngoDataFromStoreLocation = useSelector((state) => state.ngo.ngoStateLocation);
    const ngoDataFromStoreMotive = useSelector((state) => state.ngo.ngoStateMotive);
    const ngoList = useSelector((state) => state.ngo.ngoList);
    const ngoDelete = useSelector((state) => state.ngo.ngoDelete);

    const handleNgo = (e) => {
        console.log('handleNgo');
        setNgoId(e.target.value);
    }

    const handleNgoLocation = (l) => {
        console.log('handlelngolocation')
        setNgoLocation(l.target.value);
    }

    const handleNgoMotive = (m) => {
        console.log('handlelngomotive')
        setNgoMotive(m.target.value);
    }

    const handleDeleteNgo = (d) => {
        console.log('handleDeleteNgo');
        setDeleteNgo(d.target.value);
    }
// ------------------------------------------------------------------------------------
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
// -------------------------------------------------------------------------------------
    const submitGetNgoByLocation = (evt) => {
        evt.preventDefault();
        console.log('submitGetNgoByLocation');
        getNgoByLocationService(ngoLocation)
            .then((response) => {
                dispatch(getNgoByLocation(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Ngo with ${ngoLocation} location not found.`);
            });

        setNgoLocation('');
    }
// -------------------------------------------------------------------------------------
    const submitGetNgoByMotive = (evt) => {
        evt.preventDefault();
        console.log('submitGetNgoByMotive');
        getNgoByMotiveService(ngoMotive)
            .then((response) => {
                dispatch(getNgoByMotive(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Ngo with ${ngoMotive} Motive not found.`);
            });

        setNgoMotive('');
    }
// -------------------------------------------------------------------------------------
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
// -------------------------------------------------------------------------------------
    const submitDeleteNgo = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteNgo');
        deleteNgoService(deleteNgo)
            .then((response) => {
                alert(`Ngo deleted successfully.`)
                dispatch(deleteNgoByID(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Ngo with Id ${deleteNgo} not found.`);
            });

    }

// -----------------------------------------------------------------------------------------

    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Ngo Component</h1>
            <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h5>Find Ngo by id</h5>
        </button>
      </h5>
    </div>
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
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
            </div> </div></div> </div>

{/* -------------------------------------------------------------------------------------------------- */}
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h5>Find Ngo by Location</h5>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                <form className="form form-group form-primary" onSubmit={submitGetNgoByLocation}>
                    <input className="form-control mt-3" type="text" id="ngoLocation" name="ngoLocation" value={ngoLocation} onChange={handleNgoLocation} placeholder="Enter Ngo location" autoFocus required />
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
                        {ngoDataFromStoreLocation.map((ngo, key) => {
                            return (
                                <tr key={key}>  <td>{ngo.ngoId}</td>
                                    <td>{ngo.ngoName}</td>
                                    <td>{ngo.ngoLocation}</td>
                                    <td>{ngo.ngoType}</td>
                                    <td>{ngo.ngoMotive}</td>
                                    <td>{ngo.donation}</td>
                                    <td>{ngo.ngoSize}</td>
                                    <td>{ngo.ngoActivities}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div></div></div></div>

{/* ----------------------------------------------------------------------------------- */}

  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h5>Find Ngo by Motive</h5>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                <form className="form form-group form-primary" onSubmit={submitGetNgoByMotive}>
                    <input className="form-control mt-3" type="text" id="ngoMotive" name="ngoMotive" value={ngoMotive} onChange={handleNgoMotive} placeholder="Enter Ngo Motive" autoFocus required />
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
                        {ngoDataFromStoreMotive.map((ngo, key) => {
                            return (
                                <tr key={key}>  <td>{ngo.ngoId}</td>
                                    <td>{ngo.ngoName}</td>
                                    <td>{ngo.ngoLocation}</td>
                                    <td>{ngo.ngoType}</td>
                                    <td>{ngo.ngoMotive}</td>
                                    <td>{ngo.donation}</td>
                                    <td>{ngo.ngoSize}</td>
                                    <td>{ngo.ngoActivities}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div></div></div></div>

{/* ---------------------------------------------------------------------------------------- */}

  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h5>Find All ngo</h5>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
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
                </div> </div></div></div>
            
{/* ---------------------------------------------------------------------------------------------------- */}

  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h5>Delete NGo by Id</h5>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                <h3>Delete NGo by Id</h3>
                <form className="form form-group form-primary" onSubmit={submitDeleteNgo}>
                    <input className="form-control mt-3" type="number" id="deleteNgo" name="deleteNgo" value={deleteNgo} onChange={handleDeleteNgo} placeholder="Enter Ngo Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Ngo" />
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
                            <td>{ngoDelete.ngoId}</td>
                            <td>{ngoDelete.ngoName}</td>
                            <td>{ngoDelete.ngoLocation}</td>
                            <td>{ngoDelete.ngoType}</td>
                            <td>{ngoDelete.ngoMotive}</td>
                            <td>{ngoDelete.donation}</td>
                            <td>{ngoDelete.ngoSize}</td>
                            <td>{ngoDelete.ngoActivities}</td>
                        </tr>  
                    </tbody>
                </table>
            </div></div></div></div></div>
            
        </div>
    );
}
export default Ngo;
