## When open project -> npm i

## Get requests

http://localhost:4000/box -> get all boxes <br>
http://localhost:4000/item -> get all items <br>
http://localhost:4000/item-box/boxID -> get all items in boxId <br>
(optional) http://localhost:4000/item-box -> get all pair items-box <br>

## POST requests

http://localhost:4000/box -> create a box <br>
body of request = <br>
{ <br>
  "description" : "text" <br>
} <br>

http://localhost:4000/item -> create an item <br>
body of request = <br>
{ <br>
  "description" : "text", <br>
  "qnt": number <br>
} <br>

http://localhost:4000/item-box -> put items in box <br>
body of request = <br>
{ <br>
  "itemId": "itemId", <br>
  "boxId": "boxId", <br>
  "qnt": number <br>
} <br>

## DELETE request <br>

http://localhost:4000/item-box -> delete the item from the box <br>
body of request = <br>
{ <br>
  "itemId": "itemId", <br>
  "boxId": "boxId" <br>
} <br>

