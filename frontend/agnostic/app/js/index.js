$.ajax({
  url: "https://data.austintexas.gov/resource/7d8e-dm7r.json",
  type: "GET",
  data: {
    $limit: 5000
  }
}).done(function (data) {

  console.log(data);

  console.log(data[7].day_of_week + " day of week");
  console.log(data[7].hour + " mil")

  let hour = data[7].hour

  if (hour > 12) {
    hour = hour - 12 + " pm";
  } else {
    hour = hour + " am";
  }

  console.log(hour)
})
