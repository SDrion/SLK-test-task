## When open project -> npm i

## Get requests

http://localhost:4000/box -> get all boxes \n
http://localhost:4000/item -> get all items
http://localhost:4000/item-box/<boxID> -> get all items in boxId
(optional) http://localhost:4000/item-box -> get all pair items-box

## POST requests

http://localhost:4000/box -> create a box
body of request =
{
  "description" : "text"
}

http://localhost:4000/item -> create an item
body of request =
{
  "description" : "text",
  "qnt": number
}

http://localhost:4000/item-box -> put items in box
body of request =
{
  "itemId": "itemId",
  "boxId": "boxId",
  "qnt": number
}

## DELETE request

http://localhost:4000/item-box -> delete the item from the box
body of request =
{
  "itemId": "itemId",
  "boxId": "boxId"
}

