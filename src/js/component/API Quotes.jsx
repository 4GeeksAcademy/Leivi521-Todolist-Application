import react, {useState} from "react"

const Quotes = ()=>   {
	const [Quote, setQuote] = useState ("");

}




fetch('https://playground.4geeks.com/todo/user/alesanchezr', {
	method: "PUT",
	body: JSON.stringify(todos),
	headers: {
	  "Content-Type": "application/json"
	}
  })
  .then(resp => {
	  console.log(resp.ok); // Will be true if the response is successful
	  console.log(resp.status); // The status code=200 or code=400 etc.
	  console.log(resp.text()); // Will try to return the exact result as a string
	  return resp.json(); // (returns promise) Will try to parse the result as JSON and return a promise that you can .then for results
  })
  .then(data => {
	  // Here is where your code should start after the fetch finishes
	  console.log(data); // This will print on the console the exact object received from the server
  })
  .catch(error => {
	  // Error handling
	  console.error(error);
  });


  export default Quotes;