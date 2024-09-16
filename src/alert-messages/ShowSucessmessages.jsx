import Swal from "sweetalert2";

const ShowSucessmessages = (title) => {
  var toastMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    animation: false,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
  toastMixin.fire({
    animation: true,
    title: title
  });
};

export default ShowSucessmessages;
