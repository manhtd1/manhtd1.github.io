// $(document).ready( function () {
//     $('#example').DataTable();
// } );
function sortTable(n) {
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0
    table = document.getElementById('myTable')
    switching = true
  //Set the sorting direction to ascending:
    dir = 'asc'
  /*Make a loop that will continue until
    no switching has been done:*/
    // $('#rx1').addClass('fas fa-angle-down')
    // $('#rx2').addClass('fas fa-angle-down')
    // $('#rx3').addClass('fas fa-angle-down')
    // $('#rx4').addClass('fas fa-angle-down')
    // $('#rx5').addClass('fas fa-angle-down')
    // $('#rx6').addClass('fas fa-angle-down')
    // $('#rx1').removeClass('fas fa-angle-up')
    // $('#rx2').removeClass('fas fa-angle-up')
    // $('#rx3').removeClass('fas fa-angle-up')
    // $('#rx4').removeClass('fas fa-angle-up')
    // $('#rx5').removeClass('fas fa-angle-up')
    // $('#rx6').removeClass('fas fa-angle-up')
    $('th').click(function(){
        $('#rx1').css('visibility','visible')
        $('#rc1').css('visibility','hidden')
        $('#rx2').css('visibility','visible')
        $('#rc2').css('visibility','hidden')
        $('#rx3').css('visibility','visible')
        $('#rc3').css('visibility','hidden')
        $('#rx4').css('visibility','visible')
        $('#rc4').css('visibility','hidden')
        $('#rx5').css('visibility','visible')
        $('#rc5').css('visibility','hidden')
        $('#rx6').css('visibility','visible')
        $('#rc6').css('visibility','hidden')
    }
)

  while (switching) {
    //start by saying: no switching is done:
    switching = false
    rows = table.rows
    /*Loop through all table rows (except the
      first, which contains table headers):*/
    
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false
      /*Get the two elements you want to compare,
        one from current row and one from the next:*/
      x = rows[i].getElementsByTagName('TD')[n]
      y = rows[i + 1].getElementsByTagName('TD')[n]
      /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
      if (dir == 'asc') {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true
          break
        }
      } else if (dir == 'desc') {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true
          break
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
      switching = true
      //Each time a switch is done, increase this count by 1:
      switchcount++
    } else {
      /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == 'asc') {
        dir = 'desc'
        switching = true
      }
    }
  }
}

