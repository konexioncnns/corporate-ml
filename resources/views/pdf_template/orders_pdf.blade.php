<!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<div style="display:'flex';justify-content:'space-between'">
<h2><img src="images/logo.png"/></h2>
<h3>Detail commande</h3>
</div>

<table>
 <thead>
 <tr>
    <th>Numero commande</th>
    <th>Formation</th>
    <th>Particapant(s)</th>
    <th>price</th>
  </tr>
 </thead>
  
  <tbody>
   
  <tr>
  
@foreach($orderList as $order){
    <td>#{{$order->order_number}}</td>
    <td>Roland Mendel</td>
    <td>{{$order->qty}}</td>
    <td>{{$order->price}} FCFA</td> }
  </tr>
@endforeach
  </tbody>
 
</table>

</body>
</html>