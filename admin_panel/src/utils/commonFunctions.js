import moment from "moment";
import { Link } from "react-router-dom";

export function isNumber(value) {
    return !isNaN(Number(value)) && value !== '';
  }
  export const calculateAge = (dateOfBirth) => {
    const currentDate = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

export const changeDateFormat = (date) =>{
  return moment(date).format('YYYY-MM-DD')
}

export const designStarsReviews = (stars) => {
  let starsArray = [];
  for (let i = 0; i < stars; i++) {
      starsArray.push(
          <li key={i} className="list-inline-item">
              <i className="mdi mdi-star text-warning"></i>
          </li>
      );
  }
  return starsArray;
}

export const PaginationCountList = (handlePagination, pageArray, data, setPaginationNumber) => {
  let list = [
  <li className="page-item"><Link className="page-link" to="#" aria-label="Previous" onClick={() => {
    if(pageArray.currentTab != 1){
      handlePagination(pageArray.currentTab - 1, setPaginationNumber)

    }
  }}>Prev</Link></li>
  ];
  for (let index = 0; (index < data.length / 10 ); index++) {
    list.push(
      <li key={index} onClick={() => {
        handlePagination(index + 1, setPaginationNumber)
      }} className={`page-item ${(index + 1 == pageArray.currentTab) && "active"}`}>
        <Link className="page-link" to="#">{index + 1}</Link>
      </li>
    );
  }
  list.push(<li className="page-item"><Link className="page-link" to="#" aria-label="Next"
    onClick={() => {
      if(!(pageArray.currentTab + 1 > data.length / 10)){
        handlePagination(pageArray.currentTab + 1, setPaginationNumber)

      }
    }}
  >Next</Link></li>)

  return list;
};
      // Function to handle pagination
export const handlePagination = (pageNumber, setPaginationNumber) => {
  const itemsPerPage = 10; // Number of items per page
  const newFrom = (pageNumber - 1) * itemsPerPage; // Calculate new 'from' value
  const newTo = pageNumber * itemsPerPage; // Calculate new 'to' value
        setPaginationNumber({
    from: newFrom,
    to: newTo,
    currentTab:pageNumber
  });
};

export const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const capitalizeFirstChar = (string) => {
  if(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  else{
    return ""
  }
};


export const checkPaymentStatus = (status) => {
 
  const values = {
    "Paid":"Paid",
    "Not Paid":"Not Paid",
    "Refund": "Refunded"
  }
  return values?.[status] || "N/A"

};

export const checkAppointmentStatus = (status) => {
  const values = {
    "completed":"Completed",
    "pending":"Pending",
    "past": "Past",
    "cancel": "Canceled",
    "queue":"Queued"
  }
  return values?.[status] || "N/A"

};
