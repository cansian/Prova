$(document).ready(function () {
    $('#checkCaixa').click(function() {
    checked = $("input[type=checkbox]:checked").length;

    if(!checked) {
        alert("Você precisa preencher pelo menos um interesse");
        return false;
    }

    });
});    


var formData = JSON.stringify($("#myForm").serializeArray());



$(document).ready(function() {
    $("#checkCaixa").click(function(e){
       var jsonData = {};
  
     var formData = $("#myForm").serializeArray();
    // console.log(formData);
  
     $.each(formData, function() {
          if (jsonData[this.name]) {
             if (!jsonData[this.name].push) {
                 jsonData[this.name] = [jsonData[this.name]];
             }
             jsonData[this.name].push(this.value || '');
         } else {
             jsonData[this.name] = this.value || '';
         }
  
  
     });
     console.log(jsonData);
      $.ajax(
      {
          url : "action.json",
          type: "POST",
          data : jsonData,
  
      });
      e.preventDefault(); 
  });
});

