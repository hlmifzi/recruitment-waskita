import swal from 'sweetalert2';

const Swal = {
    success: () => (
        swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Anda Berhasil Login!',
            showConfirmButton: false,
            timer: 1800
        })
    ),
    failed: (text) => (
        swal.fire({
            type: 'error',
            title: 'Oops...',
            text: `${text} !`,
        })
    ),
    uploadFailed: () => (
        swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Upload File gagal !',
        })
    ),
    finishAllStep: () => (
        swal.fire({
            type: 'success',
            title: 'Selamat proses recruitment selesai...',
            text: 'Dokumen anda sudah lengkap !',
        })
    )
}

export default Swal