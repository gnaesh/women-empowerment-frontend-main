import { deleteNgoByID, addNgo, updateNgo, getNgoById, getAllNgo, getNgoByLocation, getNgoByMotive } from "../redux/NgoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteNgoService, addNgoService, updateNgoService, getNgoByIdService, getAllNgoService, getNgoByLocationService, getNgoByMotiveService } from "../service/NgoService";
import NgoModel from "../model/NgoModel"
import UserNgoComponent from "./UserNgoComponent";

const NgoComponent = () => {

    const [ngoData, setNgoData] = useState(new NgoModel());
    const dispatch = useDispatch();

    const ngoDelete = useSelector((state) => state.ngo.ngoDelete);
    const ngoDataFromStore = useSelector((state) => state.ngo.ngoState);
    const ngoDataFromStoreLocation = useSelector((state) => state.ngo.ngoStateLocation);
    const ngoDataFromStoreMotive = useSelector((state) => state.ngo.ngoStateMotive);
    const ngoList = useSelector((state) => state.ngo.ngoList);

    const handleNgoData = (e) => {
        console.log(e);
        setNgoData({
            ...ngoData,
            [e.target.name]: e.target.value
        });
    }
    // ------------------------------------------------------------

    const submitDeleteNgo = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteNgo');
        deleteNgoService(ngoData.ngoId)
            .then((response) => {
                alert(`Ngo deleted successfully.`)
                dispatch(deleteNgoByID(response.data));

            })
            .catch(() => {
                alert(`Ngo with Id ${ngoData.ngoId} not found.`);
            });
    }

    // -----------------------------------------------------------------------------------------

    const submitAddNgo = (evt) => {
        evt.preventDefault();
        console.log('submitAddNgo');
        addNgoService(ngoData)
            .then((response) => {
                alert(`Ngo Added successfully.`)
                dispatch(addNgo(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Ngo with Id ${ngoData.ngoId} already present.`);
            });

    }

    // -----------------------------------------------------------------------------------------

    const submitUpdateNgo = (evt) => {
        evt.preventDefault();
        console.log("submitUpdateNgo");
        updateNgoService(ngoData)
            .then((response) => {
                dispatch(updateNgo(response.data));
                alert(`ngo updated sucesfully`);
            })
            .catch(() => {
                alert(`Ngo with Id ${ngoData.ngoId} is not present.`);
            });

    }

    const submitGetNgoById = (evt) => {
        evt.preventDefault();
        console.log('submitGetNgoById');
        getNgoByIdService(ngoData.ngoId)
            .then((response) => {
                dispatch(getNgoById(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Ngo with ${ngoData.ngoId} not found.`);
            });


    }

    // ------------------------------------------------------------------------

    const submitGetNgoByLocation = (evt) => {
        evt.preventDefault();
        console.log('submitGetNgoByLocation');
        getNgoByLocationService(ngoData.ngoLocation)
            .then((response) => {
                dispatch(getNgoByLocation(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Ngo with ${ngoData.ngoLocation} location not found.`);
            });

    }

    // ------------------------------------------------------------------------

    const submitGetNgoByMotive = (evt) => {
        evt.preventDefault();
        console.log('submitGetNgoByMotive');
        getNgoByMotiveService(ngoData.ngoMotive)
            .then((response) => {
                dispatch(getNgoByMotive(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Ngo with ${ngoData.ngoMotive} Motive not found.`);
            });

    }

    // ------------------------------------------------------------------------

    const submitGetAllNgo = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllNgo');
        getAllNgoService()
            .then((response) => {
                dispatch(getAllNgo(response.data));
            })
            .catch(() => {
                alert(`Ngo not Found`);
            });
    }
    // -----------------------------------------------------------------------------------------

    return (

        <div>
            <h1 className="display-3 text-warning mt-3 mb-3 font-weight-bold text-center" >Ngo Component</h1>


            <div className="container">
                <div id="accordion">
                    {/* <UserNgoComponent />*/}



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
                                        <input min="1" className="form-control mt-3" type="number" id="ngoId" name="ngoId" value={ngoData.ngoId} onChange={handleNgoData} placeholder="Enter Ngo Id" autoFocus required />
                                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Ngo" />
                                    </form>
                                    <table className="table table-light table-striped ">
                                        <thead class="table-warning">
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
                            </div>
                        </div>
                    </div>



                    {/* -------------------------- Find All Ngos --------------------------------- */}
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h5>Find All Ngo</h5>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                    <div>
                                        <form className="form form-group form-primary">
                                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllNgo} value="Find All Ngos" />
                                        </form>
                                    </div >
                                    <table className="table table-light table-striped ">
                                        <thead class="table-warning">
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
                    </div>
                    {/* ------------------------------------------------------------------------------------------------- */}


                    {/* -------------------------- Find Ngo By Motive --------------------------------- */}
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapse">
                                    <h5>Find Ngo By Motive</h5>
                                </button>
                            </h5>
                        </div>
                        <div id="collapse" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">

                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                    <form className="form form-group form-primary" onSubmit={submitGetNgoByMotive}>
                                        <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" className="form-control mt-3" type="text" id="ngoMotive" name="ngoMotive" value={ngoData.ngoMotive} onChange={handleNgoData} placeholder="Enter Ngo Motive" autoFocus required />
                                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Ngo" />
                                    </form>
                                    <table className="table table-light table-striped ">
                                        <thead class="table-warning">
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
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* -------------------------- Find Ngo By Location --------------------------------- */}
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapselast" aria-expanded="false" aria-controls="collapselast">
                                    <h5>Find Ngo By Location</h5>
                                </button>
                            </h5>
                        </div>
                        <div id="collapselast" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">

                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                    <form className="form form-group form-primary" onSubmit={submitGetNgoByLocation}>
                                        <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" className="form-control mt-3" type="text" id="ngoLocation" name="ngoLocation" value={ngoData.ngoLocation} onChange={handleNgoData} placeholder="Enter Ngo location" autoFocus required />
                                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Ngo" />
                                    </form>
                                    <table className="table table-light table-striped ">
                                        <thead class="table-warning">
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -------------------------- Delete Ngo By Id --------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h5>Delete Ngo By Id</h5>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">

                                    <form className="form form-group form-primary" onSubmit={submitDeleteNgo}>
                                        <input min="1" className="form-control mt-3" type="number" id="ngoId" name="ngoId" value={ngoData.ngoId} onChange={handleNgoData} placeholder="Enter Ngo Id" autoFocus required />
                                        <input className="form-control mt-3 btn btn-danger" type="submit" value="Delete Ngo" />
                                    </form>

                                    <table className="table table-light table-striped ">
                                        <thead class="table-warning">
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

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -------------------------- Add Ngo --------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapselast1" aria-expanded="false" aria-controls="collapselast1">
                                    <h5>Add Ngo </h5>
                                </button>
                            </h5>
                        </div>
                        <div id="collapselast1" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">

                                    <form className="form form-group form-primary" onSubmit={submitAddNgo}>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Id</b></label>
                                            <div class="col-sm-10">
                                                <input type="number" class="form-control" id="ngoId" name="ngoId" value={ngoData.ngoId} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Name</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoName" name="ngoName" value={ngoData.ngoName} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Location</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoLocation" name="ngoLocation" value={ngoData.ngoLocation} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Type</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoType" name="ngoType" value={ngoData.ngoType} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label "><b>Ngo Motive</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoMotive" name="ngoMotive" value={ngoData.ngoMotive} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b> Ngo Donation</b></label>
                                            <div class="col-sm-10">
                                                <input min="1" type="number" class="form-control" id="donation" name="donation" value={ngoData.donation} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Size</b></label>
                                            <div class="col-sm-10">
                                                <input min="1" type="number" class="form-control" id="ngoSize" name="ngoSize" value={ngoData.ngoSize} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Activities</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoActivities" name="ngoActivities" value={ngoData.ngoActivities} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <input className="form-control mt-3 btn btn-success" type="submit" value="Add Scheme" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* -------------------------- Update Ngo  --------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapselast2" aria-expanded="false" aria-controls="collapselast2">
                                    <h5>Update Ngo</h5>
                                </button>
                            </h5>
                        </div>
                        <div id="collapselast2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                    <form className="form form-group form-primary" onSubmit={submitUpdateNgo}>
                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Id</b></label>
                                            <div class="col-sm-10">
                                                <input min="1" type="number" class="form-control" id="ngoId" name="ngoId" value={ngoData.ngoId} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Name</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoName" name="ngoName" value={ngoData.ngoName} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Location</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoLocation" name="ngoLocation" value={ngoData.ngoLocation} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Type</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoType" name="ngoType" value={ngoData.ngoType} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label "><b>Ngo Motive</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoMotive" name="ngoMotive" value={ngoData.ngoMotive} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b> Ngo Donation</b></label>
                                            <div class="col-sm-10">
                                                <input min="1" type="number" class="form-control" id="donation" name="donation" value={ngoData.donation} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Size</b></label>
                                            <div class="col-sm-10">
                                                <input min="1" type="number" class="form-control" id="ngoSize" name="ngoSize" value={ngoData.ngoSize} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Activities</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoActivities" name="ngoActivities" value={ngoData.ngoActivities} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <input className="form-control mt-3 btn btn-primary" type="submit" value="update Feedback" />
                                    </form>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}
export default NgoComponent;
