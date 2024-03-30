import moment from "moment";

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