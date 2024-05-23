document.cookie = "orderId="+0 +",counter="+0

let httpRequest = new XMLHttpRequest(),
jsonArray,
method = "GET",
jsonRequestURL = "https://664db9f2ede9a2b556549a0e.mockapi.io/prod";

httpRequest.open(method, jsonRequestURL, true);
httpRequest.onreadystatechange = function()
{
    if(httpRequest.readyState == 4 && httpRequest.status == 200)
    {
        // convert JSON into JavaScript object
        jsonArray = JSON.parse(httpRequest.responseText)
        console.log(jsonArray)    
        jsonArray.push(
            {
                "id": (jsonArray.length)+1, "amount": 200,"product":["userOrder"]
            })

       
       
    }
}
httpRequest.send(null);
