import React, { useState } from "react";
import Select from "react-select";
import AddComments from "../../components/dashboard/addComments";
import { Link } from "react-router-dom";
import { checkNotNull } from "../../utils/commonFunctions";

const options = [
	{ value: "completeBloodCount", label: "Complete Blood Count (CBC)" },
	{ value: "bloodGlucose", label: "Blood Glucose Test" },
	{ value: "lipidPanel", label: "Lipid Panel" },
	{ value: "thyroidFunction", label: "Thyroid Function Tests" },
	{ value: "liverFunction", label: "Liver Function Tests" },
	{ value: "kidneyFunction", label: "Kidney Function Tests" },
	{ value: "hemoglobinA1c", label: "Hemoglobin A1c Test" },
	{ value: "coagulationPanel", label: "Coagulation Panel" },
	{ value: "urinalysis", label: "Urinalysis" },
	{ value: "serumElectrolytes", label: "Serum Electrolytes Test" },
	{ value: "C-reactiveProtein", label: "C-reactive Protein (CRP) Test" },
	{ value: "vitaminDLevels", label: "Vitamin D Levels Test" },
	{ value: "ironStudies", label: "Iron Studies" },
	{ value: "HIVScreening", label: "HIV Screening" },
	{ value: "hepatitisPanel", label: "Hepatitis Panel" },
	{ value: "thyroidAntibodies", label: "Thyroid Antibodies Test" },
	{
		value: "prostateSpecificAntigen",
		label: "Prostate Specific Antigen (PSA)",
	},
	{ value: "allergyTesting", label: "Allergy Testing" },
	{ value: "serumCortisol", label: "Serum Cortisol Test" },
	{ value: "ESR", label: "Erythrocyte Sedimentation Rate (ESR)" },
	{ value: "bloodType", label: "Blood Type Testing" },
	{ value: "CRP", label: "C-reactive Protein (CRP) Test" },
	{
		value: "thyroidStimulatingHormone",
		label: "Thyroid Stimulating Hormone (TSH) Test",
	},
	{ value: "hemoglobinElectrophoresis", label: "Hemoglobin Electrophoresis" },
	{ value: "serumFerritin", label: "Serum Ferritin Test" },
	{ value: "creatineKinase", label: "Creatine Kinase (CK) Test" },
	{ value: "lipaseTest", label: "Lipase Test" },
	{ value: "prothrombinTime", label: "Prothrombin Time (PT) Test" },
	{
		value: "activatedPartialThromboplastinTime",
		label: "Activated Partial Thromboplastin Time (APTT) Test",
	},
	{ value: "hormonePanel", label: "Hormone Panel" },
	{ value: "D-dimer", label: "D-dimer Test" },
	{ value: "electrolytePanel", label: "Electrolyte Panel" },
	{ value: "uricAcidTest", label: "Uric Acid Test" },
	{ value: "serumCalcium", label: "Serum Calcium Test" },
	{ value: "hCGPregnancyTest", label: "hCG Pregnancy Test" },
	{ value: "fibrinogenTest", label: "Fibrinogen Test" },
];

const optionsDosage = [
	{ value: "1", label: "1" },
	{ value: "2", label: "2" },
	{ value: "3", label: "3" },
	{ value: "4", label: "4" },
];
const weeksOptions = [
	{ value: "Day", label: "Day" },
	{ value: "Week", label: "Week" },
	{ value: "Month", label: "Month" },
];
const time = [
	{ value: "Before Food", label: "Before Food" },
	{ value: "After Food", label: "After Food" },
	{ value: "Empty Stomach", label: "Empty Stomach" },
];
const handleChange = (selectedOption) => {};

function DoctorInvestigationForm({
	showDrawer,
	prescription,
	setPrescription,
	medication,
	setMedication,
}) {
	const handleMedicationChange = (e, name = false) => {
		console.log(e);
		if (e?.target) {
			const { name, value } = e.target;
			setMedication((prevMedication) => ({
				...prevMedication,
				[name]: value,
			}));
		} else {
			setMedication((prevMedication) => ({
				...prevMedication,
				[name]: e.value,
			}));
		}
	};

	const handleAddMedication = () => {
		if (checkNotNull(medication.labTests)) {
			showDrawer();
			setPrescription((prevPrescription) => ({
				...prevPrescription,
				labReports: [...prevPrescription.labReports, medication.labTests],
			}));
		}

		setMedication({
			labTests: "",
		});
	};

	const handlePrescriptionSubmit = (e) => {
		e.preventDefault();
	};
	let [activeIndex, setActiveIndex] = useState(1);

	return (
		<div className="tab-pane fade show active">
			<h5 className="mb-0">Recommended Test:</h5>
			<form className="mt-4" onSubmit={handlePrescriptionSubmit}>
				<div className="row">
					<div className="col-md-12">
						<div className="mb-3">
							<div className="row">
								<div className="col-md-12 mb-2">
									<Select
										name="medicineName"
										value={{
											value: medication.labTests,
											label: medication.labTests,
										}}
										onChange={(e) => handleMedicationChange(e, "labTests")}
										options={options}
										placeholder="Select Medicine"
										isSearchable
										required
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12 " style={{ paddingBottom: "10rem" }}>
						<button
							type="button"
							className="btn btn-primary"
							onClick={handleAddMedication}>
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default DoctorInvestigationForm;
