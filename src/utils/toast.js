import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

export const showSuccess = (message) => {
    Toast.fire({
        icon: 'success',
        title: message
    });
};

export const showError = (message) => {
    Toast.fire({
        icon: 'error',
        title: message
    });
};

export const showInfo = (message) => {
    Toast.fire({
        icon: 'info',
        title: message
    });
};
