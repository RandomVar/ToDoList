import $ from 'jquery';
var res=[];
var baseurl='http://127.0.0.1:8000/api/tasks/'
export function get()
{
  $.ajax({
    url: baseurl+'?format=json',
    type: 'get',
    dataType: 'text',
    async:false,
    success: function(r) {
        res = eval(r);
      }
})
return res;
}
export default{
 getData()
 {
  return get()
 },
 addTask(newItem)
 {
  $.ajax({
    url: baseurl,
    type: 'POST',
    dataType: 'application/jsonp',
    crossDomain : true,
    data: newItem,
    async:false,
  //   success: function(){
      
  //     console.log('success');
      
  // }
  // ,error:function(xhr){alert(xhr.responseText)}
  });
  // console.log('success');
   return get();
 },
 updateTask(item)
 {
  $.ajax({
    url: baseurl+item['id']+ '.json',
    type: 'PUT',
    dataType: 'application/jsonp',
    crossDomain : true,
    data: item,
    async:false
  })
  
  return get();
 },
 deleteTask(item)
 {
  $.ajax({
    url: baseurl+item['id'] + '.json',
    type: 'DELETE',
    dataType: 'application/jsonp',
    crossDomain : true,
    data: item,
    async:false}
    )
    return get();
 }
}
