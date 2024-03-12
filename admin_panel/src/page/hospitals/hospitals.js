import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import { hospitalData } from "../../data/data";
import { FaStar } from "../../assets/icons/vander";

export default function Hospitals() {
	return (
		<Wrapper>
			<div className="container-fluid">
				<div className="layout-specing">
					<div className="row">
						<div className="col-xl-9 col-md-6">
							<h5 className="mb-0">Hospitals</h5>
							<nav aria-label="breadcrumb" className="d-inline-block mt-2">
								<ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
									<li className="breadcrumb-item">
										<Link to="/">Hospitals</Link>
									</li>
									<li className="breadcrumb-item active" aria-current="page">
										Hospitals
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
							<Link to="/add-hospital" className="btn btn-primary">
								Add New Hospital
							</Link>
						</div>
					</div>
					<div className="row row-cols-md-2 row-cols-lg-5">
						{hospitalData.map((item, index) => {
							return (
								<div className="col mt-4" key={index}>
									<Link to={`/hospital-profile/${item.id}`}>
										<div className="card team border-0 rounded shadow overflow-hidden h-100">
											<div className="team-img position-relative">
												<img src={item.image} className="img-fluid" alt="" />
											</div>
											<div className="card-body content text-center d-flex flex-column">
												<div className="title text-dark h5 d-block mb-0">
													{item.name}
												</div>
												<small className="text-muted speciality mt-2 ">
													Ratings: {item.rating} <FaStar />
												</small>
												<small className="text-muted speciality flex-grow-1 mt-2">
													Description:{" "}
													{item.description.length > 50
														? `${item.description.substring(0, 50)}...see more.`
														: item.description}
												</small>
											</div>
										</div>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Wrapper>
	);
}
