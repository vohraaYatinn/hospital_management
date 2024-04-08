import { Link } from "react-router-dom";

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

export function checkNotNull(obj) {
  for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== "") {
          return true; // Return true if any property is not null
      }
  }
  return false; // Return false if all properties are null
}

export function checkNotAllNull(obj) {
  for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === "") {
          return false; // Return true if any property is not null
      }
  }
  return true; // Return false if all properties are null
}
export function getCurrentDate() {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // January is 0!
  const yyyy = today.getFullYear();

  if (dd < 10) {
      dd = '0' + dd;
  }

  if (mm < 10) {
      mm = '0' + mm;
  }

  return yyyy + '-' + mm + '-' + dd;
}