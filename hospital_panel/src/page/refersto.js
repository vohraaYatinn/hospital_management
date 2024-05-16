import React, { useState } from "react";
import { Link } from "react-router-dom";
import client1 from "../assets/images/client/01.jpg";
import Wrapper from "../components/wrapper";
import { departmentData } from "../data/data";
import {
  MdOutlineCheckCircleOutline,
  LiaTimesCircleSolid,
} from "../assets/icons/vander";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import {
  addDepartmentHospital,
  fetchSoftwareDepartmentHospital,
  fetchHospitalReferTo,
  addHospitalReferTo
} from "../urls/urls";
import useAxios from "../network/useAxios";
import { Alert } from "antd";
import { PaginationCountList, handlePagination } from "../utils/commonFunctions";

export default function Departments() {
  const [filters, setFilters] = useState({});
  let [show, setShow] = useState(false);
  let [showDetail, setShowDetail] = useState(false);
  let [acceptsDepartments, setAcceptsDepartments] = useState(false);
  const [departmentsSoftware, setSoftwaresData] = useState([]);
  const [formValues, setFormValues] = useState({
    departmentId: "new",
  });
  let [cancle, setCancle] = useState(false);
  const [departmentsValues, setDepartmentValues] = useState([]);
  const [paginationNumber, setPaginationNumber] = useState({
    from:0,
    to:10,
    currentTab:1
})
  const [
    departmentsResponse,
    departmentsError,
    departmentsLoading,
    departmentsFetch,
  ] = useAxios();

  const [
    addDepartmentsResponse,
    addDepartmentssError,
    addDepartmentssLoading,
    addDepartmentssFetch,
  ] = useAxios();
  const fetchDepartmentFunc = () => {
    departmentsFetch(fetchHospitalReferTo(filters));
  };

const addDepartmentSoftware = () => {
    addDepartmentssFetch(addHospitalReferTo(formValues));
  };
  useEffect(() => {
    fetchDepartmentFunc();
  }, [filters]);
  useEffect(() => {
    if (departmentsResponse?.result == "success" && departmentsResponse?.data) {
      setDepartmentValues(departmentsResponse?.data);
    }
  }, [departmentsResponse]);

  const [message, setMessage] = useState({
    message: "",
    showMessage: "",
  });
  useEffect(() => {
    if (addDepartmentsResponse?.result == "success") {
      setMessage({
        message: addDepartmentsResponse?.message,
        showMessage: true,
      });
      setShow(!show);
      fetchDepartmentFunc();
    }
  }, [addDepartmentsResponse]);

  return (
    <>
      <Wrapper>
        <div className="container-fluid">
          <div className="layout-specing">
            <div className="row">
              <div className="col-xl-9 col-lg-6 col-md-4">
                <h5 className="mb-0">Refers To</h5>
                <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                  <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                    <li className="breadcrumb-item">
                      <Link>UJUR</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Refers To
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                <div className="justify-content-md-end">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-sm-12 col-md-5"></div>

                    <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
                      <div className="d-grid">
                        <Link
                          to="#"
                          className="btn btn-primary"
                          onClick={() => setShow(!show)}
                        >
                          Add New
                        </Link>
                      </div>
                      <Modal
                        show={show}
                        onHide={() => setShow(!show)}
                        size="lg"
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title className="h5">
                            Add Refer To Doctor
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="modal-body p-3 pt-4">
                            <div className="row">
                             

                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Doctor Name{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    name="department"
                                    id="comments"
                                    rows="4"
                                    className="form-control"
                                    placeholder="Enter Doctor Name :"
                                    disabled={formValues?.departmentId != "new"}
                                    onChange={(e) => {
                                      setFormValues((prev) => ({
                                        ...prev,
                                        doctorName: e.target.value,
                                      }));
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Hospital Name{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <textarea
                                    name="comments"
                                    id="comments"
                                    rows="4"
                                    className="form-control"
                                    placeholder="Enter Hospital Name :"
                                    disabled={formValues?.departmentId != "new"}
                                    onChange={(e) => {
                                      setFormValues((prev) => ({
                                        ...prev,
                                        hospitalName: e.target.value,
                                      }));
                                    }}
                                  ></textarea>
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="d-grid">
                                  <button
                                    type="submit"
                                    onClick={addDepartmentSoftware}
                                    className="btn btn-primary"
                                  >
                                    Add An Department
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {message?.showMessage && (
                <Alert
                  style={{ marginTop: "1rem" }}
                  message={message?.message}
                  type="success"
                  closable
                  onClose={() => {
                    setMessage({
                      message: "",
                      showMessage: false,
                    });
                  }}
                />
              )}
              
              <div className="col-12 mt-4">
                <div className="table-responsive bg-white shadow rounded">
                  <table className="table mb-0 table-center">
                    <thead>
                      <tr>
                     
                        <th
                          className="border-bottom p-3"
                          style={{ minWidth: "180px" }}
                        >
                          Name - Hospital
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {departmentsValues.slice(paginationNumber.from, paginationNumber.to).map((item, index) => {
                        return (
                          <tr key={index}>
                          
                            <td className="p-3">
                              {item.name}
                            </td>{" "}
                            {/* Department Description */}
                            {/* Removed other <td>'s as they are not defined in your <th>'s */}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-12 mt-4">
                <div className="d-md-flex align-items-center text-center justify-content-between">
                  
                  <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                  { PaginationCountList(handlePagination, paginationNumber , departmentsValues, setPaginationNumber) }

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          show={cancle}
          onHide={() => setCancle(!cancle)}
          animation={false}
          centered
        >
          <Modal.Body>
            <div className="modal-body py-5">
              <div className="text-center">
                <div
                  className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
                  style={{ height: "95px", width: "95px" }}
                >
                  <span className="mb-0">
                    <LiaTimesCircleSolid className="h1" />
                  </span>
                </div>
                <div className="mt-4">
                  <h4>Cancel Deparments</h4>
                  <p className="para-desc mx-auto text-muted mb-0">
                    Great doctor if you need your family member to get immediate
                    assistance, emergency treatment.
                  </p>
                  <div className="mt-4">
                    <Link to="#" className="btn btn-soft-danger">
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Wrapper>
    </>
  );
}
