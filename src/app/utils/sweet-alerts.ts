import swal from 'sweetalert2';

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
      .then((event: any) => {
        if (event.value) resolve(true);
        else resolve(false);
      });
  });
}
