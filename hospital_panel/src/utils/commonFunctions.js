import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
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
    const totalPages = Math.ceil(data.length / 10);
    const currentSet = Math.ceil(pageArray.currentTab / 5); // Determine the current set of pages
    const startPage = (currentSet - 1) * 5 + 1; // Start of the current set
    const endPage = Math.min(currentSet * 5, totalPages); // End of the current set
  
    let list = [];
  
    // Conditionally render the "Prev 10" button
    if (pageArray.currentTab > 10) {
      list.push(
        <li className="page-item" key="prev10">
          <Link className="page-link" to="#" aria-label="Prev 10" onClick={() => {
            handlePagination(Math.max(pageArray.currentTab - 10, 1), setPaginationNumber);
          }}>Prev 10</Link>
        </li>
      );
    }
  
    // "Prev" button
    list.push(
      <li className="page-item" key="prev">
        <Link className="page-link" to="#" aria-label="Previous" onClick={() => {
          if (pageArray.currentTab > 1) {
            handlePagination(pageArray.currentTab - 1, setPaginationNumber);
          }
        }}>Prev</Link>
      </li>
    );
  
    // Page number buttons
    for (let index = startPage; index <= endPage; index++) {
      list.push(
        <li key={index} onClick={() => {
          handlePagination(index, setPaginationNumber);
        }} className={`page-item ${(index === pageArray.currentTab) && "active"}`}>
          <Link className="page-link" to="#">{index}</Link>
        </li>
      );
    }
  
    // "Next" button
    if (endPage < totalPages) {
      list.push(
        <li className="page-item" key="next">
          <Link className="page-link" to="#" aria-label="Next" onClick={() => {
            if (pageArray.currentTab < totalPages) {
              handlePagination(pageArray.currentTab + 1, setPaginationNumber);
            }
          }}>Next</Link>
        </li>
      );
    }
  
    // Conditionally render the "Skip 10" button
    if (pageArray.currentTab + 10 <= totalPages) {
      list.push(
        <li className="page-item" key="skip10">
          <Link className="page-link" to="#" aria-label="Skip 10" onClick={() => {
            handlePagination(Math.min(pageArray.currentTab + 10, totalPages), setPaginationNumber);
          }}>Skip 10</Link>
        </li>
      );
    }
  
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
      "cancel": "Cancelled",
      "queue":"Queued"
    }
    return values?.[status] || "N/A"

  };

  
  
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};
