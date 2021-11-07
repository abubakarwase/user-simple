import swal from 'sweetalert2';

// // Confirm & Cancel Button
// export function confirmCancelButton(
//   title?,
//   text?,
//   type?,
//   confirmButtonText = 'Yes, proceed',
//   cancelButtonText = 'No, cancel!'
// ) {
//   return new Promise((resolve, reject) => {
//     swal
//       .fire({
//         title,
//         text,
//         type: type || 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#0CC27E',
//         cancelButtonColor: '#FF586B',
//         confirmButtonText,
//         cancelButtonText,
//         confirmButtonClass: 'btn btn-success btn-raised mr-5',
//         cancelButtonClass: 'btn btn-danger btn-raised',
//         buttonsStyling: false,
//       })
//       .then((event) => {
//         if (event.value) resolve(true);
//         else resolve(false);
//       });
//   });
// }
// Confirm & Cancel Button
export function confirmCancelButton() {
  return new Promise((resolve, reject) => {
    swal
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      // .then((result) => {
      //   if (result.isConfirmed) {
      //     swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      //   }
      // })
      .then((event: any) => {
        if (event.value) resolve(true);
        else resolve(false);
      });
  });
}
