export const parseCustomDate = (dateStr) => {
    const datePattern = /(\w+),\s(\w+)\s(\d+),\s(\d+)\sat\s(\d+):(\d+)\s(AM|PM)/;
    const match = dateStr.match(datePattern);
    if (match) {
      const [, , monthName, day, year, hour, minute, period] = match;
      const monthNames = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11,
      };
      const month = monthNames[monthName];
      let hours = parseInt(hour, 10);
  
      if (period === "PM" && hours < 12) hours += 12;
      else if (period === "AM" && hours === 12) hours = 0;
  
      return new Date(year, month, day, hours, minute);
    }
    return new Date(dateStr); // Fallback
  };
 export const formatDate = (date) => {
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    const dayOfWeek = weekDays[date.getDay()];
    const month = monthNames[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    const hours24 = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
  
    const hours12 = hours24 % 12 || 12;
    const period = hours24 >= 12 ? "PM" : "AM";
    return `${dayOfWeek}, ${month} ${day}, ${year} at ${hours12}:${minutes} ${period}`;
  };
